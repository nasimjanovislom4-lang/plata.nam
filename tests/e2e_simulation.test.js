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

    // 5. 4-Stage Stepper Tracker in Client Cabinet
    assert.ok(htmlContent.includes('pipeline-tracker'), 'Pipeline tracker must exist in client portal');
    assert.ok(htmlContent.includes('id="customUrlInput"'), 'URL request input must exist');

    // 6. Admin cashflow dashboard
    assert.ok(htmlContent.includes('id="statRevenue"'), 'Revenue stat card must exist');
    assert.ok(htmlContent.includes('id="statCOGS"'), 'COGS stat card must exist');
    assert.ok(htmlContent.includes('id="statProfit"'), 'Gross profit stat card must exist');
    assert.ok(htmlContent.includes('id="adminOrdersTableBody"'), 'Admin orders table must exist');
    assert.ok(htmlContent.includes('admin2026'), 'Admin credentials must be configured');
  });

  test('embedded JavaScript executes without any syntax or runtime errors', () => {
    const scriptMatch = htmlContent.match(/<script>([\s\S]*?)<\/script>/);
    assert.ok(scriptMatch, 'Script tag must be present in index.html');
    
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
    const scriptFunc = new Function('window', 'document', 'localStorage', 'navigator', 'Intl', scriptMatch[1]);
    assert.doesNotThrow(() => {
      scriptFunc(sandbox.window, sandbox.document, sandbox.localStorage, sandbox.navigator, sandbox.Intl);
    }, 'Script evaluation should execute without errors');
  });
});
