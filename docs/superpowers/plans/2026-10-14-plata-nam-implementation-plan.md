# plata.nam Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** O'zbekiston bozori uchun chet eldan kompyuter butlovchi qismlarini buyurtma asosida keltiruvchi, toza HTML5/CSS3/Vanilla JS da bitta `index.html` faylida to'liq ishlovchi Uzum Market uslubidagi platformani yaratish.

**Architecture:** Bitta mustaqil `index.html` faylida to'liq modulli arxitektura: CSS dizayn tizimi (CSS variables, responsive Uzum styling), semantik SPA layout (Header, Catalog, Uzum Cart, Logistics/Payment Modal, Client Portal, Admin Dashboard), va reaktiv Vanilla JS State Manager (`localStorage` integratsiyasi bilan).

**Tech Stack:** HTML5, CSS3 (Variables, Flexbox, Grid, Animations), Vanilla JavaScript (ES6+ Classes/Modules, LocalStorage). Tashqi kutubxona va dependencylarsiz (Zero-dependency).

**Spec:** [2026-10-14-plata-nam-architecture-design.md](file:///c:/Users/KIUT/Desktop/PLATA.NAM/docs/superpowers/specs/2026-10-14-plata-nam-architecture-design.md)

## Global Constraints
- Barcha kod to'liq bitta mustaqil `c:\Users\KIUT\Desktop\PLATA.NAM\index.html` fayli ichida bo'lishi shart.
- Tashqi npm paketlar yoki CSS frameworklar (Tailwind, Bootstrap) ishlatilmaydi; toza CSS3 va Vanilla JS.
- Brend rangi: `#7000ff` (Uzum Style), kartalar: `#ffffff`, fon: `#f2f4f7`.
- Ma'lumotlar brauzer `localStorage`ida saqlanadi va sahifa yangilanganda yo'qolmaydi.
- Admin hisobi: `admin` / `admin2026`.

## Review Focus
1. Savatda tovarlar soni o'zgarganda yoki tanlov (checkbox) olib tashlanganda O'ng tomondagi Sticky hisob-kitob kartasi avtomatik, aniq qayta hisoblanishi.
2. UzPost yetkazish turiga qarab (Filial yoki Kuryer) majburiy maydonlar (indeks / xonadon manzili) to'liq tekshirilishi.
3. To'lov amalga oshirilgach, buyurtma avtomatik `orders` ro'yxatiga tushishi va invoys generatsiya qilinishi.
4. Admin panelida kirdi-chiqdi moliya formulasi: $\text{Foyda} = \text{Kirdi} - \text{Chiqdi} - \text{UzPost}$ to'g'ri hisoblanishi.
5. Mijoz kabinetida 4 bosqichli status tracker va individual URL buyurtma shaklining to'liq ishlashi.

---

### Task 1: Boshlang'ich HTML Skeleti, CSS Dizayn Tizimi va Ma'lumotlar Bazasi (State Engine)

**Files:**
- Create: `c:\Users\KIUT\Desktop\PLATA.NAM\index.html`

**Interfaces:**
- Produces: `window.PlataStore` (LocalStorage State menejeri: `products`, `cart`, `currentUser`, `orders`, `favorites`), CSS design tokens (`--primary: #7000ff`, `--bg: #f2f4f7`, etc.).

- [ ] **Step 1: HTML va CSS dizayn tizimini yozish**
  - Fontlar (Inter/Outfit), SVG ikonalar, CSS o'zgaruvchilari, reset, sticky header, responsive grid, modal tizimi va toast bildirishnomalari.
- [ ] **Step 2: State Manager va demo ma'lumotlar bazasini yaratish**
  - TZ talabi bo'yicha 4 toifadagi real qismlar: ASUS B650 TUF AM5, DeepCool AK620, Kingston Fury Renegade 2TB NVMe, PCIe Type-C / Thunderbolt kontroller.
  - Initial `localStorage` sinxronizatori va CRUD helperlari.
- [ ] **Step 3: Tekshirish**
  - Brauzerda ochib, boshlang'ich layout va konsolda `window.PlataStore` to'liq yuklanganini tekshirish.
- [ ] **Step 4: Commit**
  - `git add index.html; git commit -m "feat: setup HTML skeleton, CSS design system, and state engine"`

---

### Task 2: Uzum Market Uslubidagi Header, Qidiruv va Tovar Katalogi (Catalog View)

**Files:**
- Modify: `c:\Users\KIUT\Desktop\PLATA.NAM\index.html`

**Interfaces:**
- Consumes: `PlataStore.getProducts()`, `PlataStore.getCartCount()`, `PlataStore.getUser()`.
- Produces: `renderHeader()`, `renderCatalog(filterCategory, searchQuery)`, `addToCart(productId)`, `toggleFavorite(productId)`.

- [ ] **Step 1: Header blokini yaratish (`image_5a9901` andozasi)**
  - Logotip `plata.nam`, Qidiruv inputi, toifalar ro'yxati.
  - O'ng blok: **Kirish / Profil menyusi**, **Saralanganlar** (heart ikona), **Savat** (bag ikona + binafsha son indikatori).
- [ ] **Step 2: Katalog kartalarini render qilish**
  - Kategoriyalar bo'yicha filter: `Barchasi`, `Ona platalar`, `Kulerlar va SVO`, `SSD va Xotira`, `Aksessuar va Portlar`.
  - Tovar kartasi: Rasm, OEM yorlig'i ("Sotuvchi: plata.nam (Official Import)"), joriy va eski narx, "Savatga qo'shish" tugmasi.
- [ ] **Step 3: Tekshirish**
  - Filtrlarni bosish, savatga tovar qo'shganda headerdagi binafsha badgening yangilanishini tekshirish.
- [ ] **Step 4: Commit**
  - `git add index.html; git commit -m "feat: implement header and interactive product catalog"`

---

### Task 3: Uzum-Style Savat (Korzina) va Dinamik Hisoblagich (`image_5a9921` andozasi)

**Files:**
- Modify: `c:\Users\KIUT\Desktop\PLATA.NAM\index.html`

**Interfaces:**
- Consumes: `PlataStore.getCart()`, `PlataStore.updateQuantity()`, `PlataStore.toggleItemSelect()`.
- Produces: `renderCart()`, `updateSummaryCalculator()`.

- [ ] **Step 1: Chap kolonkani yaratish (Mahsulotlar boshqaruvi)**
  - Global `[v] Barchasini tanlash` va `Tanlanganlarni o'chirish`.
  - UzPost info-banneri: *"Yetkazib berish: UzPost tezyurar pochtasi — Ertaga yetkazamiz"*.
  - Har bir tovar kartasi: Checkbox, 80x80px foto, OEM yorlig'i, stepper `[ − ] [ soni ] [ + ]`, narx va chizilgan chegirma, o'chirish va sevimlilar.
- [ ] **Step 2: O'ng kolonkani yaratish (Sticky Summary Card)**
  - "Sizning buyurtmangiz" bloki (sahifa skrollida qotib turadi).
  - Tovar soni, Aksiya chegirmasi (qizil manfiy qiymat), UzPost yetkazish (yashil "Bepul").
  - Yakuniy hisob (22px bold) va `#7000ff` to'q binafsha "Rasmiylashtirish" tugmasi.
- [ ] **Step 3: Tekshirish**
  - Stepper orqali sonni oshirish/kamaytirish, chekboxlarni yoqish/o'chirish va yakuniy summaning dinamik o'zgarishini tekshirish.
- [ ] **Step 4: Commit**
  - `git add index.html; git commit -m "feat: implement Uzum-style 2-column shopping cart with live calculator"`

---

### Task 4: UzPost Logistika, To'lov Shlyuzi va Invoys (Checkout & Payment Gateway)

**Files:**
- Modify: `c:\Users\KIUT\Desktop\PLATA.NAM\index.html`

**Interfaces:**
- Consumes: `PlataStore.getCartSelectedTotal()`, `PlataStore.getCurrentUser()`.
- Produces: `openCheckoutModal()`, `processPayment(orderData)`, `renderInvoice(orderId)`.

- [ ] **Step 1: UzPost yetkazish shaklini yaratish**
  - Viloyat va tuman tanlash.
  - Yetkazish usuli radiosi: *UzPost filiali (indeks kiritish)* yoki *Kuryer (aniq ko'cha, xonadon)*.
- [ ] **Step 2: To'lov shlyuzini simulyatsiya qilish (Uzcard/Humo/Visa)**
  - 16 xonali karta raqami, MM/YY, CVV, to'lovni tasdiqlash.
  - `UZP-YYYYMMDD-[RANDOM-4]` trek-kodini generatsiya qilish va yangi buyurtmani `orders` bazasiga saqlash.
- [ ] **Step 3: Xarid cheki (Invoys) ko'rinishi**
  - Rasmiy kvitansiya: buyurtma raqami, tovarlar, to'langan summa, UzPost trek-kodi va bosib chiqarish/saqlash imkoniyati.
- [ ] **Step 4: Tekshirish**
  - Test to'lovini amalga oshirish, invoys shakllanishi va savatning avtomatik tozalanishini tekshirish.
- [ ] **Step 5: Commit**
  - `git add index.html; git commit -m "feat: implement UzPost logistics, payment gateway and invoice generator"`

---

### Task 5: Mijoz Shaxsiy Kabineti va 4 Bosqichli Buyurtma Trekkeri

**Files:**
- Modify: `c:\Users\KIUT\Desktop\PLATA.NAM\index.html`

**Interfaces:**
- Consumes: `PlataStore.getClientOrders()`.
- Produces: `renderClientPortal()`, `submitUrlCustomOrder()`.

- [ ] **Step 1: Mijoz profili va buyurtmalar ro'yxatini chiqarish**
  - Foydalanuvchi ma'lumotlari, saqlangan manzillar.
  - Har bir buyurtma uchun vizual 4 bosqichli status tracker:
    1. `To'lov qilindi`
    2. `Rasmiy saytdan xarid qilindi`
    3. `Omborga yetib keldi & UzPostga topshirildi` (Trek-kod nusxalash tugmasi bilan)
    4. `Yetkazib berildi`
- [ ] **Step 2: Individual havola (URL Buyurtma) shaklini qo'shish**
  - Xorijiy sayt linkini kiritish (masalan: `https://newegg.com/...`), tovar nomi, izoh va zayavka jo'natish.
- [ ] **Step 3: Tekshirish**
  - Buyurtma statusini ko'rish va yangi zayavka yuborib tekshirish.
- [ ] **Step 4: Commit**
  - `git add index.html; git commit -m "feat: implement client portal with 4-stage pipeline tracker and URL order request"`

---

### Task 6: Super-Admin Boshqaruv Paneli va Kirdi-Chiqdi Moliya Doskasi

**Files:**
- Modify: `c:\Users\KIUT\Desktop\PLATA.NAM\index.html`

**Interfaces:**
- Consumes: `PlataStore.getAllOrders()`, `PlataStore.getProducts()`, `PlataStore.getClients()`.
- Produces: `renderAdminDashboard()`, `advanceOrderStatus()`, `updateProductCostPrice()`.

- [ ] **Step 1: Admin avtorizatsiyasi (`admin / admin2026`)**
  - Himoyalangan admin paneli kirish eshigi.
- [ ] **Step 2: Kirdi-Chiqdi Moliya Doskasi (Cashflow Dashboard)**
  - `Jami Kirdi (Revenue)`: Mijozlar to'lagan barcha pullar.
  - `Jami Chiqdi (COGS / Tannarx)`: Xorijdan xarid qilishga ketgan summa.
  - `Sof Foyda (Gross Profit)`: $\text{Foyda} = \text{Kirdi} - \text{Chiqdi} - \text{UzPost xarajati}$.
- [ ] **Step 3: Buyurtmalar jadvali va Operatsion boshqaruv**
  - Buyurtma statusini bosqichma-bosqich o'zgartirish (To'lov qilindi $\rightarrow$ Xarid qilindi $\rightarrow$ UzPost trek-kod kiritish $\rightarrow$ Yetkazildi).
  - Rasmiy sayt xarid linki va tannarxini kiritish imkoniyati.
- [ ] **Step 4: Mijozlar bazasi jadvali**
  - Ism, telefon, buyurtmalar soni va jami sarflangan summa.
- [ ] **Step 5: Tekshirish**
  - Admin sifatida kirish, statusni o'zgartirish, moliya ko'rsatkichlarining dinamik o'zgarishini tekshirish.
- [ ] **Step 6: Commit**
  - `git add index.html; git commit -m "feat: implement admin cashflow dashboard and order pipeline management"`

---

### Task 7: Yakuniy Tekshirish, Cross-Device Moslashuvchanlik va Polishing

**Files:**
- Modify: `c:\Users\KIUT\Desktop\PLATA.NAM\index.html`

- [ ] **Step 1: Brauzerda to'liq E2E foydalanuvchi ssenariylarini tekshirish**
  - Ro'yxatdan o'tish $\rightarrow$ Katalogdan savatga qo'shish $\rightarrow$ Savat stepper va chekboxlarini o'zgartirish $\rightarrow$ UzPost manzili kiritish $\rightarrow$ Karta bilan to'lov $\rightarrow$ Invoys olish $\rightarrow$ Mijoz kabinetida trekker holatini ko'rish $\rightarrow$ Admin panelida statusni o'zgartirish $\rightarrow$ Moliya doskasidagi sof foydani tekshirish.
- [ ] **Step 2: Responsive moslashuvchanlik (Mobil, Planshet, Desktop)**
  - Mobile header va hamburger/tab navigatsiyasi, savatning ixcham ko'rinishi.
- [ ] **Step 3: Yakuniy commit va loyihani topshirish**
  - `git add index.html; git commit -m "feat: complete plata.nam platform with polished UI/UX"`
