// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = details
  // const euroItem = usdValue * 0.92
  // const euro = Math.round(euroItem, 2)

  return (
    <li className="each-row">
      <div className="coin-type" data-testid="loader">
        <img src={currencyLogo} alt={currencyName} className="coin-img" />
        <p>{currencyName}</p>
      </div>
      <div className="values">
        <p className="euro-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
