# TEXNIK VAZIFA (SOFTWARE REQUIREMENTS SPECIFICATION)
**Loyiha kodi:** `PLATA-NAM-2026`  
**Loyiha nomi:** `plata.nam` — Kompyuter butlovchi qismlari onlayn buyurtma va krossbording distribyutsiya platformasi  
**Standart:** IEEE 830 / ISO/IEC/IEEE 29148 asosida moslashtirilgan  
**Versiya:** 2.0.0 (Production-Ready)  
**Texnologik stek:** Toza HTML5, zamonaviy CSS3 (CSS Variables, Flexbox, CSS Grid), Vanilla JavaScript (ES6+ Modules/Classes). Tashqi mustaqil dependencylarsiz (Zero-dependency Single Page Application).

---

## 1. LOYIHA MAQSADI VA BIZNES-LOGIKASI (CONCIERGE E-COMMERCE MODELI)

`plata.nam` — O'zbekiston ichki bozorida topilishi mushkul yoki qimmat bo'lgan kompyuter butlovchi qismlarini (ona platalar, protsessor kulerlari/SVO, server va desktop SSD/HDD xotiralari, maxsus kontrollerlar va portlar) xorijiy rasmiy dilerlardan (official store / OEM yetkazib beruvchilardan) buyurtma asosida olib keluvchi konsyerj-riteyl tizimidir.

### Biznes-Jarayon Zanjiri (Pipeline):
1. **Buyurtma & Depozit:** Mijoz mahsulotni tanlaydi va platforma ichidagi tranzaksiya shlyuzi orqali 100% to'lovni amalga oshiradi.
2. **Krossbording Xarid:** Admin to'lovni qabul qilib, belgilangan rasmiy xorijiy saytdan buyurtmani amalga oshiradi (Kirdi-chiqdi balansi avtomat hisoblanadi).
3. **Logistika (UzPost):** Mahsulot O'zbekistonga kirib kelgach, UzPost orqali mijoz ko'rsatgan manzil/indeks bo'yicha jo'natiladi va mijozga avtomatik SMS/kabinet trek-kodi taqdim etiladi.

---

## 2. MODULLAR VA ETAPLAR TAQSIMOTI

Tizim aniq 4 ta asosiy etap va 2 ta alohida rol (Mijoz va Super-Admin) doirasida loyihalashtiriladi.

```
               +-------------------------------------------------------+
               |                PLATFORM YADROSI (STATE)               |
               +-------------------------------------------------------+
                                   |                     |
                  +----------------+                     +----------------+
                  |                                                       |
        [ 1. AUTH & MIJOZ KABINETI ]                             [ 4. ADMIN BOSHQARUV ]
        - Ro'yxatdan o'tish / Kirish                             - Kirdi-chiqdi (Moliya)
        - Buyurtmalar tarixi & Trek-kodi                        - Buyurtmalar statusi (Pipeline)
        - Maxsus havola (URL) so'rovi                           - Mijozlar bazasi & Katalog
                  |                                                       |
        [ 2. KATALOG & SAVAT (UZUM UI) ]                         [ 3. TO'LOV & LOGISTIKA ]
        - Ona plata, Kuler, Xotira, Portlar                      - Karta orqali to'lov yechish
        - Header (Kirish, Tanlangan, Savat)                      - UzPost manzil va indekslash
        - Dynamic Cart Calculator                                - Avtomatik Trek-raqam
```

---

### 1-ETAP: AUTENTIFIKATSIYA VA FOYDALANUVCHILAR BOSHQARUVI (AUTH SUBSYSTEM)

#### 1.1. Ro'llar Matritsasi (RBAC):
* **Mehmon (Guest):** Katalog ko'rish, savatga mahsulot yig'ish, yetkazib berish narxini hisoblash.
* **Mijoz (Client):** Buyurtma berish, to'lov qilish, o'z buyurtmalari holatini kuzatish, maxsus ehtiyot qism havolasini yuborish.
* **Administrator (Super-Admin):** `admin / admin2026` orqali kirish. Butun moliya hisoboti (kirdi-chiqdi), buyurtmalar statusini o'zgartirish, mijozlar bilan aloqa, katalog modifikatsiyasi.

#### 1.2. Interfeys Talabi (image_5a9901 andozasi):
Header qismi to'liq o'ng tomonda quyidagi 3 ta interaktiv blokdan iborat bo'lishi shart:
1. **Kirish (Войти):** Foydalanuvchi ikonasi bilan (`fa-regular fa-user`). Avtorizatsiyadan so'ng mijoz ismi va profil menyusiga aylanadi.
2. **Saralanganlar (Избранное):** Yurak belgisi (`fa-regular fa-heart`).
3. **Korzina (Корзина):** Savat ikonasi (`fa-solid fa-bag-shopping`) va uning ustida to'q binafsha/neon fonli aniq sonli indikator-badge (`badge: 4`).

---

### 2-ETAP: KATALOG VA UZUM-STYLE KORZINKA ARXITEKTURASI

#### 2.1. Mahsulotlar Kategorizatsiyasi:
* `Motherboard` — Intel LGA1700/1851, AMD AM4/AM5 o'yin va ishchi stansiya platalari.
* `Cooling` — Havo kulerlari (Dual Tower), SVO suv sovutish tizimlari.
* `Storage` — NVMe PCIe 4.0/5.0 SSD, Server SAS/SATA HDD.
* `Accessories & Ports` — PCIe to Type-C/USB 3.2 kartalar, Thunderbolt xablar, diagnostika post-kartalari.

#### 2.2. Savat Oynasi UI/UX Spetsifikatsiyasi (image_5a9921 andozasi):
Ekran 2 ta asinxron ishlovchi asosiy kolonnalarga bo'linadi:

##### A. Chap blok (Mahsulotlar boshqaruvi):
* **Global boshqaruv:** `[v] Barchasini tanlash` va `Tanlanganlarni o'chirish` giperhavolalari.
* **Yetkazib berish info-banneri:** *"Yetkazib berish: UzPost tezyurar pochtasi — Ertaga yetkazamiz"*.
* **Tovar kartasi (Item Card):**
  * Mahsulot selektori (Checkbox).
  * Tovar fotolavhasi (80x80px, aspect-ratio 1:1, fon `#f8f9fb`).
  * Tovar nomi va OEM yorlig'i: `"Sotuvchi: plata.nam (Official Import)"`.
  * **Stepper (Miqdor hisoblagichi):** `[ − ] [ soni ] [ + ]` (Minimal 1 dona, nolga tushsa o'chirish so'rovi).
  * **Narxlar bloki:** Amaldagi narx (qalin shrift) va ustidan chizilgan katalog narxi (Old price).
  * Qo'shimcha amallar: O'chirish (Trash) va Saralanganga saqlash (Heart).

##### B. O'ng blok (Sticky Buyurtma Yakuni - Summary Card):
* Sarlavha: **"Ваш заказ / Sizning buyurtmangiz"**
* Qator 1: `Tovar soni (X dona)` — Asl jamlangan narx.
* Qator 2: `Chegirma (Aksiya)` — Qizil shrift bilan manfiy qiymat (masalan: `-137 960 so'm`).
* Qator 3: `UzPost orqali yetkazish` — Yashil yozuv bilan: `"Bepul"`.
* Ajratuvchi chiziq (Divider).
* **Yakuniy hisob (Итого):** Katta shriftda (22px, qalin) to'lanishi lozim bo'lgan aniq summa.
* **Asosiy Tugma:** To'q binafsha rangli keng tugma (`background: #7000ff; border-radius: 12px; height: 50px`) — **"Оформить / Rasmiylashtirish"**.

---

### 3-ETAP: LOGISTIKA (UZPOST) VA TO'LOV INTEGRATSIYASI

#### 3.1. UzPost Logistika Modeli:
Buyurtma rasmiylashtirilayotganda mijozdan quyidagi ma'lumotlar olinadi:
* Viloyat va tuman (Masalan: Namangan viloyati, Chust tumani).
* Yetkazish usuli:
  1. *UzPost pochta bo'limigacha* (Pochta indeksi majburiy: masalan, `160100`).
  2. *Kuryer orqali eshikkacha yetkazish* (Aniq ko'cha, xonadon raqami).
* Avtomatlashtirilgan pochta identifikatori: `UZP-YYYYMMDD-[RANDOM-4]`.

#### 3.2. To'lov Shlyuzi (Strict Gateway):
* Mijoz do'kondan tashqarida mustaqil ravishda xorijiy saytga to'lov qila olmaydi. Barcha tranzaksiya `plata.nam` balansi orqali o'tadi.
* Simulyatsiya qilinuvchi to'lov: Uzcard / Humo / Visa (Karta raqami: 16 xonali, Muddati: MM/YY, CVV).
* Tranzaksiya tasdiqlangach, xarid cheki (invoys) shakllanadi.

---

### 4-ETAP: MIJOZ VA ADMIN PANELLARI (MOLIYAVIY HISOBOT BILAN)

#### 4.1. Mijoz Shaxsiy Paneli:
* Profil parametrlari va kiritilgan UzPost manzillari.
* **Mening Buyurtmalarim Ro'yxati:**
  * Har bir buyurtma uchun progress bar (Status tracker):
    1. `To'lov qilindi` (Mijoz puli tizimda muzlatildi).
    2. `Rasmiy saytdan xarid qilindi` (Admin xorijiy do'konga buyurtma joylashtirdi).
    3. `Omborga yetib keldi & UzPostga topshirildi` (Trek-raqam faollashadi).
    4. `Yetkazib berildi`.
* **Individual Zayavka (URL Buyurtma):** Agar mijozga nostandart plata kerak bo'lsa, xorijiy do'kon linkini kiritadi. Admin unga narx belgilaydi va mijozga to'lov uchun havola chiqariladi.

#### 4.2. Admin Paneli (Biznes-analitika & Nazorat):
* **Kirdi-Chiqdi Moliya Doskasi (Cashflow Dashboard):**
  * `Kirdi (Revenue):` Mijozlar tomonidan to'langan jami mablag'.
  * `Chiqdi (COGS / Xarid qiymati):` Chet eldagi official do'kondan sotib olishga sarflangan mablag' (tannarx).
  * `Sof Foyda (Gross Profit):` $\text{Foyda} = \text{Kirdi} - \text{Chiqdi} - \text{UzPost xarajati}$.
* **Mijozlar Bazasi:** Ismi, telefon raqami, jami qilingan buyurtmalar summasi va ro'yxatdan o'tgan sanasi.
* **Operatsion Buyurtmalar Jadvallari:**
  * Har bir buyurtmani ko'rish, qaysi rasmiy saytdan olinayotganini belgilash, tannarxini kiritish, statusini keyingi bosqichga o'tkazish hamda UzPost trek-kodini biriktirish.

---

## 3. MA'LUMOTLAR TUZILMASI (DATA SCHEMAS / STATE)

Frontend `localStorage` bazasida quyidagi schema bo'yicha ma'lumotlarni yaxlit saqlaydi:

```json
{
  "currentUser": {
    "id": "USR-101",
    "name": "Islomjon",
    "phone": "+998901234567",
    "role": "client"
  },
  "cart": [
    {
      "productId": "PLT-B650",
      "quantity": 1,
      "selected": true
    }
  ],
  "products": [
    {
      "id": "PLT-B650",
      "title": "ASUS TUF GAMING B650-PLUS WIFI AM5",
      "category": "plata",
      "retailPrice": 2850000,
      "costPrice": 2300000,
      "oldPrice": 3200000,
      "officialSource": "asus.com / newegg",
      "inStock": true
    }
  ],
  "orders": [
    {
      "orderId": "ORD-2026-9041",
      "clientId": "USR-101",
      "clientName": "Islomjon",
      "items": [
        { "id": "PLT-B650", "name": "ASUS TUF B650", "qty": 1, "price": 2850000 }
      ],
      "totalPaid": 2850000,
      "costAmount": 2300000,
      "profit": 550000,
      "paymentStatus": "PAID",
      "logistics": {
        "provider": "UzPost",
        "serviceType": "Filialgacha",
        "address": "Namangan sh., Boburshoh ko'chasi, 14-uy",
        "postcode": "160100",
        "trackingNumber": "UZP-20261014-9902"
      },
      "stage": "PURCHASED_OFFICIAL", 
      "createdAt": "2026-10-14T15:30:00Z"
    }
  ]
}
```

---

## 4. FOYDALANUVCHI INTERFEYSI VA DIZAYN STANDARTLARI (UI/UX)

1. **Ranglar palitrasi:**
   * `Brand Primary (Uzum Style):` `#7000ff`
   * `Brand Hover:` `#5800cc`
   * `Fon rangi (Body background):` `#f2f4f7`
   * `Karta foni (Card white):` `#ffffff`
   * `Matn asosiy:` `#1f2026`
   * `Matn ikkilamchi (Muted):` `#8b8e99`
   * `Chegirma / Xatolik:` `#f73859`
   * `Muvaffaqiyat / Status yashil:` `#00b862`
   * `UzPost identifikator moviy:` `#0066cc`

2. **Dizayn prinsiplari:**
   * Barcha elementlar burchaklari yumaloqligi (border-radius): 12px – 16px.
   * Do'kon headeri tepada qotib turuvchi (Sticky Header, `top: 0, z-index: 1000`).
   * Hisob-kitob bloki (Order summary) sahifa skroll bo'lganda o'z o'rnida qoluvchi (Sticky Sidebar).

---

## 5. ANTIGRAVITY UCHUN DASTURLASH VA IMPLEMENTATSIYA BUYRUG'I (PROMPT)

> **Antigravity agentiga to'g'ridan-to'g'ri beriladigan texnik ko'rsatma:**
>
> 1. Ushbu loyihani hech qanday tashqi kutubxonasiz (React, Vue, Node.js yoki Bootstrap ishlatmasdan), to'liq bitta mustaqil `index.html` faylida yaratgin. Barcha CSS (`<style>`) va JavaScript (`<script>`) shu bitta fayl ichida bo'lsin.
> 2. `image_5a9901` rasmidagi Header elementlarini (Profil/Kirish, Sevimlilar, Savat va binafsha badge) hamda `image_5a9921` rasmidagi Uzum Market savatining to'liq analogini (mahsulot chekboxlari, stepper hisoblagichi, sticky qora/binafsha hisobot kartasi, bepul UzPost yetkazish belgisi) piksellarigacha o'ta aniq qilib stilizatsiya qil.
> 3. Tizimda 4 ta sahifani (SPA tablari) ishchi holatda tayyorla:
>    * Katalog & Qismlar ro'yxati.
>    * Savat va UzPost manzilli to'lov oynasi.
>    * Mijoz shaxsiy kabineti (Buyurtma statusi va trek-kodi).
>    * Admin boshqaruv paneli (Kirdi-chiqdi moliya doskasi, mijozlar va status o'zgartirish).
> 4. Ma'lumotlarni brauzer `localStorage`iga bog'la, shunda sahifa yangilanganda ham buyurtmalar, savat va moliyaviy hisobotlar saqlanib qolsin.