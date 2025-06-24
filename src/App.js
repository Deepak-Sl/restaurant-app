import React from 'react'
import Navbar from './components/Navbar'
import CategoryTabs from './components/CategoryTabs'
import DishSection from './components/DishSection'
import './App.css'

class App extends React.Component {
  state = {
    menuData: [],
    cart: {},
    isLoading: true,
    selectedCategory: null,
  }

  componentDidMount() {
    this.getData()
  }

  transformDishes = dishes =>
    dishes.map(dish => ({
      dishId: dish.dish_id,
      dishName: dish.dish_name,
      dishPrice: dish.dish_price,
      dishCurrency: dish.dish_currency,
      dishDescription: dish.dish_description,
      dishCalories: dish.dish_calories,
      dishImage: dish.dish_image,
      dishType: dish.dish_Type,
      dishAvailability: dish.dish_Availability,
      addonCat: dish.addonCat,
    }))

  getData = async () => {
    const response = await fetch(
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
    )
    const data = await response.json()
    const menuList = data[0].table_menu_list.map(category => ({
      ...category,
      menuCategoryId: category.menu_category_id,
      menuCategory: category.menu_category,
      categoryDishes: this.transformDishes(category.category_dishes),
    }))

    this.setState({
      menuData: menuList,
      selectedCategory: menuList.find(
        cat => cat.menuCategory === 'Salads and Soup' || menuList[0],
      ),
      isLoading: false,
    })
  }

  handleCategoryClick = category => {
    this.setState({selectedCategory: category})
  }

  updateItemCount = (id, change) => {
    this.setState(prevState => {
      const cart = {...prevState.cart}
      const newCount = (cart[id] || 0) + change
      if (newCount <= 0) {
        cart[id] = 0
      } else cart[id] = newCount
      return {cart}
    })
  }

  render() {
    const {menuData, cart, isLoading, selectedCategory} = this.state
    return (
      <div>
        <Navbar cart={cart} />
        {!isLoading && (
          <CategoryTabs
            categories={menuData}
            onCategoryClick={this.handleCategoryClick}
            selectedCategory={selectedCategory}
          />
        )}
        <div className="content">
          {isLoading ? (
            <p className="loading">Loading menu...</p>
          ) : (
            <DishSection
              key={selectedCategory.menuCategoryId}
              category={selectedCategory}
              cart={cart}
              updateItemCount={this.updateItemCount}
            />
          )}
        </div>
      </div>
    )
  }
}

export default App
