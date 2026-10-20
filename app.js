/* ==========================================================================
   PLATA.NAM CORE JAVASCRIPT APPLICATION (MODULAR ARCHITECTURE)
   ========================================================================== */

const INITIAL_PRODUCTS = [
  // --- AMD RYZEN PROTSESSORLARI & PLATALARI (AMAZON DIRECT) ---
  {
    id: "CPU-RYZEN-7800X3D",
    title: "AMD Ryzen 7 7800X3D Gaming Processor AM5",
    category: "Protsessorlar (CPU)",
    retailPrice: 5200000,
    costPrice: 4300000,
    oldPrice: 5800000,
    image: "images/cpu_ryzen_7800x3d.jpg",
    specs: "Socket AM5, 8 Cores / 16 Threads, 5.0 GHz Turbo, 104MB 3D V-Cache, 120W TDP",
    officialSource: "Amazon.com / AMD Official Store",
    amazonUrl: "https://www.amazon.com/s?k=AMD+Ryzen+7+7800X3D",
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
    image: "images/cpu_ryzen_7950x.jpg",
    specs: "Socket AM5, 16 Cores / 32 Threads, 5.7 GHz Boost, 80MB Cache, PCIe 5.0",
    officialSource: "Amazon.com / AMD Official Store",
    amazonUrl: "https://www.amazon.com/s?k=AMD+Ryzen+9+7950X",
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
    image: "images/plt_b650.jpg",
    specs: "Socket AM5, DDR5, PCIe 5.0 M.2, 2.5Gb LAN, Wi-Fi 6, Aura Sync RGB",
    officialSource: "Amazon.com / ASUS Store",
    amazonUrl: "https://www.amazon.com/s?k=ASUS+TUF+GAMING+B650-PLUS+WIFI",
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
    image: "images/plt_x670e_taichi.jpg",
    specs: "Socket AM5, 24+2+1 Phase VRM, Dual USB4 Type-C, PCIe 5.0 x16, Carrara Marble Look",
    officialSource: "Amazon.com / ASRock Store",
    amazonUrl: "https://www.amazon.com/s?k=ASRock+X670E+Taichi+Carrara",
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
    image: "images/cpu_intel_14900k.jpg",
    specs: "Socket LGA1700, 24 Cores (8P+16E) / 32 Threads, Up to 6.0 GHz, 36MB SmartCache",
    officialSource: "Amazon.com / Intel Store",
    amazonUrl: "https://www.amazon.com/s?k=Intel+Core+i9-14900K",
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
    image: "images/cpu_intel_14700k.jpg",
    specs: "Socket LGA1700, 20 Cores (8P+12E) / 28 Threads, Up to 5.6 GHz, 33MB Cache",
    officialSource: "Amazon.com / Intel Store",
    amazonUrl: "https://www.amazon.com/s?k=Intel+Core+i7-14700K",
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
    image: "images/plt_msi_z790.jpg",
    specs: "Socket LGA1700 (14/13th Gen), PCIe 5.0, Wi-Fi 6E, 4x M.2 Slots",
    officialSource: "Amazon.com / MSI Store",
    amazonUrl: "https://www.amazon.com/s?k=MSI+MAG+Z790+TOMAHAWK+WIFI",
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
    image: "images/plt_rog_darkhero.jpg",
    specs: "LGA1700, 20+1+2 Power Stages, Wi-Fi 7, Dual Thunderbolt 4, 5x M.2 Slots",
    officialSource: "Amazon.com / ASUS ROG Store",
    amazonUrl: "https://www.amazon.com/s?k=ASUS+ROG+MAXIMUS+Z790+DARK+HERO",
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
    image: "images/cooler_ak620.jpg",
    specs: "260W TDP, 6 Heatpipes, 2x 120mm FDB Fans, LGA1700/AM5",
    officialSource: "Amazon.com / DeepCool Store",
    amazonUrl: "https://www.amazon.com/s?k=DeepCool+AK620",
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
    image: "images/cooler_lt720.jpg",
    specs: "360mm Radiator, 4th Gen Dual-Chamber Pump, Anti-Leak Tech, ARGB",
    officialSource: "Amazon.com / DeepCool Store",
    amazonUrl: "https://www.amazon.com/s?k=DeepCool+LT720",
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
    image: "images/ssd_renegade.jpg",
    specs: "Read: 7300 MB/s, Write: 7000 MB/s, Graphene Aluminum Heat Spreader",
    officialSource: "Amazon.com / Kingston Store",
    amazonUrl: "https://www.amazon.com/s?k=Kingston+FURY+Renegade+2TB",
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
    image: "images/hdd_seagate_exos.jpg",
    specs: "7200 RPM, 256MB Cache, SATA 6Gb/s, 512e/4Kn, 2.5M hr MTBF",
    officialSource: "Amazon.com / Seagate Store",
    amazonUrl: "https://www.amazon.com/s?k=Seagate+Exos+X18+16TB",
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
    image: "images/acc_pcie_typec.jpg",
    specs: "Asmedia ASM3242 Chipset, PCIe 3.0 x4, Low Profile bracket included",
    officialSource: "Amazon.com / Orico Store",
    amazonUrl: "https://www.amazon.com/s?k=PCIe+USB+3.2+Gen+2x2+Type-C+20Gbps",
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
    image: "images/acc_postcard.jpg",
    specs: "Dual-code LED display, Support DDR4/DDR5 desktop & laptop diagnostic",
    officialSource: "Amazon.com / Diagnostic Hardware",
    amazonUrl: "https://www.amazon.com/s?k=Motherboard+Diagnostic+Post+Card+PCIe",
    oemTag: "Amazon Direct Import",
    inStock: true
  }
];

// Bo'sh boshlang'ich buyurtmalar (Admin panelda mijoz haqiqiy buyurtma berganidagina paydo bo'ladi)
const INITIAL_ORDERS = [];

const DEFAULT_USER = {
  id: "USR-101",
  name: "Islomjon",
  phone: "+998 33 750 30 20",
  role: "client"
};

class PlataStoreClass {
  constructor() {
    this.STORAGE_KEY = 'plata_nam_db_v9';
    this.state = this.loadState();
  }

  loadState() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn("Storage load error:", e);
    }
    const initial = {
      currentUser: DEFAULT_USER,
      cart: [],
      favorites: [],
      products: [...INITIAL_PRODUCTS],
      orders: [...INITIAL_ORDERS],
      urlRequests: []
    };
    this.saveState(initial);
    return initial;
  }

  saveState(state) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Storage save error:", e);
    }
  }

  getProducts() { return this.state.products; }
  getProductById(id) { return this.state.products.find(p => p.id === id); }
  getCurrentUser() { return this.state.currentUser; }
  
  setCurrentUser(user) {
    this.state.currentUser = user;
    this.saveState(this.state);
    return this.state.currentUser;
  }

  getFavorites() { return this.state.favorites || []; }
  toggleFavorite(productId) {
    const favs = this.state.favorites || [];
    const idx = favs.indexOf(productId);
    if (idx > -1) {
      favs.splice(idx, 1);
    } else {
      favs.push(productId);
    }
    this.state.favorites = favs;
    this.saveState(this.state);
    return this.state.favorites;
  }

  getCart() { return this.state.cart; }
  getCartCount() {
    return this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  addToCart(productId, qty = 1) {
    const existing = this.state.cart.find(i => i.productId === productId);
    if (existing) {
      existing.quantity += qty;
    } else {
      this.state.cart.push({ productId, quantity: qty, selected: true });
    }
    this.saveState(this.state);
    return this.state.cart;
  }

  updateQuantity(productId, delta) {
    const idx = this.state.cart.findIndex(i => i.productId === productId);
    if (idx > -1) {
      this.state.cart[idx].quantity += delta;
      if (this.state.cart[idx].quantity <= 0) {
        this.state.cart.splice(idx, 1);
      }
    }
    this.saveState(this.state);
    return this.state.cart;
  }

  removeFromCart(productId) {
    this.state.cart = this.state.cart.filter(i => i.productId !== productId);
    this.saveState(this.state);
    return this.state.cart;
  }

  toggleItemSelect(productId, selected) {
    const item = this.state.cart.find(i => i.productId === productId);
    if (item) {
      item.selected = selected !== undefined ? selected : !item.selected;
    }
    this.saveState(this.state);
    return this.state.cart;
  }

  toggleAllCart(selectAll) {
    this.state.cart.forEach(item => { item.selected = selectAll; });
    this.saveState(this.state);
    return this.state.cart;
  }

  deleteSelectedCart() {
    this.state.cart = this.state.cart.filter(i => !i.selected);
    this.saveState(this.state);
    return this.state.cart;
  }

  getCartCalculation() {
    const selectedItems = this.state.cart.filter(i => i.selected);
    let totalRetail = 0;
    let totalOld = 0;
    let totalCost = 0;
    let count = 0;

    selectedItems.forEach(item => {
      const prod = this.getProductById(item.productId);
      if (prod) {
        count += item.quantity;
        totalRetail += prod.retailPrice * item.quantity;
        totalOld += (prod.oldPrice || prod.retailPrice) * item.quantity;
        totalCost += prod.costPrice * item.quantity;
      }
    });

    const discount = Math.max(0, totalOld - totalRetail);
    const deliveryFee = 0;
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
  }

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
      stage: "PAID",
      createdAt: new Date().toISOString()
    };

    this.state.orders.unshift(newOrder);
    this.deleteSelectedCart();
    this.saveState(this.state);
    return newOrder;
  }

  getOrders() { return this.state.orders; }
  deleteOrder(orderId) {
    this.state.orders = this.state.orders.filter(o => o.orderId !== orderId);
    this.saveState(this.state);
    return this.state.orders;
  }
  getClientOrders(clientId) {
    return this.state.orders.filter(o => o.clientId === clientId);
  }

  updateOrderStage(orderId, nextStage, updatedCostPrice = null, customTracking = null) {
    const order = this.state.orders.find(o => o.orderId === orderId);
    if (order) {
      order.stage = nextStage;
      if (updatedCostPrice !== null && !isNaN(updatedCostPrice)) {
        order.costAmount = Number(updatedCostPrice);
        order.profit = order.totalPaid - order.costAmount;
      }
      if (customTracking) {
        order.logistics.trackingNumber = customTracking;
      }
      this.saveState(this.state);
    }
    return order;
  }

  getFinancialReport() {
    const totalRevenue = this.state.orders.reduce((sum, o) => sum + (o.totalPaid || 0), 0);
    const totalCOGS = this.state.orders.reduce((sum, o) => sum + (o.costAmount || 0), 0);
    const uzpostExpense = 0;
    const grossProfit = totalRevenue - totalCOGS - uzpostExpense;
    return {
      totalRevenue,
      totalCOGS,
      uzpostExpense,
      grossProfit,
      orderCount: this.state.orders.length
    };
  }

  addUrlRequest(req) {
    const newReq = {
      id: "REQ-" + Date.now(),
      clientId: this.state.currentUser.id,
      clientName: this.state.currentUser.name,
      url: req.url,
      title: req.title || "Maxsus butlovchi qism",
      note: req.note || "",
      status: "PENDING",
      proposedPrice: null,
      createdAt: new Date().toISOString()
    };
    if (!this.state.urlRequests) this.state.urlRequests = [];
    this.state.urlRequests.unshift(newReq);
    this.saveState(this.state);
    return newReq;
  }

  getUrlRequests() { return this.state.urlRequests || []; }

  addProduct(prod) {
    const newProduct = {
      id: "PROD-" + Date.now().toString().slice(-6),
      title: prod.title || "Yangi kompyuter qismi",
      category: prod.category || "Accessories & Ports",
      retailPrice: Number(prod.retailPrice) || 1000000,
      costPrice: Number(prod.costPrice) || 800000,
      oldPrice: prod.oldPrice ? Number(prod.oldPrice) : Math.round(Number(prod.retailPrice) * 1.15),
      image: prod.image || "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80",
      specs: prod.specs || "Rasmiy xorijiy import qismlar",
      officialSource: prod.officialSource || "Amazon.com / Intel Store",
      amazonUrl: prod.amazonUrl || `https://www.amazon.com/s?k=${encodeURIComponent(prod.title || 'Intel Core i3')}`,
      oemTag: "plata.nam (Official Import)",
      inStock: true
    };
    this.state.products.unshift(newProduct);
    this.saveState(this.state);
    return newProduct;
  }

  quoteUrlRequest(reqId, proposedRetail, proposedCost = null) {
    const req = (this.state.urlRequests || []).find(r => r.id === reqId);
    if (req) {
      req.status = "APPROVED";
      req.proposedPrice = Number(proposedRetail);
      req.costPrice = proposedCost !== null ? Number(proposedCost) : Math.round(Number(proposedRetail) * 0.8);
      this.saveState(this.state);
    }
    return req;
  }

  trackParcel(trackingNumber) {
    const cleanTrack = String(trackingNumber).trim().toUpperCase();
    const order = this.state.orders.find(o => o.logistics && o.logistics.trackingNumber.toUpperCase() === cleanTrack);
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
}

const store = new PlataStoreClass();

/* ==========================================================================
   APPLICATION CONTROLLER & UI CONTROLS
   ========================================================================== */
const App = {
  currentView: 'catalog',
  activeCategory: 'all',
  searchQuery: '',
  authRole: 'client',

  init() {
    this.updateHeaderUI();
    this.renderCatalog();
    this.renderCart();
    this.renderClientPortal();
    this.renderAdminDashboard();
  },

  formatMoney(num) {
    return new Intl.NumberFormat('uz-UZ').format(num) + " so'm";
  },

  toast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg style="width:18px;height:18px;color:${type === 'error' ? 'var(--danger)' : '#00d26a'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span>${msg}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  },

  // SPA VIEW SWITCHER
  switchView(viewName) {
    if (viewName === 'admin' && store.getCurrentUser().role !== 'admin') {
      this.setAuthRole('admin');
      this.openAuthModal();
      return;
    }

    this.currentView = viewName;
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById('view-' + viewName);
    if (target) target.classList.add('active');

    if (viewName === 'cart') this.renderCart();
    if (viewName === 'client') this.renderClientPortal();
    if (viewName === 'admin') this.renderAdminDashboard();
    if (viewName === 'catalog') this.renderCatalog();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  updateHeaderUI() {
    const user = store.getCurrentUser();
    const userBtn = document.getElementById('userBtnLabel');
    if (userBtn) {
      if (user.role === 'admin') {
        userBtn.textContent = "Admin (Chiqish)";
      } else if (user.role === 'client') {
        userBtn.textContent = user.name;
      } else {
        userBtn.textContent = "Kirish";
      }
    }

    const count = store.getCartCount();
    const badge = document.getElementById('cartBadgeCount');
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }

    const favCount = store.getFavorites().length;
    const favBadge = document.getElementById('favBadgeCount');
    if (favBadge) {
      favBadge.textContent = favCount;
      favBadge.style.display = favCount > 0 ? 'flex' : 'none';
    }
  },

  // CATALOG
  filterCategory(category, element) {
    this.activeCategory = category;
    document.querySelectorAll('.cat-pill').forEach(btn => btn.classList.remove('active'));
    if (element) element.classList.add('active');
    
    const bread = document.getElementById('catalogBreadcrumb');
    bread.textContent = category === 'all' ? 'Barcha mahsulotlar' : category;
    this.renderCatalog();
  },

  handleSearch(query) {
    this.searchQuery = query.toLowerCase().trim();
    this.renderCatalog();
  },

  renderCatalog() {
    const container = document.getElementById('productsGrid');
    let products = store.getProducts();

    if (this.activeCategory !== 'all') {
      products = products.filter(p => p.category === this.activeCategory);
    }

    if (this.searchQuery) {
      products = products.filter(p => 
        p.title.toLowerCase().includes(this.searchQuery) ||
        p.specs.toLowerCase().includes(this.searchQuery) ||
        p.category.toLowerCase().includes(this.searchQuery)
      );
    }

    if (products.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background:#fff; border-radius:16px;">
          <p style="font-size:18px; font-weight:600; color:var(--text-muted); margin-bottom:8px;">Hech qanday mahsulot topilmadi</p>
          <button class="checkout-submit-btn" style="width:auto; margin:0 auto; padding:0 24px;" onclick="App.switchView('client'); App.switchPortalTab('url-request');">Maxsus buyurtma (URL) qoldirish</button>
        </div>
      `;
      return;
    }

    const favs = store.getFavorites();

    container.innerHTML = products.map(p => {
      const isFav = favs.includes(p.id);
      return `
        <div class="product-card">
          <div class="product-img-wrap" onclick="App.openProductDetails('${p.id}')" style="cursor:pointer;">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
            <span class="product-oem-tag">${p.oemTag}</span>
            <button class="product-fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); App.toggleFav('${p.id}')" title="Saralanganlarga saqlash">
              <svg style="width:18px;height:18px;" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </button>
          </div>
          <div class="product-details">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <span class="product-category-lbl">${p.category}</span>
              <a href="${p.amazonUrl || 'https://www.amazon.com'}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" style="font-size:11px; color:#ff9900; font-weight:700; text-decoration:none; display:flex; align-items:center; gap:2px; background:rgba(255,153,0,0.1); padding:2px 6px; border-radius:4px;" title="Amazon.com rasmiy havolasi ('cilka')">
                <span>Amazon "cilka"si</span>
                <svg style="width:11px;height:11px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </div>
            <h3 class="product-title" title="${p.title}" onclick="App.openProductDetails('${p.id}')" style="cursor:pointer;">${p.title}</h3>
            <p class="product-specs">${p.specs}</p>
            <div class="product-price-row">
              <div>
                ${p.oldPrice ? `<div class="old-price">${App.formatMoney(p.oldPrice)}</div>` : ''}
                <div class="current-price">${App.formatMoney(p.retailPrice)}</div>
              </div>
              <button class="add-to-cart-btn" onclick="App.handleAddToCart('${p.id}')" title="Savatga qo'shish">
                <svg style="width:20px;height:20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  handleAddToCart(productId) {
    store.addToCart(productId, 1);
    this.updateHeaderUI();
    this.toast("Mahsulot savatga qo'shildi!", "success");
  },

  toggleFav(productId) {
    store.toggleFavorite(productId);
    const isFav = store.getFavorites().includes(productId);
    this.renderCatalog();
    this.updateHeaderUI();
    const favModal = document.getElementById('favoritesModal');
    if (favModal && favModal.classList.contains('active')) {
      this.openFavoritesModal();
    }
    this.toast(isFav ? "Saralanganlarga saqlandi ❤️" : "Saralanganlardan o'chirildi", "info");
  },

  // SHOPPING CART (UZUM STYLE)
  renderCart() {
    const cart = store.getCart();
    const listContainer = document.getElementById('cartItemsList');

    if (cart.length === 0) {
      listContainer.innerHTML = `
        <div style="text-align:center; padding: 40px 20px;">
          <p style="font-size:16px; font-weight:600; color:var(--text-muted); margin-bottom:14px;">Savatingiz hozircha bo'sh</p>
          <button class="checkout-submit-btn" style="width:auto; margin:0 auto; padding:0 24px;" onclick="App.switchView('catalog')">Katalogni ko'rish</button>
        </div>
      `;
      this.updateCartSummary();
      return;
    }

    const favs = store.getFavorites();

    listContainer.innerHTML = cart.map(item => {
      const prod = store.getProductById(item.productId);
      if (!prod) return '';
      const isFav = favs.includes(prod.id);

      return `
        <div class="cart-item-row">
          <input type="checkbox" class="item-checkbox" ${item.selected ? 'checked' : ''} onchange="App.handleToggleCartItem('${prod.id}', this.checked)">
          
          <div class="item-thumbnail">
            <img src="${prod.image}" alt="${prod.title}">
          </div>

          <div class="item-info-col">
            <span class="item-seller-tag">Sotuvchi: <b>${prod.oemTag}</b></span>
            <span class="item-title-text">${prod.title}</span>
            <div class="item-actions-links">
              <span class="item-action-btn" onclick="App.toggleFav('${prod.id}')">
                <svg style="width:14px;height:14px;" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                <span>${isFav ? 'Saqlangan' : 'Saqlash'}</span>
              </span>
              <span class="item-action-btn delete" onclick="App.handleRemoveCartItem('${prod.id}')">
                <svg style="width:14px;height:14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                <span>O'chirish</span>
              </span>
            </div>
          </div>

          <div class="item-controls-col">
            <div class="stepper-wrap">
              <button class="stepper-btn" onclick="App.handleQuantityChange('${prod.id}', -1)">−</button>
              <span class="stepper-value">${item.quantity}</span>
              <button class="stepper-btn" onclick="App.handleQuantityChange('${prod.id}', 1)">+</button>
            </div>
            <div class="item-price-box">
              <div class="item-cur-price">${App.formatMoney(prod.retailPrice * item.quantity)}</div>
              ${prod.oldPrice ? `<div class="item-old-price">${App.formatMoney(prod.oldPrice * item.quantity)}</div>` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');

    this.updateCartSummary();
  },

  handleToggleCartItem(productId, selected) {
    store.toggleItemSelect(productId, selected);
    this.updateCartSummary();
  },

  handleToggleAllCart(selectAll) {
    store.toggleAllCart(selectAll);
    this.renderCart();
  },

  handleDeleteSelectedCart() {
    store.deleteSelectedCart();
    this.renderCart();
    this.updateHeaderUI();
    this.toast("Tanlangan mahsulotlar savatdan o'chirildi", "info");
  },

  handleQuantityChange(productId, delta) {
    store.updateQuantity(productId, delta);
    this.renderCart();
    this.updateHeaderUI();
  },

  handleRemoveCartItem(productId) {
    store.removeFromCart(productId);
    this.renderCart();
    this.updateHeaderUI();
    this.toast("Mahsulot savatdan olib tashlandi", "info");
  },

  updateCartSummary() {
    const calc = store.getCartCalculation();
    document.getElementById('summaryItemsCount').textContent = `Mahsulotlar (${calc.count} dona):`;
    document.getElementById('summaryOriginalTotal').textContent = this.formatMoney(calc.totalOld || calc.totalRetail);
    document.getElementById('summaryDiscountTotal').textContent = `-${this.formatMoney(calc.discount)}`;
    document.getElementById('summaryFinalTotal').textContent = this.formatMoney(calc.finalAmount);
    
    const btn = document.getElementById('btnCheckoutSubmit');
    btn.disabled = calc.count === 0;

    const cart = store.getCart();
    const allSelected = cart.length > 0 && cart.every(i => i.selected);
    const selectAllCb = document.getElementById('selectAllCartCheckbox');
    if (selectAllCb) selectAllCb.checked = allSelected;
  },

  // CHECKOUT & LOGISTICS
  openCheckoutModal() {
    const calc = store.getCartCalculation();
    if (calc.count === 0) {
      this.toast("Iltimos, avval mahsulot tanlang", "error");
      return;
    }
    document.getElementById('modalPayAmount').textContent = this.formatMoney(calc.finalAmount);
    document.getElementById('checkoutModal').classList.add('active');
  },

  handleDeliveryTypeChange(val) {
    const groupPostcode = document.getElementById('groupPostcode');
    if (val === 'Filialgacha') {
      groupPostcode.style.display = 'block';
    } else {
      groupPostcode.style.display = 'none';
    }
  },

  formatCardNumber(input) {
    let v = input.value.replace(/\D/g, '').slice(0, 16);
    let matches = v.match(/\d{4,16}/g);
    let match = matches && matches[0] || '';
    let parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      input.value = parts.join(' ');
    } else {
      input.value = v;
    }
  },

  handleProcessOrder(event) {
    event.preventDefault();
    const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
    const region = document.getElementById('checkoutRegion').value;
    const address = document.getElementById('checkoutAddress').value;
    const postcode = document.getElementById('checkoutPostcode').value || '160100';
    const cardNum = document.getElementById('checkoutCardNumber').value;

    const user = store.getCurrentUser();

    try {
      const order = store.createOrder({
        client: user,
        logistics: {
          serviceType: deliveryType,
          address: `${region} viloyati, ${address}`,
          postcode
        },
        paymentCard: cardNum.slice(0, 4) + ' **** **** ' + cardNum.slice(-4)
      });

      this.closeModals();
      this.updateHeaderUI();
      this.renderCart();
      this.renderClientPortal();
      this.renderAdminDashboard();

      // Telegram Bot xabarnomasini avtomatik yuborish
      const itemsListText = (order.items || []).map(it => `• <b>${it.name}</b> (${it.qty} dona) — ${App.formatMoney(it.price * it.qty)}`).join('\n');
      const tgOrderMessage = `📦 <b>YANGI BUYURTMA KELIB TUSHDI!</b> (#${order.orderId})\n` +
        `━━━━━━━━━━━━━━━━━━━━━\n` +
        `👤 <b>Mijoz:</b> ${order.clientName}\n` +
        `📞 <b>Telefon:</b> ${order.clientPhone}\n` +
        `📍 <b>Yetkazish manzili:</b> ${order.logistics.address}\n` +
        `📮 <b>UzPost indeksi:</b> ${order.logistics.postcode} (${order.logistics.serviceType})\n\n` +
        `🛒 <b>Buyurtma tarkibi:</b>\n${itemsListText}\n\n` +
        `💰 <b>Jami to'lov:</b> ${App.formatMoney(order.totalPaid)} (Uzcard/Humo)\n` +
        `🎯 <b>Kutilayotgan sof foyda:</b> +${App.formatMoney(order.profit)}\n` +
        `🚚 <b>UzPost Trek-raqami:</b> <code>${order.logistics.trackingNumber}</code>\n` +
        `━━━━━━━━━━━━━━━━━━━━━\n` +
        `⚡ <i>plata.nam — Krossbording boshqaruv tizimi</i>`;
      this.sendTelegramMessage(tgOrderMessage);

      this.toast("To'lov muvaffaqiyatli amalga oshirildi!", "success");
      this.showInvoice(order);
    } catch (e) {
      this.toast(e.message, "error");
    }
  },

  showInvoice(order) {
    const modal = document.getElementById('invoiceModal');
    const content = document.getElementById('invoiceModalContent');

    content.innerHTML = `
      <div class="invoice-view">
        <div class="invoice-header">
          <div>
            <div class="invoice-title">plata.nam</div>
            <div style="font-size:12px;color:var(--text-muted);">Krossbording rasmiy to'lov cheki</div>
          </div>
          <div style="text-align:right;">
            <div style="font-weight:700;font-size:14px;">${order.orderId}</div>
            <div style="font-size:12px;color:var(--text-muted);">${new Date(order.createdAt).toLocaleString('uz-UZ')}</div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:13px;margin-bottom:14px;">
          <div>
            <b>Mijoz:</b> ${order.clientName}<br>
            <b>Tel:</b> ${order.clientPhone}
          </div>
          <div>
            <b>UzPost Trek-raqami:</b> <span style="color:var(--info);font-weight:700;">${order.logistics.trackingNumber}</span><br>
            <b>Manzil:</b> ${order.logistics.address} (${order.logistics.postcode})
          </div>
        </div>

        <table class="invoice-table">
          <thead>
            <tr>
              <th>Mahsulot</th>
              <th style="text-align:center;">Soni</th>
              <th style="text-align:right;">Narx</th>
              <th style="text-align:right;">Jami</th>
            </tr>
          </thead>
          <tbody>
            ${order.items.map(i => `
              <tr>
                <td>${i.name}</td>
                <td style="text-align:center;">${i.qty}</td>
                <td style="text-align:right;">${App.formatMoney(i.price)}</td>
                <td style="text-align:right;">${App.formatMoney(i.price * i.qty)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div style="display:flex;justify-content:space-between;align-items:center;font-size:16px;font-weight:800;padding-top:10px;border-top:2px solid var(--border-color);">
          <span>To'landi (Uzcard/Humo):</span>
          <span style="color:var(--success);">${App.formatMoney(order.totalPaid)}</span>
        </div>
      </div>

      <div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap;">
        <button class="checkout-submit-btn" style="flex:1;min-width:180px;" onclick="App.closeModals(); App.switchView('client');">Buyurtmani kuzatish (Kabinet)</button>
        <a href="${App.getTelegramDirectLink(order)}" target="_blank" class="cat-pill" style="background:#24A1DE; color:#fff; border-color:#24A1DE; font-weight:700; display:flex; align-items:center; gap:6px; text-decoration:none; padding:10px 18px;">
          <svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2L2 9.5l7 3.5 3.5 7L21.5 2z"/><path d="M9 13l5.5-5.5"/></svg>
          Telegram (+998 33 750 30 20) ga yuborish
        </a>
        <button class="cat-pill" style="padding:0 20px;" onclick="window.print()">Chop etish</button>
      </div>
    `;

    modal.classList.add('active');
  },

  getTelegramDirectLink(order) {
    const itemsText = (order.items || []).map(i => `• ${i.name} (${i.qty} dona)`).join('\n');
    const msg = `📦 plata.nam — Yangi Buyurtma #${order.orderId}\n\n👤 Mijoz: ${order.clientName}\n📞 Telefon: ${order.clientPhone}\n📍 Manzil: ${order.logistics.address} (${order.logistics.postcode})\n\n🛒 Mahsulotlar:\n${itemsText}\n\n💰 To'lov: ${App.formatMoney(order.totalPaid)}\n🚚 UzPost Trek: ${order.logistics.trackingNumber}`;
    return `https://t.me/share/url?url=${encodeURIComponent('https://t.me/+998337503020')}&text=${encodeURIComponent(msg)}`;
  },

  // CLIENT PORTAL
  renderClientPortal() {
    const user = store.getCurrentUser();
    document.getElementById('portalUserName').textContent = user.name;
    document.getElementById('portalUserPhone').textContent = user.phone;
    document.getElementById('portalAvatar').textContent = user.name.charAt(0).toUpperCase();

    const orders = store.getClientOrders(user.id);
    document.getElementById('portalOrderCountBadge').textContent = orders.length;

    const container = document.getElementById('clientOrdersList');
    if (orders.length === 0) {
      container.innerHTML = `<p style="color:var(--text-muted);padding:20px 0;">Sizda hali buyurtmalar mavjud emas.</p>`;
      return;
    }

    const stages = [
      { key: "PAID", label: "To'lov qilindi" },
      { key: "PURCHASED_OFFICIAL", label: "Rasmiy xarid" },
      { key: "WAREHOUSE_UZPOST", label: "UzPostga topshirildi" },
      { key: "DELIVERED", label: "Yetkazib berildi" }
    ];

    container.innerHTML = orders.map(o => {
      const currentStageIndex = stages.findIndex(s => s.key === o.stage);

      return `
        <div class="order-history-card">
          <div class="order-head-bar">
            <div>
              <span class="order-id-badge">${o.orderId}</span>
              <span class="order-date-text"> • ${new Date(o.createdAt).toLocaleDateString('uz-UZ')}</span>
            </div>
            <div style="font-weight:700; font-size:16px; color:var(--text-main);">
              ${App.formatMoney(o.totalPaid)}
            </div>
          </div>

          <!-- 4-Stage Stepper Tracker -->
          <div class="pipeline-tracker">
            ${stages.map((st, idx) => {
              let cls = '';
              if (idx < currentStageIndex) cls = 'completed';
              else if (idx === currentStageIndex) cls = 'active';

              return `
                <div class="stage-step ${cls}">
                  <div class="step-circle">${idx < currentStageIndex ? '✓' : idx + 1}</div>
                  <span class="step-label">${st.label}</span>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Order Details Box -->
          <div class="order-details-box">
            <div>
              <div style="font-size:12px;color:var(--text-muted);">UzPost Trek-kodi:</div>
              <div class="tracking-code-pill">
                <span>${o.logistics.trackingNumber}</span>
                <button class="copy-btn" onclick="navigator.clipboard.writeText('${o.logistics.trackingNumber}'); App.toast('Trek-kod nusxalandi!', 'info');">Nusxa</button>
              </div>
            </div>

            <div>
              <div style="font-size:12px;color:var(--text-muted);">Yetkazish manzili:</div>
              <div style="font-size:13px;font-weight:600;">${o.logistics.address}</div>
            </div>

            <div>
              <button class="cat-pill" onclick="App.showExistingOrderInvoice('${o.orderId}')">Invoysni ko'rish</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    this.renderMyUrlRequests();
  },

  showExistingOrderInvoice(orderId) {
    const order = store.getOrders().find(o => o.orderId === orderId);
    if (order) this.showInvoice(order);
  },

  switchPortalTab(tabName, el) {
    document.querySelectorAll('.portal-nav-item').forEach(item => item.classList.remove('active'));
    if (el) el.classList.add('active');

    document.getElementById('portal-tab-orders').style.display = tabName === 'orders' ? 'block' : 'none';
    document.getElementById('portal-tab-url-request').style.display = tabName === 'url-request' ? 'block' : 'none';
  },

  handleUrlRequestSubmit(event) {
    event.preventDefault();
    const url = document.getElementById('customUrlInput').value;
    const title = document.getElementById('customTitleInput').value;
    const note = document.getElementById('customNoteInput').value;

    store.addUrlRequest({ url, title, note });

    // Telegram Bot xabarnomasini avtomatik yuborish
    const user = store.getCurrentUser();
    const tgUrlMessage = `🔗 <b>YANGI XORIJdan IMPORT ZAYAVKASI!</b>\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 <b>Mijoz:</b> ${user.name} (${user.phone})\n` +
      `🏷 <b>Mahsulot:</b> ${title || "Maxsus butlovchi qism"}\n` +
      `🌐 <b>Havola:</b> ${url}\n` +
      `📝 <b>Izoh:</b> ${note || "Izoh qoldirilmagan"}\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `👉 <i>Admin panelga kirib narx belgilashingiz mumkin!</i>`;
    this.sendTelegramMessage(tgUrlMessage);

    this.toast("Zayavka qabul qilindi! Admin ko'rib chiqadi.", "success");
    event.target.reset();
    this.renderMyUrlRequests();
  },

  renderMyUrlRequests() {
    const container = document.getElementById('myUrlRequestsList');
    if (!container) return;
    const reqs = store.getUrlRequests();

    if (reqs.length === 0) {
      container.innerHTML = `<p style="font-size:13px; color:var(--text-muted);">Hozircha maxsus zayavkalar yo'q.</p>`;
      return;
    }

    container.innerHTML = reqs.map(r => `
      <div style="background:var(--card-subtle); padding:12px 16px; border-radius:var(--radius-md); margin-bottom:10px; border:1px solid var(--border-light);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
          <b>${r.title}</b>
          <span class="status-badge ${r.status === 'APPROVED' ? 'delivered' : 'paid'}">${r.status === 'APPROVED' ? 'Taklif tayyor' : 'Kutilmoqda'}</span>
        </div>
        <div style="font-size:12px; color:var(--info); word-break:break-all;">${r.url}</div>
        ${r.proposedPrice ? `<div style="font-size:13px; font-weight:700; color:var(--success); margin-top:6px;">Admin taklifi: ${App.formatMoney(r.proposedPrice)}</div>` : ''}
        ${r.note ? `<div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Izoh: ${r.note}</div>` : ''}
      </div>
    `).join('');
  },

  // ADMIN DASHBOARD & CASHFLOW MOLIYA DOSKASI
  renderAdminDashboard() {
    const fin = store.getFinancialReport();
    document.getElementById('statRevenue').textContent = this.formatMoney(fin.totalRevenue);
    document.getElementById('statCOGS').textContent = this.formatMoney(fin.totalCOGS);
    document.getElementById('statProfit').textContent = this.formatMoney(fin.grossProfit);
    this.updateTelegramUI();

    const orders = store.getOrders();
    const tableBody = document.getElementById('adminOrdersTableBody');

    const stageNextMap = {
      "PAID": "PURCHASED_OFFICIAL",
      "PURCHASED_OFFICIAL": "WAREHOUSE_UZPOST",
      "WAREHOUSE_UZPOST": "DELIVERED",
      "DELIVERED": null
    };

    const stageLabelMap = {
      "PAID": { label: "To'lov qilindi", cls: "paid" },
      "PURCHASED_OFFICIAL": { label: "Xarid qilindi", cls: "purchased" },
      "WAREHOUSE_UZPOST": { label: "UzPostda", cls: "warehouse" },
      "DELIVERED": { label: "Yetkazildi", cls: "delivered" }
    };

    if (orders.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:36px 16px; color:var(--text-muted); font-size:14px;">Hozircha buyurtmalar mavjud emas. Mijozlar saytdan tovar buyurtma berganda to'lov kirdi-chiqdisi va Amazon xarid havolalari real vaqtda shu yerda paydo bo'ladi.</td></tr>`;
    } else {
      tableBody.innerHTML = orders.map(o => {
        const next = stageNextMap[o.stage];
        const stInfo = stageLabelMap[o.stage] || { label: o.stage, cls: "paid" };

        return `
          <tr>
            <td><b>${o.orderId}</b><br><small style="color:var(--text-muted);">${new Date(o.createdAt).toLocaleDateString('uz-UZ')}</small></td>
            <td><b>${o.clientName}</b><br><small>${o.clientPhone}</small></td>
            <td>
              ${o.items.map(i => `
                <div style="margin-bottom:6px;">
                  <b>${i.name}</b> (x${i.qty})<br>
                  <a href="${i.amazonUrl || 'https://www.amazon.com'}" target="_blank" rel="noopener noreferrer" style="color:#ff9900; font-size:11px; font-weight:700; text-decoration:underline; display:inline-flex; align-items:center; gap:2px;">
                    <span>Amazon xarid "cilka"si ↗</span>
                  </a>
                </div>
              `).join('')}
            </td>
            <td><b>${App.formatMoney(o.totalPaid)}</b></td>
            <td>
              <input type="number" style="width:110px;padding:4px 8px;border:1px solid var(--border-color);border-radius:4px;" value="${o.costAmount}" onchange="App.handleAdminUpdateCost('${o.orderId}', this.value)">
            </td>
            <td style="color:${o.profit >= 0 ? 'var(--success)' : 'var(--danger)'};font-weight:700;">${App.formatMoney(o.profit)}</td>
            <td>
              <input type="text" style="width:130px;padding:4px 8px;border:1px solid var(--border-color);border-radius:4px;font-family:monospace;" value="${o.logistics.trackingNumber}" onchange="App.handleAdminUpdateTracking('${o.orderId}', this.value)">
            </td>
            <td>
              <span class="status-badge ${stInfo.cls}">${stInfo.label}</span>
            </td>
            <td>
              <div style="display:flex; align-items:center; gap:6px;">
                ${next ? `
                  <button class="table-action-btn" onclick="App.handleAdminAdvanceStage('${o.orderId}', '${next}')">
                    Keyingi: ${stageLabelMap[next].label} &rarr;
                  </button>
                ` : `<span style="color:var(--success);font-weight:700;">Tugatilgan</span>`}
                <button class="action-btn" onclick="App.handleAdminDeleteOrder('${o.orderId}')" title="Buyurtmani o'chirish" style="color:var(--danger); padding:4px 6px; border:1px solid rgba(247,56,89,0.3); border-radius:4px;">
                  <svg style="width:14px;height:14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    }

    // Clients Table
    const clientsTable = document.getElementById('adminClientsTableBody');
    if (clientsTable) {
      if (orders.length === 0) {
        clientsTable.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:24px; color:var(--text-muted); font-size:14px;">Hozircha xarid qilgan mijozlar yo'q.</td></tr>`;
      } else {
        const clientMap = {};
        orders.forEach(o => {
          if (!clientMap[o.clientId]) {
            clientMap[o.clientId] = {
              id: o.clientId,
              name: o.clientName,
              phone: o.clientPhone,
              ordersCount: 0,
              totalSpent: 0
            };
          }
          clientMap[o.clientId].ordersCount += 1;
          clientMap[o.clientId].totalSpent += o.totalPaid;
        });

        clientsTable.innerHTML = Object.values(clientMap).map(c => `
          <tr>
            <td><b>${c.id}</b></td>
            <td>${c.name}</td>
            <td>${c.phone}</td>
            <td>${c.ordersCount} ta</td>
            <td><b>${App.formatMoney(c.totalSpent)}</b></td>
            <td><span class="status-badge paid">Mijoz</span></td>
          </tr>
        `).join('');
      }
    }

    // URL Requests Table
    const requestsTable = document.getElementById('adminRequestsTableBody');
    if (requestsTable) {
      const reqs = store.getUrlRequests();
      if (reqs.length === 0) {
        requestsTable.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:20px;">Hozircha maxsus link zayavkalari kelib tushmagan.</td></tr>`;
      } else {
        requestsTable.innerHTML = reqs.map(r => `
          <tr>
            <td><b>${r.id}</b><br><small style="color:var(--text-muted);">${new Date(r.createdAt).toLocaleDateString('uz-UZ')}</small></td>
            <td><b>${r.clientName}</b></td>
            <td><b>${r.title}</b><br><a href="${r.url}" target="_blank" style="color:var(--info);font-size:12px;text-decoration:underline;">Rasmiy havolani ochish &nearr;</a></td>
            <td>${r.note || '-'}</td>
            <td><b>${r.proposedPrice ? App.formatMoney(r.proposedPrice) : `<span style="color:var(--danger);font-size:12px;">Belgilanmagan</span>`}</b></td>
            <td><span class="status-badge ${r.status === 'APPROVED' ? 'delivered' : 'paid'}">${r.status === 'APPROVED' ? 'Taklif yuborildi' : 'Kutilmoqda'}</span></td>
            <td>
              <button class="table-action-btn" onclick="App.openAdminQuoteModal('${r.id}')">
                ${r.status === 'APPROVED' ? 'Qayta belgilash' : 'Narx belgilash'}
              </button>
            </td>
          </tr>
        `).join('');
      }
    }
  },

  handleAdminUpdateCost(orderId, newCost) {
    store.updateOrderStage(orderId, store.getOrders().find(o => o.orderId === orderId).stage, Number(newCost));
    this.renderAdminDashboard();
    this.toast("Tannarx va foyda yangilandi!", "success");
  },

  handleAdminUpdateTracking(orderId, newTracking) {
    const order = store.getOrders().find(o => o.orderId === orderId);
    store.updateOrderStage(orderId, order.stage, null, newTracking);
    this.renderAdminDashboard();
    this.toast("UzPost trek-raqami yangilandi!", "info");
  },

  handleAdminAdvanceStage(orderId, nextStage) {
    store.updateOrderStage(orderId, nextStage);
    this.renderAdminDashboard();
    this.renderClientPortal();
    this.toast("Buyurtma statusi o'zgartirildi!", "success");
  },

  handleAdminDeleteOrder(orderId) {
    if (confirm("Ushbu buyurtmani ro'yxatdan o'chirmoqchimisiz?")) {
      store.deleteOrder(orderId);
      this.renderAdminDashboard();
      this.renderClientPortal();
      this.toast("Buyurtma o'chirildi", "info");
    }
  },

  // PRODUCT DETAILS MODAL
  openProductDetails(productId) {
    const p = store.getProductById(productId);
    if (!p) return;

    document.getElementById('detailProductCategory').textContent = p.category + " — " + p.title;
    const container = document.getElementById('productDetailsContent');
    const isFav = store.getFavorites().includes(p.id);

    container.innerHTML = `
      <div style="display:grid; grid-template-columns: 240px 1fr; gap: 24px; align-items: start;">
        <div>
          <div style="background:var(--card-subtle); border-radius:12px; padding:16px; border:1px solid var(--border-color); text-align:center;">
            <img src="${p.image}" alt="${p.title}" style="max-width:100%; max-height:220px; object-fit:contain;">
          </div>
          <div style="margin-top:12px; font-size:12px; color:var(--text-muted); text-align:center;">
            OEM Kafolat: <b>12 oy rasmiy</b>
          </div>
        </div>

        <div>
          <span class="product-oem-tag" style="position:static; display:inline-block; margin-bottom:8px;">${p.oemTag}</span>
          <h2 style="font-size:18px; font-weight:800; line-height:1.3; margin-bottom:10px;">${p.title}</h2>
          <p style="font-size:13px; color:var(--text-subtle); margin-bottom:16px;">${p.specs}</p>

          <div style="background:var(--card-subtle); padding:14px 16px; border-radius:10px; margin-bottom:18px; font-size:13px; border:1px solid var(--border-light);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding-bottom:8px; border-bottom:1px solid var(--border-light);">
              <span style="color:var(--text-muted); font-weight:600;">Asl nusxa "cilka"si:</span>
              <a href="${p.amazonUrl || 'https://www.amazon.com'}" target="_blank" rel="noopener noreferrer" style="color:#ff9900; font-weight:800; display:inline-flex; align-items:center; gap:4px; text-decoration:underline;">
                <span>Amazon.com da ochish</span>
                <svg style="width:14px;height:14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
              <span style="color:var(--text-muted);">Rasmiy xorijiy manba:</span>
              <span style="color:var(--text-main); font-weight:600;">${p.officialSource}</span>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
              <span style="color:var(--text-muted);">Yetkazish muddati:</span>
              <span style="color:var(--success); font-weight:600;">UzPost orqali 24-48 soat</span>
            </div>
            <div style="display:flex; justify-content:space-between;">
              <span style="color:var(--text-muted);">Holati:</span>
              <span style="color:var(--success); font-weight:700;">Omborda mavjud (Yangi/OEM)</span>
            </div>
            <div style="margin-top:10px; padding-top:8px; border-top:1px dashed var(--border-color); font-size:12px; color:var(--text-subtle);">
              🛡️ <b>To'lov tizimi:</b> Ushbu tovar to'g'ridan-to'g'ri Amazon'dan xarid qilinadi. To'lov plata.nam (Uzcard / Humo) orqali kirdi-chiqdi qilinadi va xavfsiz kafolatlanadi.
            </div>
          </div>

          <div style="display:flex; align-items:baseline; gap:12px; margin-bottom:20px;">
            <span style="font-size:24px; font-weight:800; color:var(--text-main);">${App.formatMoney(p.retailPrice)}</span>
            ${p.oldPrice ? `<span style="font-size:14px; color:var(--text-muted); text-decoration:line-through;">${App.formatMoney(p.oldPrice)}</span>` : ''}
          </div>

          <div style="display:flex; gap:12px;">
            <button class="checkout-submit-btn" style="flex:1;" onclick="App.handleAddToCart('${p.id}'); App.closeModals();">
              <svg style="width:18px;height:18px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              <span>Savatga qo'shish</span>
            </button>
            <button class="action-btn" style="border:1px solid var(--border-color); padding:0 16px;" onclick="App.toggleFav('${p.id}'); App.closeModals();">
              <svg style="width:18px;height:18px;color:${isFav ? 'var(--danger)' : 'currentColor'};" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('productDetailsModal').classList.add('active');
  },

  // LIVE UZPOST TRACKING
  openLiveTrackingModal() {
    document.getElementById('liveTrackingModal').classList.add('active');
    const orders = store.getOrders();
    if (orders.length > 0) {
      document.getElementById('liveTrackInput').value = orders[0].logistics.trackingNumber;
      this.handleLiveTrackSearch();
    }
  },

  handleLiveTrackSearch() {
    const code = document.getElementById('liveTrackInput').value.trim();
    const container = document.getElementById('liveTrackResult');
    if (!code) {
      container.innerHTML = `<p style="color:var(--danger);font-size:13px;">Iltimos, trek-kodni kiriting</p>`;
      return;
    }

    const res = store.trackParcel(code);
    if (!res.found) {
      container.innerHTML = `
        <div style="background:#fff2f2;border:1px solid rgba(247,56,89,0.3);border-radius:10px;padding:16px;text-align:center;">
          <p style="color:var(--danger);font-weight:600;font-size:14px;">${res.message}</p>
          <p style="font-size:12px;color:var(--text-muted);margin-top:4px;">Trek-kod formati: UZP-YYYYMMDD-XXXX</p>
        </div>
      `;
      return;
    }

    const o = res.order;
    container.innerHTML = `
      <div style="background:var(--card-subtle);border-radius:10px;padding:16px;margin-bottom:20px;border:1px solid var(--border-color);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <span style="font-size:15px;font-weight:800;color:var(--primary);">${o.orderId}</span>
          <span class="status-badge warehouse">${o.stage}</span>
        </div>
        <div style="font-size:13px;"><b>Mijoz:</b> ${o.clientName} (${o.clientPhone})</div>
        <div style="font-size:13px;margin-top:2px;"><b>Yetkazish manzili:</b> ${o.logistics.address} (${o.logistics.postcode})</div>
        <div style="font-size:13px;margin-top:2px;"><b>Tovarlar:</b> ${o.items.map(i => `${i.name} (x${i.qty})`).join(', ')}</div>
      </div>

      <h4 style="font-size:14px;font-weight:700;margin-bottom:14px;">UzPost Bosqichlari:</h4>
      <div style="display:flex;flex-direction:column;gap:12px;border-left:3px solid var(--primary);padding-left:16px;margin-left:8px;">
        ${res.timeline.map(t => `
          <div style="opacity:${t.done ? '1' : '0.45'};position:relative;">
            <div style="position:absolute;left:-23px;top:2px;width:12px;height:12px;border-radius:50%;background:${t.done ? 'var(--primary)' : '#bbb'};border:2px solid #fff;"></div>
            <div style="font-size:13px;font-weight:700;color:${t.done ? 'var(--primary)' : 'var(--text-muted)'};">${t.title}</div>
            <div style="font-size:12px;color:var(--text-main);">${t.location}</div>
            <div style="font-size:11px;color:var(--text-muted);">${t.desc}</div>
          </div>
        `).join('')}
      </div>
    `;
  },

  // ADMIN PRODUCT MANAGEMENT
  openAdminAddProductModal() {
    document.getElementById('adminAddProductModal').classList.add('active');
  },

  handleAdminAddProductSubmit(event) {
    event.preventDefault();
    const title = document.getElementById('newProdTitle').value.trim();
    const category = document.getElementById('newProdCategory').value;
    const officialSource = document.getElementById('newProdSource').value.trim();
    const retailPrice = Number(document.getElementById('newProdRetail').value);
    const costPrice = Number(document.getElementById('newProdCost').value);
    const oldPrice = Number(document.getElementById('newProdOld').value) || Math.round(retailPrice * 1.15);
    const image = document.getElementById('newProdImage').value.trim();
    const specs = document.getElementById('newProdSpecs').value.trim();

    store.addProduct({
      title,
      category,
      officialSource,
      retailPrice,
      costPrice,
      oldPrice,
      image,
      specs
    });

    this.closeModals();
    event.target.reset();
    this.renderCatalog();
    this.renderAdminDashboard();
    this.toast("Yangi mahsulot katalogga muvaffaqiyatli qo'shildi!", "success");
  },

  // ADMIN URL REQUEST QUOTE
  openAdminQuoteModal(reqId) {
    const req = (store.getUrlRequests() || []).find(r => r.id === reqId);
    if (!req) return;

    document.getElementById('quoteReqId').value = req.id;
    document.getElementById('quoteModalTitle').textContent = req.title;
    document.getElementById('quoteModalUrl').textContent = req.url;
    document.getElementById('quoteRetailInput').value = req.proposedPrice || '';
    document.getElementById('quoteCostInput').value = req.costPrice || '';
    document.getElementById('adminQuoteModal').classList.add('active');
  },

  handleAdminQuoteSubmit(event) {
    event.preventDefault();
    const reqId = document.getElementById('quoteReqId').value;
    const retail = Number(document.getElementById('quoteRetailInput').value);
    const cost = Number(document.getElementById('quoteCostInput').value);

    store.quoteUrlRequest(reqId, retail, cost);
    this.closeModals();
    this.renderAdminDashboard();
    this.renderClientPortal();
    this.toast("Zayavkaga narx belgilandi va mijozga taklif chiqarildi!", "success");
  },

  // TELEGRAM BOT INTEGRATSIYASI
  getTelegramConfig() {
    try {
      const raw = localStorage.getItem('plata_telegram_config');
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn("Telegram sozlamalarini o'qishda xatolik:", e);
    }
    return {
      botToken: '8824555327:AAEp5i90_8Tux8ZHQ8Aaju55lvGHKTmUyhc',
      chatId: '',
      enabled: true
    };
  },

  handleSaveTelegramSettings() {
    const tokenInput = document.getElementById('tgBotTokenInput');
    const chatInput = document.getElementById('tgChatIdInput');
    if (!tokenInput || !chatInput) return;

    const botToken = tokenInput.value.trim() || '8824555327:AAEp5i90_8Tux8ZHQ8Aaju55lvGHKTmUyhc';
    const chatId = chatInput.value.trim();

    if (!chatId) {
      this.toast("Iltimos, Chat ID maydonini to'ldiring yoki 'Chat ID ni Avtomatik Aniqlash' tugmasini bosing!", "error");
      return;
    }

    const config = { botToken, chatId, enabled: true };
    localStorage.setItem('plata_telegram_config', JSON.stringify(config));
    this.updateTelegramUI();
    this.toast("Telegram sozlamalari muvaffaqiyatli saqlandi!", "success");
  },

  updateTelegramUI() {
    const config = this.getTelegramConfig();
    const badge = document.getElementById('tgStatusBadge');
    const tokenInput = document.getElementById('tgBotTokenInput');
    const chatInput = document.getElementById('tgChatIdInput');

    if (tokenInput && chatInput) {
      tokenInput.value = config.botToken || '8824555327:AAEp5i90_8Tux8ZHQ8Aaju55lvGHKTmUyhc';
      if (config.chatId && !chatInput.value) chatInput.value = config.chatId;
    }

    if (badge) {
      if (config.botToken && config.chatId) {
        badge.textContent = "Aktiv ulangan ✓";
        badge.className = "status-badge delivered";
      } else {
        badge.textContent = "Chat ID kutilmoqda";
        badge.className = "status-badge paid";
      }
    }
  },

  async handleAutoDetectChatId() {
    const config = this.getTelegramConfig();
    const token = config.botToken || '8824555327:AAEp5i90_8Tux8ZHQ8Aaju55lvGHKTmUyhc';
    this.toast("@PlataNamBot dan yangi xabarlar tekshirilmoqda...", "info");

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
      const data = await res.json();
      if (data.ok && data.result && data.result.length > 0) {
        const lastMsg = data.result[data.result.length - 1];
        const fromUser = lastMsg.message ? lastMsg.message.from : (lastMsg.channel_post ? lastMsg.channel_post.chat : null);
        const chatId = lastMsg.message ? lastMsg.message.chat.id : (lastMsg.channel_post ? lastMsg.channel_post.chat.id : null);
        if (chatId) {
          const chatInput = document.getElementById('tgChatIdInput');
          if (chatInput) chatInput.value = String(chatId);
          config.chatId = String(chatId);
          config.botToken = token;
          localStorage.setItem('plata_telegram_config', JSON.stringify(config));
          this.updateTelegramUI();
          this.toast(`Chat ID topildi va ulandi: ${chatId} (${fromUser ? fromUser.first_name : ''})!`, "success");
          return;
        }
      }
      this.toast("Hali xabar kelmadi. Telegram'da @PlataNamBot ga kirib bir marta /start deb yozing!", "warning");
    } catch (e) {
      this.toast("Xatolik yuz berdi: " + e.message, "error");
    }
  },

  async sendTelegramMessage(htmlText) {
    const config = this.getTelegramConfig();
    if (!config.botToken || !config.chatId) {
      console.info("Telegram notification skipped: Bot token or Chat ID is not configured.");
      return false;
    }

    try {
      const url = `https://api.telegram.org/bot${config.botToken}/sendMessage`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: config.chatId,
          text: htmlText,
          parse_mode: 'HTML',
          disable_web_page_preview: false
        })
      });
      const data = await res.json();
      if (!data.ok) {
        console.warn("Telegram API error:", data.description);
      }
      return data.ok;
    } catch (err) {
      console.warn("Telegram network dispatch error:", err);
      return false;
    }
  },

  async handleTelegramTestPing() {
    const config = this.getTelegramConfig();
    if (!config.botToken || !config.chatId) {
      this.toast("Avval Chat ID maydonini to'ldiring yoki 'Chat ID ni Avtomatik Aniqlash'ni bosing!", "warning");
      return;
    }

    this.toast("Telegramga sinov xabari jo'natilmoqda...", "info");
    const testMsg = `🔔 <b>plata.nam — Telegram Bot Aloqa Sinovi!</b>\n\n` +
      `✅ <i>Xabarnoma tizimi muvaffaqiyatli ulandi!</i>\n` +
      `🕒 Vaqt: <b>${new Date().toLocaleString('uz-UZ')}</b>\n` +
      `🤖 Bot: <b>@PlataNamBot</b>\n` +
      `📦 Endi saytga tushgan har bir yangi buyurtma va krossbording zayavkalari shu yerga keladi.`;

    const success = await this.sendTelegramMessage(testMsg);
    if (success) {
      this.toast("Sinov xabari Telegram'ingizga muvaffaqiyatli yuborildi! 🚀", "success");
    } else {
      this.toast("Xatolik! Chat ID noto'g'ri, yoki botga /start bosilmagan.", "error");
    }
  },

  // AUTHENTICATION
  openAuthModal() {
    const user = store.getCurrentUser();
    if (user.role === 'admin') {
      this.logout();
      return;
    }
    document.getElementById('authModal').classList.add('active');
  },

  setAuthRole(role) {
    this.authRole = role;
    document.getElementById('authTabClient').classList.toggle('active', role === 'client');
    document.getElementById('authTabAdmin').classList.toggle('active', role === 'admin');

    document.getElementById('groupClientName').style.display = role === 'client' ? 'block' : 'none';
    document.getElementById('groupClientPhone').style.display = role === 'client' ? 'block' : 'none';
    document.getElementById('groupAdminLogin').style.display = role === 'admin' ? 'block' : 'none';
    document.getElementById('groupAdminPass').style.display = role === 'admin' ? 'block' : 'none';
    document.getElementById('authModalTitle').textContent = role === 'admin' ? "Super-Admin Kirishi" : "Mijoz bo'lib kirish";
  },

  handleAuthSubmit(event) {
    event.preventDefault();
    if (this.authRole === 'admin') {
      const l = document.getElementById('authAdminLoginInput').value.trim();
      const p = document.getElementById('authAdminPassInput').value.trim();
      if (l === 'admin' && p === 'admin2026') {
        store.setCurrentUser({
          id: 'USR-ADM',
          name: 'Super Admin',
          phone: '+998 33 750 30 20',
          role: 'admin'
        });
        this.closeModals();
        this.updateHeaderUI();
        this.switchView('admin');
        this.toast("Admin sifatida muvaffaqiyatli kirdingiz!", "success");
      } else {
        this.toast("Login yoki parol noto'g'ri (admin / admin2026)", "error");
      }
    } else {
      const name = document.getElementById('authNameInput').value.trim() || 'Islomjon';
      const phone = document.getElementById('authPhoneInput').value.trim() || '+998 33 750 30 20';
      store.setCurrentUser({
        id: 'USR-101',
        name,
        phone,
        role: 'client'
      });
      this.closeModals();
      this.updateHeaderUI();
      this.switchView('client');
      this.toast(`Xush kelibsiz, ${name}!`, "success");
    }
  },

  logout() {
    store.setCurrentUser(DEFAULT_USER);
    this.updateHeaderUI();
    this.switchView('catalog');
    this.toast("Tizimdan chiqildi", "info");
  },

  // FAVORITES MODAL
  openFavoritesModal() {
    const favIds = store.getFavorites();
    const modal = document.getElementById('favoritesModal');
    const content = document.getElementById('favoritesModalContent');

    if (favIds.length === 0) {
      content.innerHTML = `
        <div style="text-align:center; padding:36px 16px;">
          <svg style="width:48px;height:48px;color:var(--text-muted);margin:0 auto 12px;display:block;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
          <div style="font-weight:700;font-size:16px;color:var(--text-main);margin-bottom:6px;">Saralangan mahsulotlar hozircha yo'q</div>
          <p style="font-size:13px;color:var(--text-muted);line-height:1.5;max-width:320px;margin:0 auto 16px;">
            Mahsulot kartochkasidagi yurakcha (🤍) belgisini bosish orqali o'zingiz yoqtirgan tovarlarni shu yerga saqlab qo'yishingiz mumkin.
          </p>
          <button class="checkout-submit-btn" style="width:auto;margin:0 auto;padding:0 24px;" onclick="App.closeModals(); App.switchView('catalog');">
            Katalogni ko'rish
          </button>
        </div>
      `;
    } else {
      const products = store.getProducts().filter(p => favIds.includes(p.id));
      content.innerHTML = `
        <div style="display:flex;flex-direction:column;gap:12px;">
          ${products.map(p => `
            <div style="display:flex;align-items:center;gap:14px;padding:12px 0;border-bottom:1px solid var(--border-light);">
              <img src="${p.image}" alt="${p.title}" style="width:64px;height:64px;object-fit:contain;background:var(--card-subtle);border-radius:8px;padding:4px;">
              <div style="flex:1;">
                <div style="font-size:13px;font-weight:600;line-height:1.3;cursor:pointer;" onclick="App.closeModals(); App.openProductDetails('${p.id}');">${p.title}</div>
                <div style="font-size:14px;font-weight:800;color:var(--primary);margin-top:4px;">${App.formatMoney(p.retailPrice)}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <button class="cat-pill" style="background:var(--primary-light);color:var(--primary);font-weight:600;" onclick="App.handleAddToCart('${p.id}'); App.closeModals();">Savatga</button>
                <button class="action-btn" onclick="App.removeFavoriteFromModal('${p.id}')" title="Saralanganlardan o'chirish" style="padding:6px;border-radius:6px;color:var(--danger);border:1px solid rgba(247,56,89,0.2);">
                  <svg style="width:16px;height:16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
    modal.classList.add('active');
  },

  removeFavoriteFromModal(productId) {
    store.toggleFavorite(productId);
    this.updateHeaderUI();
    this.renderCatalog();
    this.openFavoritesModal();
    this.toast("Mahsulot saralanganlardan o'chirildi", "info");
  },

  closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  }
};

// Close modal on escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') App.closeModals();
});

// Initialize App when DOM ready
window.addEventListener('DOMContentLoaded', () => {
  App.init();
});
