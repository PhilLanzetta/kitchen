import React, { useState } from "react"
import * as styles from "./emailForm.module.css"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const EmailForm = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleChange = e => {
    setEmail(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        email,
      }),
    })
      .then(() => {
        setMessage("Thank you!")
      })
      .catch(error => {
        setMessage(error)
        setTimeout(() => setMessage(""), 3000)
      })
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out if you’re human:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      {message && <div className={styles.message}>{message}</div>}
      <input
        type="email"
        name="email"
        onChange={handleChange}
        required
        className={styles.emailInput}
        placeholder="Email Address"
      />
      <input type="submit" value="Submit" className={styles.emailSubmit} />
    </form>
  )
}

export default EmailForm
