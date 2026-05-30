# React E-Commerce App

A full-featured e-commerce web application built with React, Redux Toolkit, and React Router DOM.

---

## 📸 Features

- 🔐 User Registration & Login (LocalStorage based auth)
- 🛡️ Protected Routes
- 🏪 Product Listing (from DummyJSON API)
- 📄 Product Details Page
- 🛒 Add to Cart (Redux)
- 🧾 Cart Page with Total Price
- 🔢 Live Cart Count in Navbar
- 📱 Responsive UI

---

## 🗂️ Project Structure

```
src/
├── Components/          # Public pages (before login)
│   ├── Home.jsx         # Landing page with products preview
│   ├── Login.jsx        # Login form
│   ├── Registration.jsx # Register form
│   ├── LandingPage.jsx  # Layout for public routes
│   └── NavBar.jsx       # Public navbar
│
├── User/                # Protected pages (after login)
│   ├── UserDashboard.jsx  # Layout for protected routes
│   ├── UserHome.jsx       # Products listing page
│   ├── ProductDetails.jsx # Single product page
│   ├── Cart.jsx           # Cart page
│   ├── User_nav.jsx       # Dashboard navbar
│   └── ProtectedRoute.jsx # Route guard
│
├── store/
│   ├── store.js         # Redux store config
│   └── cartSlice.js     # Cart state (addItem, totalPrice)
│
├── App.jsx              # Routes config
├── App.css              # Global styles
└── main.jsx             # Entry point with Redux Provider
```

---

## 🔀 Routes

| Path | Component | Protected |
|------|-----------|-----------|
| `/` | LandingPage + Home | ❌ |
| `/login` | Login | ❌ |
| `/reg` | Registration | ❌ |
| `/userDashboard` | UserHome | ✅ |
| `/userDashboard/productDetails/:id` | ProductDetails | ✅ |
| `/userDashboard/cart` | Cart | ✅ |

---

## 🧰 Tech Stack

| Tech | Purpose |
|------|---------|
| React 18 | UI Framework |
| React Router DOM | Client-side Routing |
| Redux Toolkit | Global State (Cart) |
| Axios | API calls |
| DummyJSON API | Fake product data |
| LocalStorage | Auth token & user data |

---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/shopzone.git

# 2. Navigate into the project
cd shopzone

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

---

## 🔐 Auth Flow

1. Register at `/reg` — saves `name`, `email`, `phone`, `password` to `localStorage`
2. Login at `/login` — validates against stored data, sets `token` in `localStorage`
3. `ProtectedRoute` checks for `token` — redirects to `/login` if not found
4. Logout — clears token (redirect to `/login`)

---

## 🛒 Cart Flow

1. Click **Add to Cart** on any product (UserHome or ProductDetails)
2. `addItem` action is dispatched to Redux store
3. Duplicate check — same item cannot be added twice
4. Cart count updates live in navbar
5. Total price calculated in Redux state
6. View cart at `/userDashboard/cart`
7. Click **Buy Now** to place order

---

## 🌐 API

Products are fetched from [DummyJSON](https://dummyjson.com):

```
GET https://dummyjson.com/products         → all products
GET https://dummyjson.com/products/:id     → single product
```

## 👨‍💻 Author

Made with ❤️ using React
