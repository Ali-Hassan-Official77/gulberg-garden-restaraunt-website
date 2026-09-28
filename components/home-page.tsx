"use client";

import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Clock3,
  Star,
  ChevronRight,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react";

import {
  site,
  products,
  categories,
  offers,
} from "@/lib/data";

import {
  SiteHeader,
  MobileNav,
} from "./site-header";

import { ProductCard } from "./product-card";

export function HomePage() {
  const safeProducts = Array.isArray(products)
    ? products
    : [];

  const safeCategories = Array.isArray(categories)
    ? categories
    : [];

  const safeOffers = Array.isArray(offers)
    ? offers
    : [];

  const popular = safeProducts.filter(
    (product) => product?.popular
  );

  const featuredProduct = safeProducts[0] || {
    id: "featured",
    name: "Chef’s Signature",
    price: 0,
    image: "/placeholder-food.jpg",
  };

  const heroTitle =
    site?.variant === "editorial"
      ? "A table worth slowing down for."
      : site?.variant === "coastal"
      ? "Straight from the coast to your table."
      : site?.variant === "cafe"
      ? "Good mornings start here."
      : site?.variant === "modern"
      ? "Built for big cravings."
      : "Food that feels like home.";

  const heroDescription =
    site?.variant === "cafe"
      ? "Specialty coffee, all-day brunch and bakery comfort in the heart of Islamabad."
      : "Freshly prepared food, honest portions and a local kitchen made for everyday cravings.";

  const location =
    site?.location || "Islamabad, Pakistan";

  const phone = site?.phone || "";

  const email =
    site?.email || "ahmedbilalakhan56@gulgarden.com";

  const siteName =
    site?.name || "The Royal Degh";

  return (
    <main className="site-page">
      <SiteHeader />

      {/* HERO */}
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-label">
            <span className="eyebrow">
              {site?.tag || "Freshly prepared"}
            </span>

            <span className="hero-label-dot">
              <Sparkles size={13} />
              Open today
            </span>
          </div>

          <h1>{heroTitle}</h1>

          <p>{heroDescription}</p>

          <div className="hero-actions">
            <Link
              href="/menu"
              className="primary-btn"
            >
              Explore menu
              <ArrowRight size={18} />
            </Link>

            {phone && (
              <a
                href={`tel:${phone}`}
                className="ghost-btn"
              >
                <Phone size={17} />
                Call {phone}
              </a>
            )}
          </div>

          <div className="hero-meta">
            <span>
              <Clock3 size={17} />
              20–35 min
            </span>

            <span>
              <MapPin size={17} />
              {location}
            </span>

            <span>
              <Star size={17} />
              4.9 local rating
            </span>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-image-wrap">
            {featuredProduct.image ? (
              <img
                src={featuredProduct.image}
                alt={
                  featuredProduct.name ||
                  "Featured dish"
                }
                className="hero-image"
                loading="eager"
              />
            ) : (
              <div className="hero-image-placeholder">
                <span>Freshly prepared</span>
              </div>
            )}
          </div>

          <div className="floating-card">
            <span className="floating-kicker">
              <span className="status-dot" />
              Today’s signature
            </span>

            <strong>
              {featuredProduct.name}
            </strong>

            {Number(featuredProduct.price) > 0 && (
              <span className="floating-price">
                Rs.{" "}
                {Number(
                  featuredProduct.price
                ).toLocaleString()}
              </span>
            )}

            <Link
              href="/menu"
              className="floating-link"
            >
              View dish
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
        </div>
      </section>

      {/* CATEGORIES */}
      {safeCategories.length > 0 && (
        <section className="category-area">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                Browse our menu
              </span>

              <h2>Choose your mood</h2>

              <p>
                From comforting classics to
                something a little more special.
              </p>
            </div>

            <Link
              href="/menu"
              className="section-link"
            >
              Full menu
              <ChevronRight size={17} />
            </Link>
          </div>

          <div className="category-grid">
            {safeCategories.map((category) => {
              if (!category?.id) {
                return null;
              }

              return (
                <Link
                  href={`/menu?category=${encodeURIComponent(
                    String(category.id)
                  )}`}
                  key={category.id}
                  className="category-card"
                >
                  <span className="category-icon">
                    {category.icon || "🍽️"}
                  </span>

                  <div className="category-content">
                    <b>
                      {category.name || "Menu"}
                    </b>

                    <small>
                      {category.note ||
                        "Freshly prepared favourites"}
                    </small>
                  </div>

                  <span className="category-arrow">
                    <ArrowRight size={17} />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* POPULAR PRODUCTS */}
      <section className="popular">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              Customer favourites
            </span>

            <h2>Order the classics</h2>

            <p>
              The dishes our customers come back
              for again and again.
            </p>
          </div>

          <Link
            href="/menu"
            className="section-link"
          >
            See everything
            <ChevronRight size={17} />
          </Link>
        </div>

        {popular.length > 0 ? (
          <div className="product-grid">
            {popular.map((product) => {
              if (!product?.id) {
                return null;
              }

              return (
                <ProductCard
                  key={product.id}
                  product={{
                    ...product,
                    badge:
                      product.badge ??
                      undefined,
                  }}
                />
              );
            })}
          </div>
        ) : safeProducts.length > 0 ? (
          <div className="product-grid">
            {safeProducts
              .slice(0, 4)
              .map((product) => {
                if (!product?.id) {
                  return null;
                }

                return (
                  <ProductCard
                    key={product.id}
                    product={{
                      ...product,
                      badge:
                        product.badge ??
                        undefined,
                    }}
                  />
                );
              })}
          </div>
        ) : (
          <div className="empty-products">
            <div className="empty-products-icon">
              🍽️
            </div>

            <h3>
              Fresh favourites are coming soon
            </h3>

            <p>
              Our menu is being prepared. Check
              back shortly for today’s selection.
            </p>

            <Link
              href="/menu"
              className="primary-btn"
            >
              Explore menu
              <ArrowRight size={17} />
            </Link>
          </div>
        )}
      </section>

      {/* OFFERS */}
      {safeOffers.length > 0 && (
        <section
          className="offer-section"
          id="offers"
        >
          <div className="offer-intro">
            <span className="eyebrow">
              This week
            </span>

            <h2>
              Good food. Better reasons to order.
            </h2>

            <p>
              Simple local deals, prepared fresh
              and updated for the week.
            </p>
          </div>

          <div className="offer-grid">
            {safeOffers.map((offer) => {
              if (!offer?.code) {
                return null;
              }

              return (
                <div
                  className="offer-card"
                  key={offer.code}
                >
                  <div className="offer-top">
                    <span>
                      {offer.label ||
                        "Special offer"}
                    </span>

                    <Sparkles size={17} />
                  </div>

                  <b>
                    {offer.title ||
                      "Special deal"}
                  </b>

                  <p>
                    {offer.sub ||
                      "Enjoy something delicious today."}
                  </p>

                  <div className="offer-code">
                    <span>Use code</span>
                    <code>{offer.code}</code>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* LOCATION / CONTACT */}
      <section className="map-section">
        <div className="map-copy">
          <span className="eyebrow">
            Find us
          </span>

          <h2>Come by or order in.</h2>

          <p className="map-description">
            We’re here for quick lunches, relaxed
            dinners, family meals and those cravings
            that simply cannot wait.
          </p>

          <div className="location-detail">
            <span className="location-icon">
              <MapPin size={19} />
            </span>

            <div>
              <small>Our location</small>
              <strong>{location}</strong>
            </div>
          </div>

          <div className="location-actions">
            {phone && (
              <a
                href={`tel:${phone}`}
                className="primary-btn"
              >
                <Phone size={17} />
                {phone}
              </a>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                className="email-link"
              >
                <Mail size={17} />
                {email}
              </a>
            )}
          </div>
        </div>

        <div className="map-frame">
          <iframe
            title={`${siteName} map`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              site?.map || location
            )}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="map-overlay-card">
            <span className="map-pin-small">
              <MapPin size={15} />
            </span>

            <div>
              <strong>{siteName}</strong>
              <small>{location}</small>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Link
              href="/"
              className="footer-logo"
              aria-label={`${siteName} home`}
            >
              <img
                src="/logo.svg"
                alt={siteName}
                width={170}
                height={48}
              />
            </Link>

            <p>
              Fresh food, friendly service and
              easy ordering — made for everyday
              moments and memorable meals.
            </p>
          </div>

          <div className="footer-column">
            <span className="footer-heading">
              Explore
            </span>

            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/account">
              Account
            </Link>
          </div>

          <div className="footer-column">
            <span className="footer-heading">
              Our menu
            </span>

            <Link href="/menu">
              Popular dishes
            </Link>

            <Link href="/menu?category=deals">
              Special offers
            </Link>

            <Link href="/menu?category=family">
              Family meals
            </Link>

            <Link href="/menu?category=drinks">
              Drinks
            </Link>
          </div>

          <div className="footer-column footer-contact">
            <span className="footer-heading">
              Contact
            </span>

            <div className="footer-contact-item">
              <MapPin size={17} />
              <span>{location}</span>
            </div>

            {phone && (
              <a
                href={`tel:${phone}`}
                className="footer-contact-item"
              >
                <Phone size={17} />
                <span>{phone}</span>
              </a>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                className="footer-contact-item"
              >
                <Mail size={17} />
                <span>{email}</span>
              </a>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()}{" "}
            {siteName}. All rights reserved.
          </span>

          <span className="footer-made">
            Freshly made <span>•</span> Locally loved
          </span>
        </div>
      </footer>

      <MobileNav />
    </main>
  );
}