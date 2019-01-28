import React from 'react'

class Weather extends React.Component {
  render() {
    if (this.props.temperature) {
      return(
        <div className="weather__info">
          <p className="weather__key">
          Temperature: <span className="weather__value">{this.props.temperature}&deg;C</span>
          </p>
          <p className="weather__key">
            Location: <span className="weather__value">{this.props.city}, {this.props.country}</span>
          </p>
          <p className="weather__key">
            Humidity: <span className="weather__value">{this.props.humidity}</span>
          </p>
          <p className="weather__key">
            Conditions: <span className="weather__value">{this.props.description}</span>
          </p>
        </div>
      )
    } else {
      return(
        null
      )
    }
  }
}

export default Weather