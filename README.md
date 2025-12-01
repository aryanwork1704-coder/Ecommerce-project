# 🛒 E-Commerce Full Stack Project

A modern, full-stack e-commerce application built with **React + Vite** on the frontend and **Node.js + Express** on the backend. This project demonstrates essential e-commerce functionality including product browsing, shopping cart management, checkout, and order tracking.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)

---

## ✨ Features

### Frontend
- 🎯 **Product Browsing**: Browse all products with images, ratings, and prices
- 🛒 **Shopping Cart**: Add/remove items, update quantities, and view cart summary
- 💳 **Checkout**: Select delivery options and review order before placing
- 📦 **Order History**: View all past orders with product details and delivery dates
- 📍 **Order Tracking**: Track package delivery status
- 🔍 **Search** (UI ready, backend search available)
- 📱 **Responsive Design**: Mobile-friendly interface

### Backend
- 🔄 **RESTful API**: Full CRUD operations for products, cart, orders, and deliveries
- 💾 **Database Flexibility**: SQLite for development, MySQL/PostgreSQL for production
- 🔐 **CORS Support**: Secure cross-origin requests
- 📊 **Payment Summary**: Automatic calculation of totals with tax
- 🔄 **Smart Cart Management**: Quantity aggregation and delivery option selection

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework with hooks
- **Vite 6** - Next-generation build tool
- **React Router v7** - Client-side routing
- **Axios** - HTTP client for API calls
- **Day.js** - Date formatting and manipulation
- **CSS** - Component-scoped styling

### Backend
- **Node.js** - JavaScript runtime
- **Express 4** - Web framework
- **Sequelize 6** - ORM for database operations
- **SQLite / MySQL / PostgreSQL** - Database options
- **CORS** - Cross-Origin Resource Sharing
- **Nodemon** - Development auto-reload

### Dev Tools
- **ESLint** - Code linting
- **Vitest** - Unit testing
- **Testing Library** - React component testing

---

## 📁 Project Structure

```
React-Project/
├── ecommerce-backend/               # Node.js + Express API
│   ├── models/                      # Sequelize models
│   │   ├── Product.js
│   │   ├── CartItem.js
│   │   ├── Order.js
│   │   ├── DeliveryOption.js
│   │   └── index.js
│   ├── routes/                      # API endpoints
│   │   ├── products.js
│   │   ├── cartItems.js
│   │   ├── orders.js
│   │   ├── deliveryOptions.js
│   │   ├── paymentSummary.js
│   │   └── reset.js
│   ├── defaultData/                 # Mock data for initialization
│   ├── images/                      # Product images
│   ├── server.js                    # Express server entry point
│   ├── package.json
│   └── .env.example                 # Environment variables template
│
└── ecommerce-project/               # React + Vite frontend
    ├── src/
    │   ├── pages/
    │   │   ├── home/
    │   │   │   ├── HomePage.jsx
    │   │   │   ├── Product.jsx
    │   │   │   ├── ProductsGrid.jsx
    │   │   │   └── HomePage.css
    │   │   ├── CheckoutPage.jsx
    │   │   ├── OrdersPage.jsx
    │   │   ├── TrackingPage.jsx
    │   │   └── *.css
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   └── header.css
    │   ├── utils/
    │   │   └── money.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── App.css
    │   └── index.css
    ├── public/
    │   └── images/                  # Logos, icons, ratings
    ├── package.json
    ├── vite.config.js
    └── index.html
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### Backend Setup

1. **Navigate to the backend directory:**
   ```powershell
   cd ecommerce-backend
   ```

2. **Install dependencies:**
   ```powershell
   npm install
   ```

3. **Create a `.env` file** (optional, for production database):
   ```env
   # For MySQL/PostgreSQL on AWS RDS
   RDS_HOSTNAME=your-db-host
   RDS_USERNAME=your-db-user
   RDS_PASSWORD=your-db-password
   RDS_DB_NAME=your-db-name
   RDS_PORT=3306
   DB_TYPE=mysql
   PORT=3000
   ```
   - **Leave blank to use SQLite locally** (recommended for development)

4. **Start the backend server:**
   ```powershell
   npm run dev
   ```
   - Uses **Nodemon** for auto-reload
   - Server runs on `http://localhost:3000`

### Frontend Setup

1. **Navigate to the frontend directory** (in a new terminal):
   ```powershell
   cd ecommerce-project
   ```

2. **Install dependencies:**
   ```powershell
   npm install
   ```

3. **Start the development server:**
   ```powershell
   npm run dev
   ```
   - Vite server runs on `http://localhost:5173` (or next available port)
   - Hot Module Replacement (HMR) enabled for instant updates

### Running the Project

**Option 1: Run Both Servers Locally**
- Terminal 1: `cd ecommerce-backend && npm run dev`
- Terminal 2: `cd ecommerce-project && npm run dev`
- Open browser to `http://localhost:5173`

**Option 2: Build Frontend for Production**
```powershell
cd ecommerce-project
npm run build
# Built files go to dist/
```

The backend will serve the built React app from the `dist/` folder when deployed.

---

## 🔌 API Endpoints

All endpoints are prefixed with `/api`

### Products
- `GET /api/products` - Fetch all products
- `GET /api/products?search=query` - Search products by name or keywords

### Cart Items
- `GET /api/cart-items` - Fetch cart items (add `?expand=product` for full product details)
- `POST /api/cart-items` - Add item to cart
  ```json
  { "productId": "uuid", "quantity": 2 }
  ```
- `PUT /api/cart-items/:productId` - Update quantity or delivery option
  ```json
  { "quantity": 3, "deliveryOptionId": "1" }
  ```
- `DELETE /api/cart-items/:productId` - Remove item from cart

### Orders
- `GET /api/orders` - Fetch all orders (add `?expand=products` for details)
- `GET /api/orders/:orderId` - Fetch single order
- `POST /api/orders` - Create order from cart (clears cart after)

### Delivery Options
- `GET /api/delivery-options` - Fetch all shipping options

### Payment Summary
- `GET /api/payment-summary` - Calculate order totals (items, shipping, tax)

### Admin
- `POST /api/reset` - Reset database to default data (development only)

---

## 📖 Usage

### Adding a Product to Cart
1. Browse products on the home page
2. Select quantity (1-10)
3. Click "Add to Cart"
4. Cart count updates in header

### Checking Out
1. Click "Cart" in header → goes to checkout page
2. Review items and select delivery options
3. View payment summary (automatically calculated)
4. Click "Place your order"
5. Redirected to order history page

### Viewing Orders
1. Click "Orders" in header
2. View all past orders with delivery dates
3. Click "Track package" to view shipment status

---

## 🔧 Development Commands

### Backend
```powershell
npm run dev          # Start with Nodemon (auto-reload)
npm start            # Start production server
npm run zip          # Create archive of project files
```

### Frontend
```powershell
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

---

## 🌐 Deployment

### Backend Deployment (e.g., AWS, Heroku)
1. Set `RDS_*` environment variables for your database
2. Deploy `ecommerce-backend` folder
3. Build frontend and move `dist/` into backend root
4. Start backend server (it serves the React app)

### Frontend Deployment (e.g., Vercel, Netlify)
1. Build: `npm run build`
2. Deploy the `dist/` folder
3. Ensure API calls point to your backend URL (configure in `vite.config.js`)

---

## 📝 Notes

- **Default Data**: Database auto-loads sample products and delivery options on first run
- **Database Persistence**: SQLite saves to `database.sqlite` file
- **CORS**: Enabled for `localhost:5173` and other origins (configure in `server.js`)
- **Tax**: 10% tax automatically added to all orders
- **Search**: Backend filters products by name and keywords (case-insensitive)

---

## 📄 License

This project is open source and available for educational purposes.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📧 Questions?

If you have questions or issues, feel free to open a GitHub issue or contact the repository maintainer.

**Happy coding! 🎉**
