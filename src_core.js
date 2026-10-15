// Core data and state engine for plata.nam

export const INITIAL_PRODUCTS = [
  // --- AMD RYZEN PROTSESSORLARI & PLATALARI (AMAZON DIRECT) ---
  {
    id: "CPU-RYZEN-7800X3D",
    title: "AMD Ryzen 7 7800X3D Gaming Processor AM5",
    category: "Protsessorlar (CPU)",
    retailPrice: 5200000,
    costPrice: 4300000,
    oldPrice: 5800000,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80",
    specs: "Socket AM5, 8 Cores / 16 Threads, 5.0 GHz Turbo, 104MB 3D V-Cache, 120W TDP",
    officialSource: "Amazon.com / AMD Official Store",
    amazonUrl: "https://www.amazon.com/dp/B0BTZB7F88",
    oemTag: "Amazon Direct Import",
    inStock: true
  },
  {
    id: "CPU-RYZEN-7950X",
    title: "AMD Ryzen 9 7950X Workstation Processor AM5",
    category: "Protsessorlar (CPU)",
    retailPrice: 6500000,
    costPrice: 5400000,
    oldPrice: 7200000,
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80",
    specs: "Socket AM5, 16 Cores / 32 Threads, 5.7 GHz Boost, 80MB Cache, PCIe 5.0",
    officialSource: "Amazon.com / AMD Official Store",
    amazonUrl: "https://www.amazon.com/dp/B0BBHD5D8Y",
    oemTag: "Amazon Direct Import",
    inStock: true
  },
  {
    id: "PLT-B650",
    title: "ASUS TUF GAMING B650-PLUS WIFI AM5",
    category: "Motherboard",
    retailPrice: 2850000,
    costPrice: 2300000,
    oldPrice: 3200000,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80",
    specs: "Socket AM5, DDR5, PCIe 5.0 M.2, 2.5Gb LAN, Wi-Fi 6, Aura Sync RGB",
    officialSource: "Amazon.com / ASUS Store",
    amazonUrl: "https://www.amazon.com/dp/B0BHMTST8Z",
    oemTag: "Amazon Direct Import",
    inStock: true
  },
  {
    id: "PLT-X670E-TAICHI",
    title: "ASRock X670E Taichi Carrara Marble AM5",
    category: "Motherboard",
    retailPrice: 6200000,
    costPrice: 5100000,
    oldPrice: 6900000,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    specs: "Socket AM5, 24+2+1 Phase VRM, Dual USB4 Type-C, PCIe 5.0 x16, Carrara Marble Look",
    officialSource: "Amazon.com / ASRock Store",
    amazonUrl: "https://www.amazon.com/dp/B0BHD49N47",
    oemTag: "Amazon Direct Import",
    inStock: true
  },

  // --- INTEL CORE PROTSESSORLARI & PLATALARI (AMAZON DIRECT) ---
  {
    id: "CPU-INTEL-14900K",
    title: "Intel Core i9-14900K Flagship CPU LGA1700",
    category: "Protsessorlar (CPU)",
    retailPrice: 6800000,
    costPrice: 5600000,
    oldPrice: 7600000,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80",
    specs: "Socket LGA1700, 24 Cores (8P+16E) / 32 Threads, Up to 6.0 GHz, 36MB SmartCache",
    officialSource: "Amazon.com / Intel Store",
    amazonUrl: "https://www.amazon.com/dp/B0CG79D9S9",
    oemTag: "Amazon Direct Import",
    inStock: true
  },
  {
    id: "CPU-INTEL-14700K",
    title: "Intel Core i7-14700K Gaming & Render CPU LGA1700",
    category: "Protsessorlar (CPU)",
    retailPrice: 4900000,
    costPrice: 4100000,
    oldPrice: 5500000,
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80",
    specs: "Socket LGA1700, 20 Cores (8P+12E) / 28 Threads, Up to 5.6 GHz, 33MB Cache",
    officialSource: "Amazon.com / Intel Store",
    amazonUrl: "https://www.amazon.com/dp/B0CG7BY7FL",
    oemTag: "Amazon Direct Import",
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
    officialSource: "Amazon.com / MSI Store",
    amazonUrl: "https://www.amazon.com/dp/B0BHC5S6T7",
    oemTag: "Amazon Direct Import",
    inStock: true
  },
  {
    id: "PLT-Z790-DARKHERO",
    title: "ASUS ROG MAXIMUS Z790 DARK HERO LGA1700",
    category: "Motherboard",
    retailPrice: 8900000,
    costPrice: 7300000,
    oldPrice: 9800000,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80",
    specs: "LGA1700, 20+1+2 Power Stages, Wi-Fi 7, Dual Thunderbolt 4, 5x M.2 Slots",
    officialSource: "Amazon.com / ASUS ROG Store",
    amazonUrl: "https://www.amazon.com/dp/B0CJN1D26F",
    oemTag: "Amazon Direct Import",
    inStock: true
  },

  // --- SOVUTISH TIZIMLARI (COOLING - AMAZON DIRECT) ---
  {
    id: "CLR-AK620",
    title: "DeepCool AK620 High-Performance Dual-Tower Cooler",
    category: "Cooling",
    retailPrice: 850000,
    costPrice: 620000,
    oldPrice: 990000,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=400&q=80",
    specs: "260W TDP, 6 Heatpipes, 2x 120mm FDB Fans, LGA1700/AM5",
    officialSource: "Amazon.com / DeepCool Store",
    amazonUrl: "https://www.amazon.com/dp/B09CS9ZN7F",
    oemTag: "Amazon Direct Import",
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
    officialSource: "Amazon.com / DeepCool Store",
    amazonUrl: "https://www.amazon.com/dp/B0BB3515BH",
    oemTag: "Amazon Direct Import",
    inStock: true
  },

  // --- XOTIRA & SAQLASH (STORAGE - AMAZON DIRECT) ---
  {
    id: "STR-RENEGADE-2TB",
    title: "Kingston FURY Renegade 2TB M.2 PCIe 4.0 NVMe SSD",
    category: "Storage",
    retailPrice: 2200000,
    costPrice: 1750000,
    oldPrice: 2550000,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80",
    specs: "Read: 7300 MB/s, Write: 7000 MB/s, Graphene Aluminum Heat Spreader",
    officialSource: "Amazon.com / Kingston Store",
    amazonUrl: "https://www.amazon.com/dp/B09K3793HQ",
    oemTag: "Amazon Direct Import",
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
    officialSource: "Amazon.com / Seagate Store",
    amazonUrl: "https://www.amazon.com/dp/B07SPFPKF4",
    oemTag: "Amazon Direct Import",
    inStock: true
  },

  // --- AKSESSUARLAR VA PORTLAR (AMAZON DIRECT) ---
  {
    id: "ACC-PCIE-TYPEC",
    title: "PCIe to USB 3.2 Gen 2x2 Type-C (20Gbps) Expansion Card",
    category: "Accessories & Ports",
    retailPrice: 420000,
    costPrice: 290000,
    oldPrice: 510000,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80",
    specs: "Asmedia ASM3242 Chipset, PCIe 3.0 x4, Low Profile bracket included",
    officialSource: "Amazon.com / Orico Store",
    amazonUrl: "https://www.amazon.com/dp/B089Y7YWDW",
    oemTag: "Amazon Direct Import",
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
    officialSource: "Amazon.com / Diagnostic Hardware",
    amazonUrl: "https://www.amazon.com/dp/B07V6SZVSC",
    oemTag: "Amazon Direct Import",
    inStock: true
  }
];

// Bo'sh boshlang'ich buyurtmalar (Admin panelda mijoz haqiqiy buyurtma berganidagina paydo bo'ladi)
export const INITIAL_ORDERS = [];

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

  const STORAGE_KEY = 'plata_nam_db_v6';

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
      favorites: [],
      products: [...INITIAL_PRODUCTS],
      orders: [...INITIAL_ORDERS],
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
          oldPrice: prod.oldPrice,
          amazonUrl: prod.amazonUrl || `https://www.amazon.com/s?k=${encodeURIComponent(prod.title)}`
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
    deleteOrder(orderId) {
      state.orders = state.orders.filter(o => o.orderId !== orderId);
      saveState(state);
      return state.orders;
    },
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
    getUrlRequests() { return state.urlRequests || []; },
    addProduct(prod) {
      const newProduct = {
        id: "PROD-" + Date.now().toString().slice(-6),
        title: prod.title || "Yangi kompyuter qismi",
        category: prod.category || "Accessories & Ports",
        retailPrice: Number(prod.retailPrice) || 1000000,
        costPrice: Number(prod.costPrice) || 800000,
        oldPrice: prod.oldPrice ? Number(prod.oldPrice) : Math.round(Number(prod.retailPrice) * 1.15),
        image: prod.image || "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80",
        specs: prod.specs || "Rasmiy xorijiy import qismlar",
        officialSource: prod.officialSource || "official partner",
        oemTag: "plata.nam (Official Import)",
        inStock: true
      };
      state.products.unshift(newProduct);
      saveState(state);
      return newProduct;
    },
    quoteUrlRequest(reqId, proposedRetail, proposedCost = null) {
      const req = (state.urlRequests || []).find(r => r.id === reqId);
      if (req) {
        req.status = "APPROVED";
        req.proposedPrice = Number(proposedRetail);
        req.costPrice = proposedCost !== null ? Number(proposedCost) : Math.round(Number(proposedRetail) * 0.8);
        saveState(state);
      }
      return req;
    },
    trackParcel(trackingNumber) {
      const cleanTrack = String(trackingNumber).trim().toUpperCase();
      const order = state.orders.find(o => o.logistics && o.logistics.trackingNumber.toUpperCase() === cleanTrack);
      if (!order) {
        return {
          found: false,
          trackingNumber: cleanTrack,
          message: "Ushbu trek-raqam bo'yicha ma'lumot topilmadi"
        };
      }

      const timeline = [
        {
          stage: "PAID",
          title: "To'lov qabul qilindi & Muzlatildi",
          location: "Toshkent, plata.nam bosh ofisi",
          desc: "Buyurtma xorijiy dilerga yo'naltirishga tayyorlandi",
          done: true
        },
        {
          stage: "PURCHASED_OFFICIAL",
          title: "Rasmiy xorijiy dilerdan xarid qilindi",
          location: "AQSh / Yevropa saralash xabi",
          desc: "Asl nusxada yetkazib beruvchi omboridan qabul qilindi",
          done: order.stage !== "PAID"
        },
        {
          stage: "WAREHOUSE_UZPOST",
          title: "O'zbekistonga yetib keldi & UzPostga topshirildi",
          location: "Toshkent xalqaro pochta saralash markazi",
          desc: `Trek-kod ro'yxatga olindi: ${order.logistics.trackingNumber}`,
          done: order.stage === "WAREHOUSE_UZPOST" || order.stage === "DELIVERED"
        },
        {
          stage: "DELIVERED",
          title: "Yetkazib berildi / Topshirishga tayyor",
          location: order.logistics.address,
          desc: `Mijoz: ${order.clientName} (${order.clientPhone})`,
          done: order.stage === "DELIVERED"
        }
      ];

      return {
        found: true,
        order,
        timeline
      };
    }
  };
}

