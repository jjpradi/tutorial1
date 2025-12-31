import './App.css'
import Header from './components/Header'
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom'
import Restaurent from './components/Restaurent'
import ItemContext from './context/ItemContext'
//write your code here

import {Component} from 'react'

class App extends Component {
  state = {count: 0}

  onAddCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onDecreaseCount = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {count} = this.state

    return (
      <ItemContext.Provider
        value={{
          count,
          onAddCount: this.onAddCount,
          onDecreaseCount: this.onDecreaseCount,
        }}
      >
        <BrowserRouter>
          <Route path="/" component={Restaurent} />
        </BrowserRouter>
      </ItemContext.Provider>
    )
  }
}

export default App
