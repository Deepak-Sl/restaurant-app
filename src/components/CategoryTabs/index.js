import React from 'react'
import './index.css'

class CategoryTabs extends React.Component {
  render() {
    const {categories, onCategoryClick, selectedCategory} = this.props
    return (
      <div className="category-tabs">
        {categories.map(cat => (
          <button
            type="button"
            key={cat.menu_category_id}
            onClick={() => onCategoryClick(cat)}
            className={`category-button ${
              selectedCategory.menu_category_id === cat.menu_category_id
                ? 'active'
                : ''
            }`}
          >
            {cat.menu_category}
          </button>
        ))}
      </div>
    )
  }
}

export default CategoryTabs
