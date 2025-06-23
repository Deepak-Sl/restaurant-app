import React from 'react'
import './index.css'

class DishCard extends React.Component {
  render() {
    const {dish, cart, updateItemCount} = this.props
    const count = cart[dish.dish_id] || 0

    return (
      <div className="dish-card">
        <div className="dish-info">
          <div className="dish-header">
            <span
              className={`dish-dot-box ${
                dish.dish_Type === 1 ? 'veg-box' : 'non-veg-box'
              }`}
            >
              <span
                className={`dish-dot ${
                  dish.dish_Type === 1 ? 'veg' : 'non-veg'
                }`}
              >
                .
              </span>
            </span>
            <h3 className="dish-name">{dish.dish_name}</h3>
          </div>
          <p className="dish-price">SAR {dish.dish_price}</p>
          <p className="dish-desc">{dish.dish_description}</p>
          <p className="dish-calories">{dish.dish_calories} calories</p>

          <div className="quantity-control">
            <button
              type="button"
              onClick={() => updateItemCount(dish.dish_id, -1)}
            >
              -
            </button>
            <span>{count}</span>
            <button
              type="button"
              onClick={() => updateItemCount(dish.dish_id, 1)}
            >
              +
            </button>
          </div>

          {dish.addonCat?.length > 0 && (
            <p className="customization">Customizations available</p>
          )}

          {!dish.dish_Availability && (
            <p className="unavailable">Not available</p>
          )}
        </div>

        {dish.dish_image && (
          <img
            src={dish.dish_image}
            alt={dish.dish_name}
            className="dish-image"
          />
        )}
      </div>
    )
  }
}

export default DishCard
