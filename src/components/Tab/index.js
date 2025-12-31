import './index.css'

const Tab = props => {
  const {item, getFoods, selectedTab} = props
  console.log(selectedTab)
  console.log(item.menuCategoryItem)
  const foodItems = () => {
    getFoods(item.menuCategoryItem)
  }

  return (
    <li
      className={selectedTab === item.menuCategoryItem ? 'selected' : 'none'}
      onClick={foodItems}
    >
      <p className="para">{item.menuCategoryItem}</p>
    </li>
  )
}

export default Tab
