<img width="1802" height="881" alt="Screenshot 2026-10-16 124552" src="https://github.com/user-attachments/assets/68878549-3199-4e90-9abd-94a0ec324601" /># 🌾 AgroAttach

**AgroAttach** is a full-stack marketplace where farmers can **buy and sell used agro-products** (tools, equipment, produce and more). Sellers can list products with images and prices, buyers can browse, compare prices and ratings, and place orders, all in one place.

---

## ✨ Features

### For Buyers
- Browse all products, **search** by name and filter by **category**
- View **product details**: images, price, rating and **seller details**
- Add products to **cart** and place orders
- Save and manage **delivery addresses**
- Track past purchases in **My Orders**
- Sign up / log in securely

### For Sellers
- Dedicated **Seller Dashboard**
- **Add products** with image upload (stored on Cloudinary)
- Set the **price** and description of each product
- Manage the list of your products
- View incoming **orders** and **buyer details**

### General
- Responsive home page with banners, categories, best sellers and newsletter
- Protected routes with separate **user** and **seller** authentication

---

## 📸 Screenshots

### Home Page
![Home Page]([Uploading Screenshot 2026-10-16 124552.png…]
)
The home page greets visitors with the tagline **"Harvest savings, cultivate sustainability, your trusted agro resale hub"**. It has a navigation bar (Home, All Products, Contact), a product search bar, a cart with item count, a Login button, and **Shop Now** / **Explore Deals** buttons.

> To show this image on GitHub, save your screenshot as `screenshots/home.png` in the project root. You can add more screenshots (products, cart, seller dashboard) the same way.

---

## 🛠️ Tech Stack

**Frontend**
- React (with Vite)
- React Router
- Context API for global state (`AppContext`)
- CSS

**Backend**
- Node.js + Express
- MongoDB (Mongoose models)
- Multer for file uploads
- Cloudinary for image storage
- Authentication middleware for users and sellers

---

## 📁 Project Structure

```
AgroAttach/
├── AgroAttach/                  # Frontend (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/              # Images, icons, assets.js
│   │   ├── components/          # Navbar, Footer, MainBanner, Categories,
│   │   │   │                    # BestSeller, ProductCard, NewsLetter, Login ...
│   │   │   └── Seller/          # Seller-specific components
│   │   ├── context/
│   │   │   └── AppContext.jsx   # Global app state
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── AllProducts.jsx
│   │   │   ├── ProductCategory.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── AddAddress.jsx
│   │   │   ├── MyOrders.jsx
│   │   │   └── seller/
│   │   │       ├── SellerLayout.jsx
│   │   │       ├── AddProducts.jsx
│   │   │       ├── ProductsList.jsx
│   │   │       └── Orders.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   └── package.json
│
└── server/                      # Backend (Node + Express)
    ├── configs/                 # cloudinary.js, db.js, multer.js
    ├── controllers/             # address, cart, order, product, seller, user
    ├── middlewares/             # authSeller.js, authUser.js
    ├── models/                  # Address, Order, Product, User
    ├── routes/
    ├── server.js
    └── package.json
```

---

## 🔐 Roles

| Role   | What they can do |
|--------|------------------|
| Buyer  | Browse products, view seller details and ratings, add to cart, place and track orders |
| Seller | Log in to the seller dashboard, upload product images, set prices, manage listings, view orders and buyer details |

---

## 🗺️ Roadmap

- [ ] Online payment integration
- [ ] Product reviews and ratings from verified buyers
- [ ] Search and advanced filters (price, location, condition)
- [ ] Chat between buyer and seller
- [ ] Multi-language support for farmers
