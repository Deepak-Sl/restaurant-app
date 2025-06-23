import React from 'react'
import DishCard from '../DishCard'
import './index.css'

class DishSection extends React.Component {
  render() {
    const {category, cart, updateItemCount} = this.props

    return (
      <div className="dish-section">
        <h2 className="section-title">{category.menu_category}</h2>
        <div className="dish-list">
          {category.category_dishes.map(dish => (
            <DishCard
              key={dish.dish_id}
              dish={dish}
              cart={cart}
              updateItemCount={updateItemCount}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default DishSection
