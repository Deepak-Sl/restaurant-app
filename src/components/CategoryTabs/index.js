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
            key={cat.menuCategoryId}
            onClick={() => onCategoryClick(cat)}
            className={`category-button ${
              selectedCategory.menuCategoryId === cat.menuCategoryId
                ? 'active'
                : ''
            }`}
          >
            {cat.menuCategory}
          </button>
        ))}
      </div>
    )
  }
}

export default CategoryTabs
