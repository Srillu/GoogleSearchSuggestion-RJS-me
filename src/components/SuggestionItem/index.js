// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, onChangeValue} = props
  const {suggestion} = suggestionItem

  const onChangeSuggestion = () => {
    onChangeValue(suggestion)
  }

  return (
    <li className="search-Items-list">
      <p className="item-name ">{suggestion}</p>
      <div>
        <img
          onClick={onChangeSuggestion}
          className="arrow-icon"
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </div>
    </li>
  )
}

export default SuggestionItem
