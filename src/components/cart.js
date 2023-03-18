import React from "react"
import useStore from "../context/StoreContext"
import ProductRow from "./productRow"
import * as styles from "./cart.module.css"
import { HiOutlineXMark } from "react-icons/hi2"

const Cart = ({ toggleCart }) => {
  const { cart, checkout } = useStore()
  const formattedNum = num =>
    Number(num)
      .toFixed(2)
      .replace(/[.,]00$/, "")

  return (
    <section className={styles.container}>
      <article className={styles.heading}>
        <p>CART</p>
        <button onClick={toggleCart}>
          <HiOutlineXMark></HiOutlineXMark>
        </button>
      </article>
      <article>
        {cart.length > 0 ? (
          cart.map((item, index) => <ProductRow key={index} item={item} />)
        ) : (
          <p>Your cart is empty.</p>
        )}
      </article>
      <article className={styles.cartSummary}>
        <div className={styles.checkoutInfo}>
          <div>SUBTOTAL</div>
          <div>
            $
            {checkout.subtotalPrice
              ? formattedNum(checkout.subtotalPrice?.amount)
              : 0}
          </div>
        </div>
        <div className={styles.checkoutInfo}>
          <div>TAX</div>
          <div>
            ${checkout.totalTax ? formattedNum(checkout.totalTax?.amount) : 0}
          </div>
        </div>
        <div className={styles.checkoutInfo}>
          <div>TOTAL</div>
          <div>
            $
            {checkout.totalPrice
              ? formattedNum(checkout.totalPrice?.amount)
              : 0}
          </div>
        </div>
        <button
          disabled={cart.length === 0}
          onClick={() => window.open(checkout.webUrl)}
          className={styles.checkoutBtn}
        >
          CHECK OUT
        </button>
      </article>
    </section>
  )
}

export default Cart
