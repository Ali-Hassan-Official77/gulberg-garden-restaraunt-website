'use client';

import Link from 'next/link';
import {
  Menu,
  ShoppingBag,
  Search,
  UserRound,
  X,
  Moon,
  Sun,
  Home,
  Heart,
} from 'lucide-react';
import { useState } from 'react';
import { useApp } from './providers';
import { site } from '@/lib/data';

export function Logo() {
  return (
    <Link
      href="/"
      className="brand"
      aria-label={`${site.name} home`}
    >
      <img
        src="/logo.svg"
        alt={site.name}
        className="brand-logo"
        width={170}
        height={48}
      />
    </Link>
  );
}

export function SiteHeader() {
  const { cartCount, darkMode, toggleDarkMode } = useApp();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">

        {/* Mobile menu button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Logo />

        {/* Desktop navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="/menu" className="nav-link">
            Menu
          </Link>

          <Link href="/#offers" className="nav-link">
            Offers
          </Link>

          <Link href="/orders" className="nav-link">
            Orders
          </Link>

          <Link href="/account" className="nav-link">
            Account
          </Link>
        </nav>

        {/* Header actions */}
        <div className="header-actions">

          <button
            type="button"
            onClick={toggleDarkMode}
            className="theme-btn"
            aria-label={
              darkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {darkMode ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          <Link
            href="/menu"
            className="round-btn"
            aria-label="Search menu"
          >
            <Search size={18} />
          </Link>

          <Link
            href="/cart"
            className="cart-btn"
            aria-label={`Shopping bag with ${cartCount} items`}
          >
            <ShoppingBag size={18} />

            {cartCount > 0 && (
              <b>{cartCount}</b>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="mobile-menu">

          <Link href="/" onClick={closeMenu}>
            <Home size={18} />
            <span>Home</span>
          </Link>

          <Link href="/menu" onClick={closeMenu}>
            <Menu size={18} />
            <span>Menu</span>
          </Link>

          <Link href="/#offers" onClick={closeMenu}>
            <Heart size={18} />
            <span>Offers</span>
          </Link>

          <Link href="/orders" onClick={closeMenu}>
            <ShoppingBag size={18} />
            <span>Orders</span>
          </Link>

          <Link href="/account" onClick={closeMenu}>
            <UserRound size={18} />
            <span>Account</span>
          </Link>
        </div>
      )}
    </header>
  );
}

export function MobileNav() {
  const { cartCount } = useApp();

  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">

      <Link href="/">
        <Home size={19} />
        <span>Home</span>
      </Link>

      <Link href="/menu">
        <Menu size={19} />
        <span>Menu</span>
      </Link>

      <Link href="/cart" className="mobile-cart-link">
        <span className="mobile-cart-icon">
          <ShoppingBag size={19} />

          {cartCount > 0 && (
            <b>{cartCount}</b>
          )}
        </span>

        <span>Bag</span>
      </Link>

      <Link href="/#offers">
        <Heart size={19} />
        <span>Offers</span>
      </Link>

      <Link href="/account">
        <UserRound size={19} />
        <span>Account</span>
      </Link>
    </nav>
  );
}

export function NotificationButton() {
  return null;
}