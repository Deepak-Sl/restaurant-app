import React from 'react'
import DishCard from '../DishCard'
import './index.css'

class DishSection extends React.Component {
  render() {
    const {category, cart, updateItemCount} = this.props

    return (
      <div className="dish-section">
        <h1 className="section-title">{category.menuCategory}</h1>
        <div className="dish-list">
          {category.categoryDishes.map(dish => (
            <DishCard
              key={dish.dishId}
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
