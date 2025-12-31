import './index.css'
import {Img} from './styledComponents'
import {Component} from 'react'
import ItemContext from '../../context/ItemContext'

class ItemCard extends Component {
  state = {isVeg: false, isAvailable: false, itemCount: 0, isAddOn: false}
  componentDidMount() {
    if (
      this.props.item.dishDescription
        .toLowerCase()
        .includes('veg' || 'leaf' || 'spinach')
    ) {
      this.setState({
        isVeg: true,
      })
    }

    if (this.props.item.dishAvailability) {
      this.setState({
        isAvailable: true,
      })
    }
    if (this.props.item.addonCat.length > 0) {
      this.setState({
        isAddOn: true,
      })
    }
  }

  render() {
    const {
      dishName,
      dishImage,
      dishCurrency,
      dishPrice,
      dishAvailablility,
      dishCalories,
      dishDescription,
      addonCat,
    } = this.props.item

    const {isVeg, isAvailable, isAddOn, itemCount} = this.state

    console.log(dishDescription)

    return (
      <ItemContext.Consumer>
        {value => {
          const {count, onDecreaseCount, onAddCount} = value

          const decreaseCount = () => {
            this.setState(prevState => ({
              itemCount: prevState.itemCount - 1,
            }))

            decreaseTotal()
          }

          const decreaseTotal = () => {
            const {itemCount} = this.state
            onDecreaseCount(itemCount)
          }

          const addCount = () => {
            this.setState(prevState => ({
              itemCount: prevState.itemCount + 1,
            }))

            addTotal()
          }

          const addTotal = () => {
            const {itemCount} = this.state
            onAddCount(itemCount)
          }

          return (
            <li className="item-card">
              <div className="dish-info">
                <div className={isVeg ? 'veg-cont' : 'non-cont'}>
                  <p className={isVeg ? 'veg' : 'non'}></p>
                </div>

                <div>
                  {' '}
                  <h1>{dishName}</h1>
                  <h3>
                    {dishCurrency} {dishPrice}
                  </h3>
                  <p>{dishDescription}</p>
                  {isAvailable ? (
                    <div className="item-count-button">
                      <button className="button" onClick={decreaseCount}>
                        {' '}
                        -{' '}
                      </button>
                      <p>{itemCount}</p>

                      <button className="button" onClick={addCount}>
                        {' '}
                        +{' '}
                      </button>
                    </div>
                  ) : (
                    <p className="not-available">Not available</p>
                  )}
                  <p>{isAddOn ? <p>Customization available</p> : null}</p>
                </div>
              </div>{' '}
              <div>
                <p className="primary">
                  {dishCalories} <br />
                  Calories
                </p>
              </div>
              <Img className="dish-img" src={dishImage} />
            </li>
          )
        }}
      </ItemContext.Consumer>
    )
  }
}

export default ItemCard
