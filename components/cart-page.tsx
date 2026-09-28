'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  Trash2,
} from 'lucide-react';

import { useApp } from './providers';
import { SiteHeader, MobileNav } from './site-header';

export function CartPage() {
  const {
    cart,
    subtotal,
    setQuantity,
    removeFromCart,
  } = useApp();

  const delivery = subtotal >= 1500 ? 0 : 199;
  const discount =
    subtotal >= 1500 ? Math.round(subtotal * 0.15) : 0;

  const total = subtotal + delivery - discount;

  return (
    <main>
      <SiteHeader />

      <div className="cart-page">
        <Link href="/menu" className="back">
          <ArrowLeft />
          Continue shopping
        </Link>

        <div className="page-title">
          <span className="eyebrow">Your order</span>
          <h1>Shopping bag</h1>
        </div>

        {!cart.length ? (
          <div className="empty-state">
            <h2>Your bag is waiting.</h2>

            <p>
              Pick something delicious from the menu.
            </p>

            <Link href="/menu" className="primary-btn">
              <span>Browse menu</span>
              <ArrowRight />
            </Link>
          </div>
        ) : (
          <div className="cart-layout">

            <div className="cart-items">
              {cart.map((i) => (
                <div className="cart-item" key={i.id}>
                  <img
                    src={i.image}
                    alt={i.name}
                  />

                  <div>
                    <Link href={`/product/${i.slug}`}>
                      <h3>{i.name}</h3>
                    </Link>

                    <p>
                      Rs. {i.price.toLocaleString()} each
                    </p>

                    <div className="qty">
                      <button
                        type="button"
                        onClick={() =>
                          setQuantity(
                            i.id,
                            Math.max(1, i.quantity - 1)
                          )
                        }
                      >
                        <Minus />
                      </button>

                      <b>{i.quantity}</b>

                      <button
                        type="button"
                        onClick={() =>
                          setQuantity(
                            i.id,
                            i.quantity + 1
                          )
                        }
                      >
                        <Plus />
                      </button>
                    </div>
                  </div>

                  <strong>
                    Rs.{' '}
                    {(i.price * i.quantity).toLocaleString()}
                  </strong>

                  <button
                    type="button"
                    className="remove"
                    onClick={() =>
                      removeFromCart(i.id)
                    }
                  >
                    <Trash2 />
                  </button>
                </div>
              ))}
            </div>

            <aside className="summary">
              <span className="eyebrow">
                Summary
              </span>

              <h2>Order total</h2>

              <div>
                <span>Subtotal</span>
                <b>
                  Rs. {subtotal.toLocaleString()}
                </b>
              </div>

              <div>
                <span>Delivery</span>
                <b>
                  {delivery ? 'Rs. 199' : 'FREE'}
                </b>
              </div>

              {discount > 0 && (
                <div>
                  <span>15% discount</span>
                  <b>
                    − Rs. {discount.toLocaleString()}
                  </b>
                </div>
              )}

              <hr />

              <div className="total">
                <span>Total</span>
                <b>
                  Rs. {total.toLocaleString()}
                </b>
              </div>

              <Link
                href="/checkout"
                className="checkout-button"
              >
                <span>Checkout</span>
                <ArrowRight />
              </Link>
            </aside>
          </div>
        )}
      </div>

      <MobileNav />
    </main>
  );
}