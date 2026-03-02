<div align="center">

# 🏅 WSO2 Ballerina Competition 2025 — Official Entry

<img src="froentend/public/logo.png" alt="TabWallet Logo" width="140"/>

# TabWallet
### Secure Link Intelligence & Organization Platform

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Ballerina](https://img.shields.io/badge/Ballerina-20B6B0?style=for-the-badge&logo=ballerina&logoColor=white)](https://ballerina.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

> **Official competition entry for WSO2 Ballerina Competition 2025** — a nationally recognized developer challenge organized by WSO2, one of the world's leading open-source integration software companies.
> TabWallet is a secure, encrypted link-management platform with role-based access control, dark mode, and real-time admin tooling — built with cutting-edge cloud-native technologies.

</div>

---

## 📋 Table of Contents

- [Competition Context](#-competition-context)
- [Project Overview](#-project-overview)
- [System Architecture](#-system-architecture)
- [UI & Screenshots](#-ui--screenshots)
- [Key Features](#-key-features)
- [Security Implementation](#-security-implementation)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Reference](#-api-reference)
- [What I Learned](#-what-i-learned)

---

## 🏅 Competition Context

| Event | Organizer | Year |
|---|---|---|
| **WSO2 Ballerina Competition 2025** | WSO2 Inc. (Global Open-Source Integration Leader) | 2025 |

TabWallet was built as an official entry for the **WSO2 Ballerina Competition 2025** — a developer challenge that tests the ability to build secure, production-grade cloud-native applications using Ballerina, WSO2's modern programming language purpose-built for network-distributed services.

> **What made this technically challenging:** Ballerina is not a mainstream language. Picking it up, designing a secure multi-role API system, and shipping a full-stack application with Angular within the competition window demonstrates the ability to rapidly learn and apply unfamiliar, industry-relevant technologies.

---

## 🔍 Project Overview

**TabWallet** is a full-stack link-management platform that enables users to securely store, organize, and manage personal or professional links in categorized collections — with encrypted storage, JWT-protected APIs, and a role-aware admin dashboard.

### User Roles at a Glance

| Role | Capabilities |
|---|---|
| **User** | Register, verify email, manage links & categories, update profile |
| **Admin** | Full platform visibility — manage all users, links, categories, and system health |

**Core Problem Solved:** Bookmarks are scattered across browsers, devices, and platforms. TabWallet centralizes link management with security-first architecture — links are encrypted at rest, access is token-gated, and every operation is role-validated.

---

## 🏗️ System Architecture

> Full system architecture designed and documented as part of the engineering process — illustrating the complete request lifecycle from the Angular SPA through Ballerina's API layer, encryption engine, and down to the MongoDB data layer.

![TabWallet System Architecture](/froentend/public/architecture-tabwallet.svg)

### Architecture Breakdown

The system is structured across **three distinct layers**, each with clearly defined responsibilities and security boundaries:

**① Client Layer — Angular 17 SPA (TypeScript)**

The frontend is a Single Page Application built with Angular 17 and TypeScript. Navigation is protected at the routing layer — Angular **Route Guards** intercept every route change, validate the stored JWT token, and redirect unauthenticated or unauthorised users before any page renders and before any API call is even made. This is security enforced at the UI routing level, not just hidden buttons. The **HTTP Service Layer** handles all communication with the Ballerina backend via Angular's `HttpClient`, with an HTTP interceptor that automatically attaches the `Authorization: Bearer <token>` header on every outbound request. The **Admin Route Guard** performs an additional role claim check — only tokens carrying the `Admin` role claim are permitted to load the Admin Dashboard. The UI includes a custom Angular Material SCSS theme supporting full dark mode, a monthly bar chart for analytics, and a responsive filter and search experience.

**② Backend Layer — Ballerina Cloud-Native API Server**

The backend is built entirely in **Ballerina** — WSO2's purpose-built, cloud-native programming language designed specifically for networked services. The server listens on port `9090` and is modularized into three focused files: `Auth.bal` owns all authentication logic (registration, login, email verification, password hashing, and JWT issuance), `home.bal` owns all user-facing operations (CRUD on links and categories), and `Admin.bal` owns all admin-level operations with an additional role gate. Every request to a protected resource passes through the **JWT Validator** which verifies the token signature, checks the `exp` expiry claim, and extracts the role. The **RBAC Enforcer** then gates access — a `User` token is structurally incapable of reaching an `Admin` endpoint regardless of what the frontend does. Before any data reaches MongoDB, it passes through the **Encryption Layer** — an AES encryption engine that encrypts link URLs and category data with a server-managed key before writing ciphertext to the database, and decrypts transparently on read.

**③ Data Layer — MongoDB**

MongoDB stores four collections. The `Users` collection stores only hashed passwords — never plaintext. The `Links` and `Categories` collections store AES-encrypted ciphertext — raw database access reveals nothing meaningful about user data. The `Verification Codes` collection holds time-bound email codes that are invalidated after a single use.

**External Services**

Gmail SMTP handles outbound verification emails during account registration. The verification code is generated server-side, stored temporarily, and invalidated once confirmed — ensuring one-time use only.

### Key Architectural Decisions

| Decision | Rationale |
|---|---|
| **Ballerina over Node/Spring** | Purpose-built for networked APIs; native JWT, HTTP, and JSON primitives reduce boilerplate and shrink the attack surface |
| **Route Guards at Angular router level** | Auth enforcement happens before rendering — prevents flash-of-unauthorized-content and enforces least-privilege UI |
| **Field-level AES encryption** | Password hashing alone is insufficient — link data is personally sensitive; encrypting at the application layer means DB-level breaches expose only ciphertext |
| **Modular Ballerina files** | `Auth.bal`, `Admin.bal`, `home.bal` are bounded contexts — each owns its routes, authorization logic, and business rules independently |
| **MongoDB document model** | Flexible schema accommodates per-user variable link/category structures without schema migrations or relational joins |

---

## 📱 UI & Screenshots

> Built with Angular + custom SCSS theming — includes full dark mode support.

### Login
![Login Page](froentend/public/screenshots/login.png)

### Sign Up
![Sign Up Page](froentend/public/screenshots/signin.jpeg)

### Home Dashboard
![Home Page](froentend/public/screenshots/home.png)

### Dark Mode
![Dark Mode](froentend/public/screenshots/darkmood.png)

### Add Category
![Add Category](froentend/public/screenshots/addcategory.png)

### Edit Category
![Edit Category](froentend/public/screenshots/editcategory.png)

### Admin Dashboard
![Admin Panel 1](froentend/public/screenshots/admin1.png)
![Admin Panel 2](froentend/public/screenshots/admin2.png)

---

## ✨ Key Features

### 🔐 Authentication & Identity
- Secure registration with **SMTP Gmail email verification** — inactive accounts cannot access the system
- **JWT-based authentication** — stateless, scalable, and industry-standard
- **Role-Based Access Control (RBAC)** — User and Admin roles enforced at both the API level and the Angular routing layer

### 🔗 Encrypted Link Management
- Add, edit, and delete personal or professional links
- **Organize links into categories** for structured, searchable collections
- All link and category data is **AES-encrypted at rest** — even database-level access doesn't expose raw user data
- Full CRUD operations with sanitized inputs and safe database query patterns

### 👤 Profile Management
- Update username and password securely at any time
- Password changes re-validated against security policies before update

### 🌙 UI/UX — Dark Mode & Theming
- Full **dark mode support** with custom Angular Material SCSS theme
- Responsive, mobile-aware layout
- Monthly bar chart analytics for link activity visualization

### 🛡️ Admin Dashboard
- Complete visibility into all users, links, and categories across the platform
- Admin-level CRUD — create, edit, delete any resource
- User monitoring and management tooling

---

## 🔒 Security Implementation

Security is the cornerstone of TabWallet. Every layer of the stack has deliberate, independent security controls — this is **defense in depth**, not security theatre.

### Password Hashing
User passwords are never stored in plaintext. Before persisting to MongoDB, passwords are run through a **cryptographic hashing algorithm with salt** — meaning even a full database breach exposes no usable credentials.

```
Registration:  plainPassword → hash(password + salt) → store hash only
Login:         inputPassword → hash(input + storedSalt) → compare with stored hash
               Match → JWT issued | No Match → 401 Unauthorized
```

### Link & Category Encryption — AES at Rest
Unlike most link managers that store URLs as plaintext, TabWallet **encrypts all link and category data at rest using AES encryption**. This means even if someone gains direct database access, they see only ciphertext.

```
User adds link  → Encrypt(linkData, serverKey) → Store ciphertext in MongoDB
User reads link → Fetch ciphertext from MongoDB → Decrypt(ciphertext, serverKey) → Return plaintext to client
```

This goes significantly beyond what most junior developers implement — field-level encryption is a production-grade security pattern used in financial and healthcare systems.

### JWT Authentication & Token Lifecycle
All protected routes require a valid, unexpired JWT signed with the server's secret key.

```
POST /auth/login  →  JWT issued: { userId, role, iat, exp }
                     Signed with HMAC-SHA256 (secret never leaves backend)

Protected request:
  Authorization: Bearer <token>
  → Ballerina middleware validates HMAC signature
  → Checks exp claim — rejects stale tokens with 401
  → Extracts role claim — passed to RBAC enforcer
```

**Token Expiration** ensures compromised tokens have a limited validity window — short-lived tokens minimize the blast radius of any credential leak.

### Role-Based Access Control (RBAC)
Ballerina resource functions enforce role checks server-side. Admin endpoints are structurally inaccessible to User-role tokens — enforced in the API, independent of what the frontend does.

```ballerina
// Only Admin role tokens can reach this resource
resource function get admin/users(http:Caller caller, http:Request req) returns error? {
    // Role extracted from JWT claims and validated before any logic executes
}
```

### Angular Route Guards — Client-Side Defense Layer
Beyond API-level RBAC, Angular Route Guards provide a second independent enforcement layer at the UI routing level:

```typescript
// Redirects to login before the component even renders
canActivate(): boolean {
  if (!this.authService.isAuthenticated()) {
    this.router.navigate(['/login']);
    return false;
  }
  return true;
}
```

### Input Sanitization
All user inputs are validated and sanitized before reaching the database layer — protecting against injection attacks and malformed data corrupting the system.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend Framework | Angular 17 | SPA with component-based UI architecture |
| Frontend Language | TypeScript | Type-safe client-side code |
| Styling | SCSS + Angular Material | Custom theming, dark mode, responsive layout |
| Backend Language | Ballerina (WSO2) | Cloud-native, network-centric API server |
| API Style | RESTful HTTP | Stateless resource-oriented endpoints |
| Database | MongoDB | Encrypted document storage |
| Data Encryption | AES (field-level) | Link & category encryption at rest |
| Authentication | JWT (HMAC-SHA256) | Stateless token-based auth |
| Email Verification | SMTP (Gmail) | Account activation flow |
| Dev Tools | VS Code, Postman, Git/GitHub | Development, API testing, version control |

---

## 📁 Project Structure

```
TabWallet/
├── README.md
├── architecture-tabwallet.svg            # System architecture diagram
├── angular.json                          # Angular workspace config
├── package.json
├── tsconfig.json
│
├── frontend/                             # Angular SPA
│   └── src/
│       ├── app/
│       │   ├── guard/                    # Route guards (JWT + role auth checks)
│       │   ├── service/                  # HTTP service layer (API calls)
│       │   ├── model/                    # TypeScript interfaces/models
│       │   ├── home/                     # Main dashboard view
│       │   ├── landingpage/              # Public landing page
│       │   ├── panel/                    # Link/category management panel
│       │   ├── profile/                  # User profile management
│       │   ├── user-list/                # Admin user management view
│       │   ├── filter-bar/               # Search & filter UI
│       │   ├── search-bar/               # Search component
│       │   ├── monthly-bar-chart/        # Analytics chart component
│       │   └── shared/                   # Shared components & utilities
│       ├── environments/                 # Environment config (dev/prod)
│       ├── custom-theme.scss             # Angular Material dark/light theme
│       └── styles.css
│
└── backend/                              # Ballerina API Server
    ├── main.bal                          # Entry point & server bootstrap
    ├── Auth.bal                          # Authentication routes & JWT logic
    ├── Admin.bal                         # Admin-only endpoints (RBAC enforced)
    ├── home.bal                          # User dashboard endpoints
    ├── db_config.bal                     # MongoDB connection configuration
    ├── Ballerina.toml                    # Project metadata
    ├── config.toml                       # Environment configuration
    └── Dependencies.toml                 # Dependency lock file
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version |
|---|---|
| Ballerina | Swan Lake 2201.x+ |
| Node.js | 18+ |
| Angular CLI | 17+ |
| MongoDB | 6.0+ (local or Atlas) |

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/TabWallet.git
cd TabWallet
```

### 2. Configure the Backend

Edit `backend/config.toml`:

```toml
[database]
connectionString = "mongodb://localhost:27017"
databaseName = "TabWallet"

[jwt]
secret = "your-secret-key-minimum-32-characters"
expiryInSeconds = 86400

[smtp]
host = "smtp.gmail.com"
port = 587
username = "your-email@gmail.com"
password = "your-app-password"
```

### 3. Run the Backend (Ballerina)

```bash
cd backend
bal run
```

> ✅ Backend API starts on: `http://localhost:9090`
> Ensure MongoDB is running and reachable before starting.

### 4. Run the Frontend (Angular)

```bash
cd frontend
npm install
ng serve
```

> 🌐 Application available at: `http://localhost:4200`

---

## 📡 API Reference

| Method | Endpoint | Role | Description |
|---|---|---|---|
| `POST` | `/auth/register` | Public | Create new account |
| `POST` | `/auth/login` | Public | Login, receive JWT |
| `POST` | `/auth/verify` | Public | Email verification |
| `GET` | `/home/links` | User | Get user's links (decrypted) |
| `POST` | `/home/links` | User | Add new link (AES-encrypted at rest) |
| `PUT` | `/home/links/{id}` | User | Update link |
| `DELETE` | `/home/links/{id}` | User | Delete link |
| `GET` | `/home/categories` | User | Get user's categories |
| `POST` | `/home/categories` | User | Create category |
| `PUT` | `/profile/username` | User | Update username |
| `PUT` | `/profile/password` | User | Change password |
| `GET` | `/admin/users` | Admin | List all users |
| `GET` | `/admin/links` | Admin | View all links |
| `DELETE` | `/admin/users/{id}` | Admin | Remove a user |

All protected endpoints require: `Authorization: Bearer <JWT_TOKEN>`

---

## 💡 What I Learned

Building TabWallet stretched my technical boundaries in deliberate ways:

- **Ballerina as a new paradigm** — Learning a purpose-built network language from scratch under competition pressure taught me that strong fundamentals (HTTP, REST, security) transfer across languages faster than expected
- **Encryption beyond authentication** — Most tutorials stop at hashing passwords. Implementing field-level AES encryption for link data required understanding encryption primitives, key management, and the performance trade-offs of encrypting at the application layer
- **Angular Route Guards in production patterns** — Building auth guards that intercept routing decisions (not just hide buttons) showed the real difference between security theatre and actual access control
- **Defense in depth** — Designing a system where the database, API, and UI all independently enforce the same security rules means no single layer failure compromises the whole system
- **Separation of concerns in Ballerina** — Modularizing into `Auth.bal`, `Admin.bal`, `home.bal` mirrors the microservice mindset — each file is a bounded context that owns its routes, logic, and authorization policy independently
- **System architecture documentation** — Producing a full architecture diagram alongside the codebase helped communicate design decisions clearly and will serve as a reference for any future contributor

---

## 👨‍💻 Built By

Developed for the **WSO2 Ballerina Competition 2025**
A nationally recognized developer challenge by WSO2 — a global leader in open-source integration and API management.

> *"Built with a language most developers haven't used — because learning under pressure is how real engineers grow."*

---

<div align="center">

**If this project impressed you, feel free to ⭐ star the repo and connect!**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://github.com/Tishanth-07)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://www.linkedin.com/in/tishanth-t007/)

</div>