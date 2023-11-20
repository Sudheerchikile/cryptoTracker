// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyData()
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  getCurrencyData = async () => {
    const response = await fetch(
      ' https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      id: each.id,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
    }))
    this.setState({currencyList: updatedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div className="app-container" data-testid="loader">
        {isLoading ? (
          this.renderLoader()
        ) : (
          <div className="bg-con">
            <div className="main-con">
              <h1 className="heading">Cryptocurrency Tracker</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                alt="cryptocurrency"
                className="main-img"
              />
              <div className="coins-section">
                <div className="currency-top-section">
                  <p>Coin Type</p>
                  <div className="nav-part2">
                    <p>USD</p>
                    <p>Euro</p>
                  </div>
                </div>
                <ul className="list-items">
                  {currencyList.map(each => (
                    <CryptocurrencyItem details={each} key={each.id} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
