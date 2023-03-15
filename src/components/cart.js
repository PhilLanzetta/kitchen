import React from "react"
import useStore from "../context/StoreContext"
import ProductRow from "./productRow"
import * as styles from "./cart.module.css"
import { HiOutlineXMark } from "react-icons/hi2"

const Cart = ({ toggleCart }) => {
  const { cart } = useStore()

  return (
    <section className={styles.container}>
      <article className={styles.heading}>
        <p>CART</p>
        <button onClick={toggleCart}>
          <HiOutlineXMark></HiOutlineXMark>
        </button>
      </article>
      {cart.length > 0 ? (
        cart.map((item, index) => <ProductRow key={index} item={item} />)
      ) : (
        <p>Your cart is empty.</p>
      )}
    </section>
  )
}

export default Cart
