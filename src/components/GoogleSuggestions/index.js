// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInputValue: ''}

  onChangeSearchInput = event => {
    this.setState({searchInputValue: event.target.value})
  }

  onChangeValue = suggestion => {
    const {searchInputValue} = this.state
    this.setState({searchInputValue: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInputValue} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion
        .toLowerCase()
        .includes(searchInputValue.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="container">
          <img
            className="google-icon"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="google-container">
            <img
              className="search-icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              className="input-box google-search-name"
              type="search"
              value={searchInputValue}
              onChange={this.onChangeSearchInput}
              placeholder="Search Google"
            />
            <ul className="ul-container">
              {searchResults.map(eachItem => (
                <SuggestionItem
                  onChangeValue={this.onChangeValue}
                  suggestionItem={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
