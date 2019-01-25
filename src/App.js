import React from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const apiKey = '41b267bdffde95a9a783cb9e23a9b0d7'

class App extends React.Component {
  getWeather = async () => {
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}&units=metric`)
    const data = await apiCall.json()
    console.log(data)
  }

  render() {
    return(
      <div>
        <Titles />
        <Form />
        <Weather />
        {this.getWeather}
      </div>
    )
  }
}

export default App