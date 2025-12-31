import {Component} from 'react'
import Tab from '../Tab'
import './index.css'
import ItemCard from '../ItemCard'
import Header from '../Header'
class Restaurent extends Component {
  state = {
    menuList: [],
    itemList: [],
    title: '',

    selectedTab: 'Salads and Soup',
  }

  componentDidMount() {
    this.getItems()
  }

  getItems = async () => {
    const response = await fetch(
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
    )

    const data = await response.json()

    console.log(data)

    console.log(data[0].table_menu_list)
    const menuCategory = data[0].table_menu_list.map(e => ({
      menuCategoryItem: e.menu_category,
    }))
    const {selectedTab} = this.state

    console.log(selectedTab)
    const findItems = data[0].table_menu_list.filter(
      e => e.menu_category === selectedTab,
    )
    console.log(findItems)

    const itemsList = findItems[0].category_dishes

    console.log(itemsList)

    const camelItem = itemsList.map(e => ({
      dishId: e.dish_id,
      dishName: e.dish_name,
      dishPrice: e.dish_price,
      dishCurrency: e.dish_currency,
      dishCalories: e.dish_calories,
      dishAvailability: e.dish_Availability,
      dishDescription: e.dish_description,
      dishImage: e.dish_image,

      addonCat: e.addonCat,
    }))

    this.setState({
      menuList: menuCategory,
      itemList: camelItem,

      title: data[0].restaurant_name,
    })

    console.log(findItems[0].restaurant_name)
  }
  getFoods = id => {
    this.setState(
      {
        selectedTab: id,
      },
      this.getItems,
    )
  }

  render() {
    const {menuList, itemList, selectedTab, title} = this.state
    console.log(title)
    console.log(selectedTab)

    return (
      <div className="bg">
        <Header title={title} />
        <div>
          <hr className="br" />
          <ul className="tab-container">
            {menuList.map(e => (
              <Tab
                item={e}
                getFoods={this.getFoods}
                selectedTab={selectedTab}
              />
            ))}
          </ul>
          <hr className="br" />
        </div>

        <div className="food-container">
          <ul className="fluid-container">
            {itemList.map(e => (
              <ItemCard item={e} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Restaurent
