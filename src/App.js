import React from 'react'
import Navbar from './components/Navbar/index'
import CategoryTabs from './components/CategoryTabs/index'
import DishSection from './components/DishSection/index'
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

  getData = async () => {
    const response = await fetch(
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
    )
    const data = await response.json()
    console.log(data[0].table_menu_list)

    this.setState({
      menuData: data[0].table_menu_list,
      selectedCategory: data[0].table_menu_list[0],
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
      if (newCount <= 0) delete cart[id]
      else cart[id] = newCount
      return {cart}
    })
  }

  render() {
    const {menuData, cart, isLoading, selectedCategory} = this.state
    return (
      <div>
        <Navbar cart={cart} />
        <CategoryTabs
          categories={menuData}
          onCategoryClick={this.handleCategoryClick}
          selectedCategory={selectedCategory}
        />
        <div className="content">
          {isLoading ? (
            <p className="loading">Loading menu...</p>
          ) : (
            <DishSection
              key={selectedCategory.menu_category_id}
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
