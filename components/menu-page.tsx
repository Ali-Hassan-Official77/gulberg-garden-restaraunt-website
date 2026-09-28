"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import {
  useEffect,
  useState,
} from "react";

import {
  products,
  categories,
  site,
} from "@/lib/data";

import {
  SiteHeader,
  MobileNav,
} from "./site-header";

import { ProductCard } from "./product-card";

export function MenuPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [isInitialized, setIsInitialized] =
    useState(false);

  /*
   * Read category from the URL after the
   * client has mounted.
   *
   * Example:
   * /menu?category=drinks
   */
  useEffect(() => {
    try {
      const params = new URLSearchParams(
        window.location.search
      );

      const urlCategory =
        params.get("category");

      if (!urlCategory) {
        setCat("all");
        setIsInitialized(true);
        return;
      }

      const categoryExists =
        categories.some(
          (category) =>
            String(category.id).toLowerCase() ===
            urlCategory.toLowerCase()
        );

      setCat(
        categoryExists
          ? urlCategory
          : "all"
      );
    } catch {
      setCat("all");
    } finally {
      setIsInitialized(true);
    }
  }, []);

  const searchQuery =
    q.trim().toLowerCase();

  const filtered = products.filter(
    (product) => {
      const matchesSearch =
        !searchQuery ||
        `${product.name} ${product.description}`
          .toLowerCase()
          .includes(searchQuery);

      if (cat === "all") {
        return matchesSearch;
      }

      const selectedCategory =
        categories.find(
          (category) =>
            String(category.id).toLowerCase() ===
            String(cat).toLowerCase()
        );

      if (!selectedCategory) {
        return matchesSearch;
      }

      const productCategory =
        String(
          product.category || ""
        ).toLowerCase();

      const categoryId =
        String(
          selectedCategory.id || ""
        ).toLowerCase();

      const categoryName =
        String(
          selectedCategory.name || ""
        ).toLowerCase();

      const matchesCategory =
        productCategory === categoryId ||
        productCategory === categoryName ||
        productCategory.includes(
          categoryId
        ) ||
        productCategory.includes(
          categoryName
        ) ||
        categoryName.includes(
          productCategory
        );

      return (
        matchesCategory &&
        matchesSearch
      );
    }
  );

  const clearFilters = () => {
    setQ("");
    setCat("all");

    /*
     * Also remove category from URL so the
     * browser state and UI stay synchronized.
     */
    try {
      const url = new URL(
        window.location.href
      );

      url.searchParams.delete("category");

      window.history.replaceState(
        {},
        "",
        url.toString()
      );
    } catch {
      // Ignore URL update errors.
    }
  };

  const handleCategoryChange = (
    categoryId: string
  ) => {
    setCat(categoryId);

    try {
      const url = new URL(
        window.location.href
      );

      if (categoryId === "all") {
        url.searchParams.delete(
          "category"
        );
      } else {
        url.searchParams.set(
          "category",
          categoryId
        );
      }

      window.history.replaceState(
        {},
        "",
        url.toString()
      );
    } catch {
      // UI filtering still works even if
      // browser URL update fails.
    }
  };

  return (
    <main>
      <SiteHeader />

      <div className="page-wrap">
        <div className="page-title">
          <span className="eyebrow">
            {site.name}
          </span>

          <h1>The full menu</h1>

          <p>
            Everything is prepared to order
            from our local kitchen.
          </p>
        </div>

        <div className="menu-tools">
          <div className="search-box">
            <Search size={20} />

            <input
              type="search"
              value={q}
              onChange={(event) =>
                setQ(event.target.value)
              }
              placeholder="Search dishes, drinks, desserts..."
              aria-label="Search menu"
            />
          </div>

          <div className="chips">
            <button
              type="button"
              className={
                cat === "all"
                  ? "active"
                  : ""
              }
              onClick={() =>
                handleCategoryChange(
                  "all"
                )
              }
            >
              All
            </button>

            {categories.map(
              (category) => (
                <button
                  type="button"
                  className={
                    cat ===
                    category.id
                      ? "active"
                      : ""
                  }
                  key={category.id}
                  onClick={() =>
                    handleCategoryChange(
                      category.id
                    )
                  }
                >
                  {category.name}
                </button>
              )
            )}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="product-grid">
            {filtered.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={{
                    ...product,
                    badge:
                      product.badge ??
                      undefined,
                  }}
                />
              )
            )}
          </div>
        ) : (
          <div className="empty-state">
            <Search size={42} />

            <h2>
              No dishes found
            </h2>

            <p>
              Try another search or
              choose a different
              category.
            </p>

            {(q ||
              cat !== "all") && (
              <button
                type="button"
                className="primary-btn"
                onClick={
                  clearFilters
                }
              >
                View all dishes
              </button>
            )}
          </div>
        )}

        {!isInitialized && (
          /*
           * Intentionally subtle. It prevents
           * any visual confusion while the URL
           * category is being read.
           */
          <span
            aria-hidden="true"
            style={{
              display: "none",
            }}
          />
        )}
      </div>

      <MobileNav />
    </main>
  );
}