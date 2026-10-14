// Core data and state engine for plata.nam

export const INITIAL_PRODUCTS = [
  {
    id: "PLT-B650",
    title: "ASUS TUF GAMING B650-PLUS WIFI AM5",
    category: "Motherboard",
    retailPrice: 2850000,
    costPrice: 2300000,
    oldPrice: 3200000,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80",
    specs: "Socket AM5, DDR5, PCIe 5.0 M.2, 2.5Gb LAN, Wi-Fi 6, Aura Sync RGB",
    officialSource: "asus.com / newegg",
    oemTag: "plata.nam (Official Import)",
    inStock: true
  },
  {
    id: "PLT-Z790",
    title: "MSI MAG Z790 TOMAHAWK WIFI DDR5 LGA1700",
    category: "Motherboard",
    retailPrice: 3450000,
    costPrice: 2800000,
    oldPrice: 3900000,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    specs: "Socket LGA1700 (14/13th Gen), PCIe 5.0, Wi-Fi 6E, 4x M.2 Slots",
    officialSource: "msi.com / amazon",
    oemTag: "plata.nam (Official Import)",
    inStock: true
  },
  {
    id: "CLR-AK620",
    title: "DeepCool AK620 High-Performance Dual-Tower Cooler",
    category: "Cooling",
    retailPrice: 850000,
    costPrice: 620000,
    oldPrice: 990000,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=400&q=80",
    specs: "260W TDP, 6 Heatpipes, 2x 120mm FDB Fans, LGA1700/AM5",
    officialSource: "deepcool.com / newegg",
    oemTag: "plata.nam (Official Import)",
    inStock: true
  },
  {
    id: "CLR-LT720",
    title: "DeepCool LT720 360mm AIO Liquid Cooler (SVO)",
    category: "Cooling",
    retailPrice: 1750000,
    costPrice: 1350000,
    oldPrice: 1980000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    specs: "360mm Radiator, 4th Gen Dual-Chamber Pump, Anti-Leak Tech, ARGB",
    officialSource: "deepcool.com / amazon",
    oemTag: "plata.nam (Official Import)",
    inStock: true
  },
  {
    id: "STR-RENEGADE-2TB",
    title: "Kingston FURY Renegade 2TB M.2 PCIe 4.0 NVMe SSD",
    category: "Storage",
    retailPrice: 2200000,
    costPrice: 1750000,
    oldPrice: 2550000,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80",
    specs: "Read: 7300 MB/s, Write: 7000 MB/s, Graphene Aluminum Heat Spreader",
    officialSource: "kingston.com / newegg",
    oemTag: "plata.nam (Official Import)",
    inStock: true
  },
  {
    id: "STR-EXOS-16TB",
    title: "Seagate Exos X18 16TB Enterprise Server SATA HDD",
    category: "Storage",
    retailPrice: 3800000,
    costPrice: 3100000,
    oldPrice: 4300000,
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=400&q=80",
    specs: "7200 RPM, 256MB Cache, SATA 6Gb/s, 512e/4Kn, 2.5M hr MTBF",
    officialSource: "seagate.com / newegg",
    oemTag: "plata.nam (Official Import)",
    inStock: true
  },
  {
    id: "ACC-PCIE-TYPEC",
    title: "PCIe to USB 3.2 Gen 2x2 Type-C (20Gbps) Expansion Card",
    category: "Accessories & Ports",
    retailPrice: 420000,
    costPrice: 290000,
    oldPrice: 510000,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80",
    specs: "Asmedia ASM3242 Chipset, PCIe 3.0 x4, Low Profile bracket included",
    officialSource: "orico.cc / aliexpress official",
    oemTag: "plata.nam (Official Import)",
    inStock: true
  },
  {
    id: "ACC-POSTCARD-PRO",
    title: "PCIe & LPC Motherboard Hardware Diagnostic Post Card Pro",
    category: "Accessories & Ports",
    retailPrice: 360000,
    costPrice: 240000,
    oldPrice: 440000,
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=400&q=80",
    specs: "Dual-code LED display, Support DDR4/DDR5 desktop & laptop diagnostic",
    officialSource: "official oem factory",
    oemTag: "plata.nam (Official Import)",
    inStock: true
  }
];

export const INITIAL_ORDERS = [
  {
    orderId: "ORD-2026-9041",
    clientId: "USR-101",
    clientName: "Islomjon",
    clientPhone: "+998901234567",
    items: [
      { id: "PLT-B650", name: "ASUS TUF GAMING B650-PLUS WIFI AM5", qty: 1, price: 2850000, oldPrice: 3200000 }
    ],
    totalPaid: 2850000,
    costAmount: 2300000,
    profit: 550000,
    paymentStatus: "PAID",
    paymentCard: "8600 **** **** 4492",
    logistics: {
      provider: "UzPost",
      serviceType: "Filialgacha",
      address: "Namangan sh., Boburshoh ko'chasi, 14-uy",
      postcode: "160100",
      trackingNumber: "UZP-20261014-9902"
    },
    stage: "PURCHASED_OFFICIAL", // 1: PAID, 2: PURCHASED_OFFICIAL, 3: WAREHOUSE_UZPOST, 4: DELIVERED
    createdAt: "2026-10-14T10:30:00.000Z"
  }
];

export const DEFAULT_USER = {
  id: "USR-101",
  name: "Islomjon",
  phone: "+998 90 123 45 67",
  role: "client"
};

export function createPlataStore(storageEngine = null) {
  const storage = storageEngine || (typeof window !== 'undefined' && window.localStorage ? window.localStorage : {
    _data: {},
    getItem(k) { return this._data[k] || null; },
    setItem(k, v) { this._data[k] = String(v); }
  });

  const STORAGE_KEY = 'plata_nam_db_v2';

  function loadState() {
    try {
      const raw = storage.getItem(STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn('Error reading storage', e);
    }
    const initial = {
      currentUser: DEFAULT_USER,
      cart: [
        { productId: "PLT-B650", quantity: 1, selected: true }
      ],
      favorites: ["CLR-AK620"],
      products: INITIAL_PRODUCTS,
      orders: INITIAL_ORDERS,
      urlRequests: []
    };
    saveState(initial);
    return initial;
  }

  function saveState(state) {
    storage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  let state = loadState();

  return {
    getState() { return state; },
    getProducts() { return state.products; },
    getProductById(id) { return state.products.find(p => p.id === id); },
    getCurrentUser() { return state.currentUser; },
    setCurrentUser(user) {
      state.currentUser = user;
      saveState(state);
      return state.currentUser;
    },
    getFavorites() { return state.favorites; },
    toggleFavorite(productId) {
      const idx = state.favorites.indexOf(productId);
      if (idx > -1) {
        state.favorites.splice(idx, 1);
      } else {
        state.favorites.push(productId);
      }
      saveState(state);
      return state.favorites;
    },
    getCart() { return state.cart; },
    getCartCount() {
      return state.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    addToCart(productId, qty = 1) {
      const existing = state.cart.find(item => item.productId === productId);
      if (existing) {
        existing.quantity += qty;
      } else {
        state.cart.push({ productId, quantity: qty, selected: true });
      }
      saveState(state);
      return state.cart;
    },
    updateQuantity(productId, delta) {
      const idx = state.cart.findIndex(i => i.productId === productId);
      if (idx > -1) {
        state.cart[idx].quantity += delta;
        if (state.cart[idx].quantity <= 0) {
          state.cart.splice(idx, 1);
        }
      }
      saveState(state);
      return state.cart;
    },
    removeFromCart(productId) {
      state.cart = state.cart.filter(i => i.productId !== productId);
      saveState(state);
      return state.cart;
    },
    toggleItemSelect(productId, selected) {
      const item = state.cart.find(i => i.productId === productId);
      if (item) {
        item.selected = selected !== undefined ? selected : !item.selected;
      }
      saveState(state);
      return state.cart;
    },
    toggleAllCart(selectAll) {
      state.cart.forEach(item => { item.selected = selectAll; });
      saveState(state);
      return state.cart;
    },
    deleteSelectedCart() {
      state.cart = state.cart.filter(i => !i.selected);
      saveState(state);
      return state.cart;
    },
    getCartCalculation() {
      const selectedItems = state.cart.filter(i => i.selected);
      let totalRetail = 0;
      let totalOld = 0;
      let totalCost = 0;
      let count = 0;

      selectedItems.forEach(item => {
        const prod = state.products.find(p => p.id === item.productId);
        if (prod) {
          count += item.quantity;
          totalRetail += prod.retailPrice * item.quantity;
          totalOld += (prod.oldPrice || prod.retailPrice) * item.quantity;
          totalCost += prod.costPrice * item.quantity;
        }
      });

      const discount = Math.max(0, totalOld - totalRetail);
      const deliveryFee = 0; // Free UzPost delivery as specified
      const finalAmount = totalRetail + deliveryFee;

      return {
        count,
        totalRetail,
        totalOld,
        discount,
        deliveryFee,
        finalAmount,
        totalCost,
        selectedItems
      };
    },
    createOrder({ client, logistics, paymentCard }) {
      const calc = this.getCartCalculation();
      if (calc.count === 0) throw new Error("Savatda tanlangan mahsulot mavjud emas");

      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
      const trackingNumber = `UZP-${dateStr}-${randomSuffix}`;
      const orderId = `ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`;

      const orderItems = calc.selectedItems.map(item => {
        const prod = this.getProductById(item.productId);
        return {
          id: prod.id,
          name: prod.title,
          qty: item.quantity,
          price: prod.retailPrice,
          costPrice: prod.costPrice,
          oldPrice: prod.oldPrice
        };
      });

      const newOrder = {
        orderId,
        clientId: client.id || "USR-GUEST",
        clientName: client.name || "Noma'lum Mijoz",
        clientPhone: client.phone || "+998900000000",
        items: orderItems,
        totalPaid: calc.finalAmount,
        costAmount: calc.totalCost,
        profit: calc.finalAmount - calc.totalCost,
        paymentStatus: "PAID",
        paymentCard: paymentCard || "8600 **** **** 0000",
        logistics: {
          provider: "UzPost",
          serviceType: logistics.serviceType || "Filialgacha",
          address: logistics.address,
          postcode: logistics.postcode || "160100",
          trackingNumber
        },
        stage: "PAID", // initial stage
        createdAt: new Date().toISOString()
      };

      state.orders.unshift(newOrder);
      this.deleteSelectedCart();
      saveState(state);
      return newOrder;
    },
    getOrders() { return state.orders; },
    getClientOrders(clientId) {
      return state.orders.filter(o => o.clientId === clientId);
    },
    updateOrderStage(orderId, nextStage, updatedCostPrice = null, customTracking = null) {
      const order = state.orders.find(o => o.orderId === orderId);
      if (order) {
        order.stage = nextStage;
        if (updatedCostPrice !== null && !isNaN(updatedCostPrice)) {
          order.costAmount = Number(updatedCostPrice);
          order.profit = order.totalPaid - order.costAmount;
        }
        if (customTracking) {
          order.logistics.trackingNumber = customTracking;
        }
        saveState(state);
      }
      return order;
    },
    getFinancialReport() {
      const totalRevenue = state.orders.reduce((sum, o) => sum + (o.totalPaid || 0), 0);
      const totalCOGS = state.orders.reduce((sum, o) => sum + (o.costAmount || 0), 0);
      const uzpostExpense = 0; // UzPost standard delivery cost factor if applicable
      const grossProfit = totalRevenue - totalCOGS - uzpostExpense;
      return {
        totalRevenue,
        totalCOGS,
        uzpostExpense,
        grossProfit,
        orderCount: state.orders.length
      };
    },
    addUrlRequest(req) {
      const newReq = {
        id: "REQ-" + Date.now(),
        clientId: state.currentUser.id,
        clientName: state.currentUser.name,
        url: req.url,
        title: req.title || "Maxsus butlovchi qism",
        note: req.note || "",
        status: "PENDING",
        proposedPrice: null,
        createdAt: new Date().toISOString()
      };
      state.urlRequests.unshift(newReq);
      saveState(state);
      return newReq;
    },
    getUrlRequests() { return state.urlRequests || []; }
  };
}
