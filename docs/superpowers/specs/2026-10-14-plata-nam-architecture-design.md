# plata.nam — Texnik Arxitektura va Dizayn Spetsifikatsiyasi

**Loyiha kodi:** `PLATA-NAM-2026`  
**Sana:** 2026-10-14  
**Holati:** Tasdiqlangan (Approved)  
**Texnologik stek:** Toza HTML5, zamonaviy CSS3 (CSS Variables, Flexbox, CSS Grid), Vanilla JavaScript (ES6+ Modules/Classes). Tashqi mustaqil dependencylarsiz (Zero-dependency Single Page Application).  
**Fayl manzili:** Bitta yagona `index.html` faylida.

---

## 1. Loyiha Maqsadi va Biznes-Mantiq

`plata.nam` — O'zbekiston ichki bozorida topilishi mushkul bo'lgan kompyuter butlovchi qismlarini (ona platalar, protsessor kulerlari/SVO, server va desktop SSD/HDD xotiralari, maxsus kontrollerlar) xorijiy rasmiy dilerlardan buyurtma asosida olib keluvchi konsyerj-riteyl platformasidir.

### 3 Bosqichli Pipeline:
1. **Buyurtma & Depozit:** Mijoz mahsulotni tanlaydi, UzPost manzilini ko'rsatadi va platforma ichidagi to'lov shlyuzi orqali 100% to'lov qiladi.
2. **Krossbording Xarid:** Super-admin buyurtmani qabul qilib, belgilangan rasmiy xorijiy saytdan sotib oladi. Kirdi (Revenue), Chiqdi (COGS) va Sof Foyda (Gross Profit) avtomatik hisoblanadi.
3. **Logistika (UzPost):** Mahsulot O'zbekistonga kirib kelgach, UzPost orqali mijoz ko'rsatgan filial yoki eshikkacha yetkaziladi. Avtomatik trek-kod (`UZP-YYYYMMDD-[RANDOM-4]`) beriladi.

---

## 2. Modullar va Foydalanuvchi Rollari (RBAC)

1. **Mehmon (Guest):**
   - Katalogdagi tovarlarni ko'rish va saralash.
   - Savatga tovar qo'shish, miqdorini o'zgartirish, saralanganlarga (Избранное) qo'shish.
2. **Mijoz (Client):**
   - Tizimga kirish/ro'yxatdan o'tish (Ism, telefon).
   - Savatdagi tovarlarni UzPost manzili va to'lov karta ma'lumotlari bilan rasmiylashtirish.
   - Shaxsiy kabinetda 4 bosqichli buyurtma trekkerini kuzatish:
     1. `To'lov qilindi` (Depozit)
     2. `Rasmiy saytdan xarid qilindi`
     3. `Omborga yetib keldi & UzPostga topshirildi`
     4. `Yetkazib berildi`
   - Individual havola (URL) orqali nostandart tovar buyurtma qilish.
3. **Super-Admin (`admin` / `admin2026`):**
   - **Kirdi-Chiqdi Moliya Doskasi (Cashflow Dashboard):**
     - Jami Kirdi (Revenue)
     - Jami Chiqdi (COGS / Tannarx)
     - Sof Foyda (Gross Profit = Kirdi - Chiqdi - UzPost)
   - Buyurtmalar nazorati (statusni keyingi bosqichga o'tkazish, tannarx va trek-kod kiritish).
   - Mijozlar bazasi va katalog nazorati.

---

## 3. Dizayn Tizimi va UI Standartlari (Uzum Market uslubi)

### 3.1 Ranglar Palitrasi:
* Primary Brand: `#7000ff`
* Primary Hover: `#5800cc`
* Background (Body): `#f2f4f7`
* Card White: `#ffffff`
* Text Primary: `#1f2026`
* Text Muted: `#8b8e99`
* Border Color: `#e2e5eb`
* Danger / Discount: `#f73859`
* Success: `#00b862`
* Logistics Blue (UzPost): `#0066cc`

### 3.2 UI Komponentlari:
* **Sticky Header:**
  - Logotip: `plata.nam` (neon binafsha brending).
  - Qidiruv va toifa tugmalari.
  - O'ng blok: **Kirish / Profil**, **Saralanganlar** (`fa-heart`), **Savat** (`fa-bag-shopping` + binafsha rangli son badge).
* **Katalog Paneli:**
  - 4 ta toifa: `Motherboard`, `Cooling`, `Storage`, `Accessories & Ports`.
  - Tovar kartasi: Rasm, OEM yorlig'i, Nomi, narx va chegirma, "Savatga qo'shish" tugmasi.
* **Savat (Korzina) — 2 ustunli:**
  - *Chap blok:* Barchasini tanlash, UzPost yetkazish info-banneri, Tovar kartasi (Checkbox, 80x80px foto, Stepper `[−] [soni] [+]`, joriy va eski narx, o'chirish va sevimlilar).
  - *O'ng blok (Sticky Summary Card):* Buyurtma hisoboti, tovarlar soni, chegirma (qizil manfiy), UzPost yetkazish (Bepul), yakuniy hisob va binafsha "Rasmiylashtirish" tugmasi.
* **To'lov va Logistika Modali:**
  - UzPost yetkazish turi (Filial yoki Kuryer), Viloyat/Tuman, Indeks (`160100`).
  - Karta ma'lumotlari (16 xonali raqam, MM/YY, CVV) va to'lovdan so'ng rasmiy invoys/chek.

---

## 4. Ma'lumotlar Tuzilmasi (LocalStorage State)

```javascript
{
  currentUser: { id: "USR-101", name: "Islomjon", phone: "+998901234567", role: "client" },
  favorites: ["PLT-B650"],
  cart: [{ productId: "PLT-B650", quantity: 1, selected: true }],
  products: [ /* 8-12 ta to'liq real ma'lumotli tovarlar */ ],
  orders: [ /* buyurtmalar, statuslar, moliya va trek-kodlar */ ]
}
```

---

## 5. Xavfsizlik va Ma'lumotlarning Butunligi
- Brauzer qayta yuklanganda (F5) ma'lumotlar `localStorage`dan tiklanadi.
- Bo'sh bo'lgan holatda boshlang'ich sinov ma'lumotlari (demo tovarlar va buyurtmalar) avtomatik yuklanadi.
- Admin paroli va huquqlari RBAC orqali tekshiriladi.
