import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

describe('plata.nam HTML/JS E2E Verification', () => {
  const htmlContent = fs.readFileSync('index.html', 'utf8');

  test('index.html contains all required sections and IDs from TZ', () => {
    // 1. Header elements
    assert.ok(htmlContent.includes('id="cartBadgeCount"'), 'Cart badge counter must exist in header');
    assert.ok(htmlContent.includes('Saralangan'), 'Saralanganlar button must exist in header');
    assert.ok(htmlContent.includes('id="userBtnLabel"'), 'User auth button must exist in header');
    assert.ok(htmlContent.includes('id="searchInput"'), 'Search input must exist in header');
    assert.ok(htmlContent.includes('id="categoryPills"'), 'Category subnav pills must exist');

    // 2. 4 SPA views
    assert.ok(htmlContent.includes('id="view-catalog"'), 'Catalog view must exist');
    assert.ok(htmlContent.includes('id="view-cart"'), 'Cart view must exist');
    assert.ok(htmlContent.includes('id="view-client"'), 'Client portal view must exist');
    assert.ok(htmlContent.includes('id="view-admin"'), 'Admin dashboard view must exist');

    // 3. Uzum cart elements
    assert.ok(htmlContent.includes('id="selectAllCartCheckbox"'), 'Select all checkbox must exist');
    assert.ok(htmlContent.includes('UzPost tezyurar pochtasi orqali — Butun respublika bo\'ylab BEPUL'), 'UzPost free shipping banner must exist');
    assert.ok(htmlContent.includes('id="summaryFinalTotal"'), 'Summary final total must exist');
    assert.ok(htmlContent.includes('id="btnCheckoutSubmit"'), 'Checkout submit button must exist');

    // 4. Logistics and Payment modal
    assert.ok(htmlContent.includes('id="checkoutModal"'), 'Checkout modal must exist');
    assert.ok(htmlContent.includes('name="deliveryType"'), 'Delivery type radio must exist');
    assert.ok(htmlContent.includes('id="checkoutPostcode"'), 'Postcode input must exist');
    assert.ok(htmlContent.includes('id="checkoutCardNumber"'), 'Card number input must exist');

    // 5. Client Cabinet & Modals
    assert.ok(htmlContent.includes('id="clientOrdersList"'), 'Client orders container must exist in client portal');
    assert.ok(htmlContent.includes('id="customUrlInput"'), 'URL request input must exist');
    assert.ok(htmlContent.includes('id="liveTrackingModal"'), 'Live tracking modal must exist');

    // 6. Admin cashflow dashboard
    assert.ok(htmlContent.includes('id="statRevenue"'), 'Revenue stat card must exist');
    assert.ok(htmlContent.includes('id="statCOGS"'), 'COGS stat card must exist');
    assert.ok(htmlContent.includes('id="statProfit"'), 'Gross profit stat card must exist');
    assert.ok(htmlContent.includes('id="adminOrdersTableBody"'), 'Admin orders table must exist');
    assert.ok(htmlContent.includes('admin2026'), 'Admin credentials must be configured');

    // 7. Verification of separated file links
    assert.ok(htmlContent.includes('<link rel="stylesheet" href="style.css">'), 'Must link external style.css');
    assert.ok(htmlContent.includes('<script src="app.js"></script>'), 'Must link external app.js');
  });

  test('style.css contains complete design system and responsive rules', () => {
    const cssContent = fs.readFileSync('style.css', 'utf8');
    assert.ok(cssContent.includes('--primary: #7000ff;'), 'Uzum brand primary color must be defined');
    assert.ok(cssContent.includes('.pipeline-tracker'), 'Pipeline stepper styles must be defined');
    assert.ok(cssContent.includes('.cart-summary-sticky'), 'Sticky cart summary styles must be defined');
    assert.ok(cssContent.includes('.product-card'), 'Product card styles must be defined');
  });

  test('app.js executes without any syntax or runtime errors and contains Intel/Ryzen products', () => {
    const jsContent = fs.readFileSync('app.js', 'utf8');
    assert.ok(jsContent.length > 1000, 'app.js must not be empty');
    assert.ok(jsContent.includes('Ryzen 7 7800X3D'), 'AMD Ryzen 7 7800X3D must be in catalog');
    assert.ok(jsContent.includes('amazon.com/s?k='), 'Amazon product live search links must be present in app.js');
    assert.ok(jsContent.includes('UZP-'), 'UzPost tracking format must be implemented');
    
    // Create an isolated sandbox with mock browser globals
    const mockLocalStorage = {
      _data: {},
      getItem(k) { return this._data[k] || null; },
      setItem(k, v) { this._data[k] = String(v); }
    };

    const mockElement = () => ({
      classList: { add: () => {}, remove: () => {}, toggle: () => {} },
      style: {},
      textContent: '',
      innerHTML: '',
      value: '',
      checked: true,
      appendChild: () => {},
      remove: () => {},
      querySelectorAll: () => []
    });

    const mockDocument = {
      getElementById: (id) => mockElement(),
      querySelectorAll: () => [mockElement()],
      querySelector: () => mockElement(),
      createElement: () => mockElement()
    };

    const sandbox = {
      console,
      localStorage: mockLocalStorage,
      window: {
        addEventListener: () => {},
        scrollTo: () => {}
      },
      document: mockDocument,
      navigator: { clipboard: { writeText: async () => {} } },
      Intl
    };

    // Evaluate script in sandbox
    const scriptFunc = new Function('window', 'document', 'localStorage', 'navigator', 'Intl', jsContent);
    assert.doesNotThrow(() => {
      scriptFunc(sandbox.window, sandbox.document, sandbox.localStorage, sandbox.navigator, sandbox.Intl);
    }, 'app.js should execute without any syntax or runtime errors');
  });
});
