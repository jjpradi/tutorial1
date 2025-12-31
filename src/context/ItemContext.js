import React from 'react'
const ItemContext = React.createContext({
  count: 0,

  onDecreaseCount: () => {},
  onAddCount: () => {},
})

export default ItemContext
