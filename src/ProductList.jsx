import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const categories = [
  {
    name: "Air Purifying Plants",
    description: "Fresh, leafy plants that help create a cleaner-feeling room.",
    products: [
      {
        id: 1,
        name: "Snake Plant",
        price: 399,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 449,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 3,
        name: "Spider Plant",
        price: 299,
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 4,
        name: "ZZ Plant",
        price: 499,
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 5,
        name: "Areca Palm",
        price: 599,
        image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 6,
        name: "Rubber Plant",
        price: 549,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80",
      },
    ],
  },
  {
    name: "Succulents & Cacti",
    description: "Compact, low-maintenance plants for sunny corners and desks.",
    products: [
      {
        id: 7,
        name: "Aloe Vera",
        price: 249,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 8,
        name: "Jade Plant",
        price: 279,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 9,
        name: "Haworthia",
        price: 229,
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 10,
        name: "Echeveria",
        price: 199,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 11,
        name: "Moon Cactus",
        price: 219,
        image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 12,
        name: "String of Pearls",
        price: 349,
        image: "https://images.unsplash.com/photo-1597055181300-58b8d2f2e8a1?auto=format&fit=crop&w=700&q=80",
      },
    ],
  },
  {
    name: "Tropical & Decorative Plants",
    description: "Statement greenery to add character, color and texture.",
    products: [
      {
        id: 13,
        name: "Monstera Deliciosa",
        price: 699,
        image: "https://images.unsplash.com/photo-1614594577818-4e9e7d7f2a52?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 14,
        name: "Fiddle Leaf Fig",
        price: 799,
        image: "https://images.unsplash.com/photo-1597055181300-58b8d2f2e8a1?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 15,
        name: "Calathea",
        price: 599,
        image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 16,
        name: "Philodendron",
        price: 549,
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 17,
        name: "Boston Fern",
        price: 449,
        image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 18,
        name: "Chinese Money Plant",
        price: 399,
        image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=700&q=80",
      },
    ],
  },
];

function ProductCard({ product, isAdded, onAdd }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price.toFixed(2)}</p>
        <button
          type="button"
          className="add-button"
          disabled={isAdded}
          onClick={() => onAdd(product)}
        >
          {isAdded ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isInCart = (productId) =>
    cartItems.some((item) => item.id === productId);

  return (
    <main className="products-page">
      <section className="products-hero">
        <p className="eyebrow">OUR COLLECTION</p>
        <h1>Find your perfect houseplant</h1>
        <p>
          Browse our collection of fresh, beautiful plants and bring a little
          more green into your everyday space.
        </p>
        <div className="mini-cart-summary">
          🛒 {cartCount} {cartCount === 1 ? "plant" : "plants"} in cart
        </div>
      </section>

      <section className="category-list">
        {categories.map((category) => (
          <div className="category" key={category.name}>
            <div className="category-heading">
              <div>
                <p className="category-label">CATEGORY</p>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
            </div>

            <div className="product-grid">
              {category.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isAdded={isInCart(product.id)}
                  onAdd={(item) => dispatch(addToCart(item))}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}