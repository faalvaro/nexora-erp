# PROJECT STATUS — Nexora ERP

**Project:** Nexora ERP  
**Status:** Frontend Prototype / Review Build  
**Date:** 13 September 2026

---

## 1. Current Objective

Prototype saat ini dibuat untuk memberikan gambaran awal mengenai:

- arah visual dan branding Nexora ERP
- struktur Landing Page
- alur pengguna dari Landing Page → Sign In → Dashboard
- konsep dashboard owner
- komponen utama yang kemungkinan dibutuhkan sebelum pengembangan backend

Tahap saat ini **belum masuk ke implementasi backend, database, maupun authentication production**.

---

## 2. Current User Flow

```text
Landing Page
    ↓
Sign In
    ↓
Dashboard Owner Overview
```

### Routes

```text
/            Landing Page
/sign-in     Sign In Page
/dashboard   Owner Dashboard Overview
```

---

## 3. Completed Prototype

### Landing Page

Status: ✅ **Prototype selesai**

Section yang sudah dibuat:

- Hero Section
- Floating / Scroll Navbar
- Trusted By / Business Features
- Industry / Jenis Usaha
- ERP Modules
- POS Product Showcase
- Multi-Branch
- Pricing
- Testimonials
- FAQ
- Final CTA
- Footer

### Sign In

Status: ✅ **Frontend demo selesai**

Sudah tersedia:

- email input
- password input
- show / hide password
- email validation
- password validation
- loading state
- success state
- dummy Google Sign In
- dummy Apple Sign In
- dummy Forgot Password
- dummy Free Trial interaction
- redirect ke `/dashboard`

### Owner Dashboard Overview

Status: ✅ **Prototype selesai**

Dashboard saat ini berfokus pada business question:

> **“Bagaimana performa bisnis saat ini, dan apa yang perlu owner tindak lanjuti?”**

Komponen yang sudah dibuat:

#### KPI

- Revenue
- Total Transaksi
- Rata-rata Nilai Order
- Stok Menipis

#### Analytical / Decision Support

- Tren Penjualan
- Perlu Perhatian / Insight
- Produk Terlaris
- Performa Cabang
- Stok yang Perlu Perhatian

#### Filter

- Periode
- Cabang

---

## 4. Dashboard Design Rules

Dashboard dikembangkan dengan prinsip berikut:

1. Menentukan business question terlebih dahulu.
2. Wireframe KPI, chart, filter, dan insight sebelum styling detail.
3. Menjaga margin, spacing, gap, dan alignment tetap konsisten.
4. Memilih chart berdasarkan analytical purpose.
5. Memberikan fungsi yang jelas pada warna.
6. Menjaga konsistensi currency, decimal, unit, dan percentage.
7. Menggunakan hierarchy typography yang sederhana dan predictable.
8. Menambahkan filter hanya jika membantu eksplorasi yang bermakna.
9. Menghapus chart, label, warna, KPI, dan elemen yang tidak membantu keputusan.
10. Mengutamakan kualitas data karena data yang baik menghasilkan keputusan yang lebih baik.

---

## 5. Dummy / Placeholder Content

Saat ini beberapa bagian masih menggunakan konten dummy karena aset dan data final belum tersedia.

### Dummy Content

- nama perusahaan / partner
- customer testimonial
- customer name
- customer role
- customer photo
- hero business owner photo
- pricing
- dashboard KPI
- revenue
- transaksi
- produk
- cabang
- stok
- business insight

Konten tersebut hanya digunakan untuk keperluan visual prototype.

**Semua dummy content akan diganti setelah aset dan data final tersedia.**

---

## 6. Not Yet Implemented

Status berikut belum masuk ke scope prototype saat ini:

- ❌ Backend API
- ❌ Database
- ❌ Real authentication
- ❌ Google OAuth
- ❌ Apple Sign In production
- ❌ Persistent session
- ❌ User registration production
- ❌ Role-based access control
- ❌ CRUD operasional
- ❌ Real dashboard data
- ❌ Real-time data integration
- ❌ Payment / subscription system
- ❌ Production deployment
- ❌ Full dashboard module pages

---

## 7. Current Tech Stack

```text
Next.js
React
TypeScript
Tailwind CSS
shadcn/ui - Base UI
Motion
Lucide React
React Icons
```

---

## 8. Current Development Status

| Area | Status | Notes |
|---|---|---|
| Landing Page | ✅ Done | Frontend prototype |
| Responsive Navbar | ✅ Done | Floating navbar behavior |
| Hero Section | ✅ Done | Dummy visual asset |
| Product Showcase | ✅ Done | Dummy product visual |
| Multi-Branch Section | ✅ Done | UI simulation |
| Pricing | ✅ Done | Dummy pricing |
| Testimonials | ✅ Done | Dummy data |
| FAQ | ✅ Done | Accordion UI |
| CTA & Footer | ✅ Done | Frontend only |
| Sign In UI | ✅ Done | Prototype |
| Form Validation | ✅ Done | Frontend only |
| Show / Hide Password | ✅ Done | Frontend only |
| Sign In Redirect | ✅ Done | Dummy redirect |
| Dashboard Overview | ✅ Done | Prototype |
| Google Auth | ⏳ Pending | Not connected |
| Apple Auth | ⏳ Pending | Not connected |
| Database | ⏳ Pending | Not started |
| Backend API | ⏳ Pending | Not started |
| Production Data | ⏳ Pending | Not connected |
| Deployment | ⏳ Pending | Not started |

---

## 9. Review Needed

Feedback yang dibutuhkan pada tahap ini:

### Product / Business

- Apakah struktur Landing Page sudah sesuai arah produk?
- Apakah positioning Nexora ERP sudah jelas?
- Apakah section yang ditampilkan sudah cukup?
- Apakah ada section yang tidak diperlukan?
- Apakah ada fitur yang harus lebih diprioritaskan?

### Dashboard Owner

- Apakah KPI yang ditampilkan relevan?
- Informasi apa yang paling penting bagi owner?
- Insight apa yang benar-benar membantu pengambilan keputusan?
- Apakah owner perlu melihat data per cabang?
- Apakah ada data operasional lain yang wajib ada?
- Apakah menu sidebar sudah sesuai kebutuhan?

### Authentication

- Apakah Login cukup menggunakan email/password?
- Apakah Google Sign In dibutuhkan?
- Apakah Apple Sign In dibutuhkan?
- Apakah perlu role user yang berbeda?

### Content / Asset

- Logo final
- Brand guideline
- Pricing final
- Foto / visual final
- Customer testimonial
- Company profile content
- Product copy
- Data dummy pengganti / data bisnis final

---

## 10. Recommended Next Step After Review

Setelah feedback diterima, pengerjaan disarankan masuk ke urutan:

```text
1. Finalisasi scope
2. Finalisasi UI/UX prototype
3. Finalisasi data model
4. Database design
5. Authentication
6. Backend API
7. User & Role Management
8. Real data integration
9. Dashboard development
10. Testing
11. Deployment
```

Urutan dapat berubah sesuai kebutuhan bisnis.

---

## 11. Important Notes

Prototype ini digunakan sebagai **visual dan interaction reference**, bukan sebagai final production system.

Sebelum masuk ke tahap development backend, perlu dipastikan terlebih dahulu:

- fitur final
- role pengguna
- data yang tersedia
- sumber data
- business process
- dashboard requirement
- integration requirement
- pricing model
- deployment requirement

Tujuannya agar pengembangan backend tidak dilakukan sebelum kebutuhan bisnis benar-benar jelas.

---

## Review Summary

### Sudah bisa direview

✅ Landing Page  
✅ Sign In Flow  
✅ Dashboard Owner Overview  
✅ Visual Direction  
✅ Information Architecture  
✅ Basic User Flow  

### Belum final

⏳ Content  
⏳ Asset  
⏳ Pricing  
⏳ Dashboard Data  
⏳ Authentication Architecture  
⏳ Backend  
⏳ Database  
⏳ Deployment  

---

**Nexora ERP — One Platform. Better Control.**
