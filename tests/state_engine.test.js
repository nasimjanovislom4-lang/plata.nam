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
    // Default revenue/cogs should be 0 when no orders exist
    let fin = store.getFinancialReport();
    assert.equal(fin.totalRevenue, 0);
    assert.equal(fin.totalCOGS, 0);
    assert.equal(fin.grossProfit, 0);

    // Create an order to verify formula
    store.createOrder({
      client: { id: 'USR-TEST', name: 'Alisher', phone: '+998931112233' },
      logistics: { serviceType: 'Filialgacha', address: 'Toshkent sh.', postcode: '100000' },
      paymentCard: '8600 1234 5678 9012'
    });
    fin = store.getFinancialReport();
    assert.ok(fin.totalRevenue > 0);
    assert.ok(fin.totalCOGS > 0);
    assert.equal(fin.grossProfit, fin.totalRevenue - fin.totalCOGS - fin.uzpostExpense);
  });

  test('admin can add new products to catalog', () => {
    const store = getFreshStore();
    const newProd = store.addProduct({
      title: 'NVIDIA GeForce RTX 4070 Ti Super 16GB',
      category: 'Accessories & Ports',
      retailPrice: 9500000,
      costPrice: 8200000,
      oldPrice: 10500000,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80',
      specs: '16GB GDDR6X, 256-bit, DLSS 3, 3x DisplayPort, 1x HDMI',
      officialSource: 'Amazon.com / NVIDIA Store',
      amazonUrl: 'https://www.amazon.com/dp/B0CS3ZZNHD'
    });

    assert.ok(newProd.id.startsWith('PROD-'));
    const fetched = store.getProductById(newProd.id);
    assert.equal(fetched.title, 'NVIDIA GeForce RTX 4070 Ti Super 16GB');
  });

  test('admin can quote URL request and update proposed price', () => {
    const store = getFreshStore();
    const req = store.addUrlRequest({
      url: 'https://www.amazon.com/dp/B0CK1Y7P7R',
      title: 'Corsair Dominator Titanium DDR5 64GB',
      note: 'White edition 6000MHz'
    });

    const quoted = store.quoteUrlRequest(req.id, 3200000, 2600000);
    assert.equal(quoted.status, 'APPROVED');
    assert.equal(quoted.proposedPrice, 3200000);
    assert.equal(quoted.costPrice, 2600000);
  });

  test('trackParcel returns order details and delivery timeline stages', () => {
    const store = getFreshStore();
    const order = store.createOrder({
      client: { id: 'USR-TEST', name: 'Alisher', phone: '+998931112233' },
      logistics: { serviceType: 'Filialgacha', address: 'Toshkent sh.', postcode: '100000' },
      paymentCard: '8600 1234 5678 9012'
    });
    const trackingNum = order.logistics.trackingNumber;

    const trackingResult = store.trackParcel(trackingNum);
    assert.ok(trackingResult.found, 'Tracking result should be found');
    assert.equal(trackingResult.order.logistics.trackingNumber, trackingNum);
    assert.ok(Array.isArray(trackingResult.timeline), 'Timeline should be an array');
    assert.ok(trackingResult.timeline.length >= 4, 'Timeline should have 4 steps');
  });
});

