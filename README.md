# TabWallet

A secure and modern **link-management** platform that allows users to organize links into categories, manage their profiles, and access admin-level features.
Built for the **WSO2 Ballerina** Competition 2025, this collaborative project focuses on security, performance, and clean architecture.

---

## Features

### User Registration & Login
- Register with a username and password.
- Secure password handling.
- JWT-based authentication.
- Access-level control (User/Admin)

### Profile Management
- Update username.
- Change password.
- Manage personal details.

### Link Management
- Add new links.
- Categorize links for better organization.
- Encrypted CRUD operations for: Links,Categories.
- Delete links as needed.

### Security
- User passwords, links, and categories are securely hashed and encrypted.
- Users can update their username and password at any time.
- Role-based access control (Admin/User).
- Sanitized inputs & safe database operations.

### Admin Dashboard
- Full access to: Users list,Categories,Links.
- Admin-level CRUD operations.
- Monitoring & management tools.

---

## Tech Stack

### Frontend
- Angular
- TypeScript
- HTML / SCSS

### Backend
- Ballerina
- Secure RESTful APIs
- Token-based security

### Database
- MongoDB

### Tools
- VS Code
- Postman
- Git / GitHub

---

## Project Structure
```frontend/
├── .angular/
│   └── cache/
│       └── 192.15/
│           └── fr.
├── .vscode/
├── node_modules/
├── public/
├── screenshots/
├── favicon.ico
├── logo.png
└── src/
    ├── app/
    │   ├── filter-bar/
    │   ├── guard/
    │   ├── home/
    │   ├── landingpage/
    │   ├── model/
    │   ├── monthly-bar-chart/
    │   ├── panel/
    │   ├── profile/
    │   ├── search-bar/
    │   ├── service/
    │   ├── shared/
    │   ├── test/
    │   ├── user-list/
    │   ├── app.component.css
    │   ├── app.component.html
    │   ├── app.component.spec.ts
    │   ├── app.component.ts
    │   ├── app.config.server.ts
    │   ├── app.config.ts
    │   ├── app.routes.server.ts
    │   ├── app.routes.ts
    │   └── assets/
    ├── environments/
    ├── custom-theme.scss
    ├── index.html
    ├── main.server.ts
    ├── main.ts
    ├── server.ts
    ├── styles.css
    └── .editorconfig```

```backend/
├── .vscode/
├── target/
├── bin/
├── cache/
├── resources/
├── build/
├── .devcontainer.json
├── .gitignore
├── Admin.bal
├── Auth.bal
├── Ballerina.toml
├── config.toml
├── db_config.bal
├── Dependencies.toml
├── home.bal
└── main.bal```

```root/
├── .gitignore
├── angular.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json```

---
## Getting Started

### Clone the Repository
`git clone https://github.com/your-username/TabWallet.git`
`cd TabWallet`

### Run Backend (Ballerina)
`cd backend`
`bal run`

### Run Frontend (Angular)
`cd frontend`
`npm install`
`ng serve`

### project runs at:
`http://localhost:4200`


---

## Core Functionalities

### 1. Register an Account
- Go to the registration page.
- Enter your desired username and password.
- A Gmail verification code will be sent to confirm your email.
- Enter the code to activate your account.

### 2. Login
- Enter your username and password to access your dashboard.

### 3. Managing Links
- Add new links and assign them to categories.
- Edit or update links and categories whenever necessary.
- Delete links you no longer need.

### 4. Updating Credentials
- Change your username or password from your profile settings.

### 5. Admin Access
- **Username:** Logasini  
- **Password:** admin123  
- Use these credentials to access the Admin dashboard.

---

## Security Notes
- All sensitive data is securely hashed and encrypted.
- Email verification ensures that only valid users can access the system.
- Always keep your credentials safe and private.

---

This project provides a **secure and organized way to manage personal or professional links** efficiently.

---

## Screen shots 

### Login 
![Login Page](froentend/public/screenshots/login.png)

### Sign in 
![Signin Page](froentend/public/screenshots/signin.jpeg)

### Home page 
![home Page](froentend/public/screenshots/home.png)

### Dark mode 
![darkmood Page](froentend/public/screenshots/darkmood.png)

### Add category 
![add Page](froentend/public/screenshots/addcategory.png)

### edit category 
![edit Page](froentend/public/screenshots/editcategory.png)

### Admin Dashboard 
![admin Page](froentend/public/screenshots/admin1.png)
![admin Page](froentend/public/screenshots/admin2.png)
