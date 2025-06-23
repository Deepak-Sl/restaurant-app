import React from 'react'
import './index.css'

class Navbar extends React.Component {
  render() {
    const {cart} = this.props
    const totalItems = Object.values(cart).reduce((a, b) => a + b, 0)

    return (
      <div className="navbar">
        <h1 className="navbar-title">UNI Resto Cafe</h1>
        <div className="navbar-cart">
          <span className="cart-icon">🛒</span>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </div>
      </div>
    )
  }
}

export default Navbar
