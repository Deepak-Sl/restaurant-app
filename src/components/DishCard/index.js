import React from 'react'
import './index.css'

class DishCard extends React.Component {
  render() {
    const {dish, cart, updateItemCount} = this.props
    const count = cart[dish.dishId] || 0

    return (
      <div className="dish-card">
        <div className="dish-info">
          <div className="dish-header">
            <span
              className={`dish-dot-box ${
                dish.dishType === 1 ? 'veg-box' : 'non-veg-box'
              }`}
            >
              <span
                className={`dish-dot ${
                  dish.dishType === 1 ? 'veg' : 'non-veg'
                }`}
              >
                .
              </span>
            </span>
          </div>
          <h3>{dish.dishName}</h3>
          <div className="dish-row">
            <div>
              <p className="dish-price">{`${dish.dishCurrency} ${dish.dishPrice}`}</p>
              <p className="dish-desc">{dish.dishDescription}</p>
              <p>Nxt Cafe</p>
            </div>
            <div>
              <p className="dish-calories">{`${dish.dishCalories} calories`}</p>
            </div>
          </div>
          {dish.dishAvailability ? (
            <div className="quantity-control">
              <button
                type="button"
                onClick={() => updateItemCount(dish.dishId, -1)}
                disabled={count === 0}
              >
                -
              </button>
              <p>{count}</p>
              <button
                type="button"
                onClick={() => updateItemCount(dish.dishId, 1)}
              >
                +
              </button>
            </div>
          ) : (
            <p>{count}</p>
          )}
          {dish.addonCat?.length > 0 && (
            <p className="customization">Customizations available</p>
          )}
          {!dish.dishAvailability && (
            <p className="unavailable">Not available</p>
          )}
        </div>
        {dish.dishImage && (
          <img
            src={dish.dishImage}
            alt={dish.dishName}
            className="dish-image"
          />
        )}
      </div>
    )
  }
}

export default DishCard
