import {IoCartOutline} from 'react-icons/io5'

import ItemContext from '../../context/ItemContext'

import './index.css'

const Header = props => {
  const {title} = props

  return (
    <ItemContext.Consumer>
      {value => {
        const {count} = value

        localstorage.setItem('setCount', count)
        const newCount = localstorage.getItem('setCount')

        return (
          <div className="header">
            <h1 className="heading">{title}</h1>

            <div className="cart-header">
              <p className="cart-text">My Orders</p>

              <div className="header-count">
                <IoCartOutline size={50} />

                <p className="items-count">{newCount}</p>
              </div>
            </div>
          </div>
        )
      }}
    </ItemContext.Consumer>
  )
}

export default Header
