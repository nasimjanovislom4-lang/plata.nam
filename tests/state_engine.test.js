import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { createPlataStore } from '../src_core.js';

describe('PlataStore State Engine', () => {
  function getFreshStore() {
    const mockStorage = {};
    return createPlataStore({
      getItem: (k) => mockStorage[k] || null,
      setItem: (k, v) => { mockStorage[k] = v; }
    });
  }

  test('initializes default products and categories correctly', () => {
    const store = getFreshStore();
    const products = store.getProducts();
    assert.ok(products.length >= 4, 'Should have at least 4 default products');
    
    const categories = ['Motherboard', 'Cooling', 'Storage', 'Accessories & Ports'];
    const foundCategories = [...new Set(products.map(p => p.category))];
    for (const cat of categories) {
      assert.ok(foundCategories.includes(cat), `Category ${cat} must exist in products`);
    }

    const b650 = store.getProductById('PLT-B650');
    assert.equal(b650.title, 'ASUS TUF GAMING B650-PLUS WIFI AM5');
    assert.equal(b650.retailPrice, 2850000);
    assert.equal(b650.costPrice, 2300000);
  });

  test('cart calculations accurately compute retail, discounts and totals', () => {
    const store = getFreshStore();
    // Default cart has 1x PLT-B650: retail 2,850,000, oldPrice 3,200,000
    let calc = store.getCartCalculation();
    assert.equal(calc.count, 1);
    assert.equal(calc.totalRetail, 2850000);
    assert.equal(calc.discount, 350000);
    assert.equal(calc.deliveryFee, 0); // UzPost free
    assert.equal(calc.finalAmount, 2850000);

    // Add AK620 cooler (retail 850,000, old 990,000)
    store.addToCart('CLR-AK620', 2);
    calc = store.getCartCalculation();
    assert.equal(calc.count, 3);
    assert.equal(calc.totalRetail, 2850000 + 850000 * 2);
    assert.equal(calc.discount, 350000 + 140000 * 2);
  });

  test('order creation generates UZP-YYYYMMDD-[RANDOM-4] and clears cart', () => {
    const store = getFreshStore();
    const order = store.createOrder({
      client: { id: 'USR-TEST', name: 'Alisher', phone: '+998931112233' },
      logistics: { serviceType: 'Filialgacha', address: 'Toshkent sh.', postcode: '100000' },
      paymentCard: '8600 1234 5678 9012'
    });

    assert.ok(order.orderId.startsWith('ORD-2026-'));
    assert.match(order.logistics.trackingNumber, /^UZP-\d{8}-\d{4}$/);
    assert.equal(order.paymentStatus, 'PAID');
    assert.equal(order.stage, 'PAID');
    assert.equal(store.getCart().length, 0, 'Selected items should be cleared from cart');
  });

  test('financial report calculates Revenue, COGS and Gross Profit formula', () => {
    const store = getFreshStore();
    const fin = store.getFinancialReport();
    assert.ok(fin.totalRevenue > 0);
    assert.ok(fin.totalCOGS > 0);
    assert.equal(fin.grossProfit, fin.totalRevenue - fin.totalCOGS - fin.uzpostExpense);
  });

  test('admin can advance order stage and update COGS', () => {
    const store = getFreshStore();
    const orders = store.getOrders();
    const orderId = orders[0].orderId;
    
    store.updateOrderStage(orderId, 'WAREHOUSE_UZPOST', 2250000, 'UZP-CUSTOM-1234');
    const updated = store.getOrders().find(o => o.orderId === orderId);
    assert.equal(updated.stage, 'WAREHOUSE_UZPOST');
    assert.equal(updated.costAmount, 2250000);
    assert.equal(updated.logistics.trackingNumber, 'UZP-CUSTOM-1234');
    assert.equal(updated.profit, updated.totalPaid - 2250000);
  });
});
