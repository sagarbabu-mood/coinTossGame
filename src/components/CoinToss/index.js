import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {toss: 0, heads: 0, tails: 0}

  updateState = () => {
    const randomNumber = Math.floor(Math.random() * 2)
    console.log(randomNumber)
    if (randomNumber === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
    this.setState({toss: randomNumber})
  }

  render() {
    const {toss, heads, tails} = this.state
    return (
      <>
        <div className="bg-container">
          <div className="coin-toss-container">
            <h1 className="heading">Coin Toss Game</h1>
            <p className="description">Heads (or) Tails</p>
            {toss === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                alt="toss result"
                className="image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                alt="toss result"
                className="image"
              />
            )}
            <button type="button" className="button" onClick={this.updateState}>
              Toss Coin
            </button>
            <div className="state-container">
              <p className="span">Total: {heads + tails}</p>
              <p className="span">Heads: {heads}</p>
              <p className="span">Tails: {tails}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CoinToss
