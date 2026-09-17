import React from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function Header() {
  const location = useLocation();
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-leaf">🌿</span>
        <span>Paradise Nursery</span>
      </Link>

      <nav className="nav-links">
        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/plants">
          Plants
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/cart">
          Cart
        </NavLink>
      </nav>

      <Link
        to="/cart"
        className="cart-button"
        aria-label={`Shopping cart with ${cartCount} items`}
        title="Shopping Cart"
      >
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartCount}</span>
      </Link>
    </header>
  );
}

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <section className="hero-card">
          <p className="eyebrow">BRING NATURE HOME</p>
          <h1>Paradise Nursery</h1>
          <p className="hero-text">
            Welcome to Paradise Nursery, your little corner of green happiness.
            We bring beautiful, easy-to-love houseplants to your home so you
            can create a calm, fresh and lively space every day.
          </p>
          <Link to="/plants" className="primary-button">
            Get Started
          </Link>
        </section>
      </div>
      <AboutUs />
    </main>
  );
}

export default function App() {
  const location = useLocation();
  const showHeader = location.pathname !== "/";

  return (
    <div className="app">
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}