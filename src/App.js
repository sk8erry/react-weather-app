import React from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const apiKey = '41b267bdffde95a9a783cb9e23a9b0d7'

class App extends React.Component {
  getWeather = async () => {
    const apiCall = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22`)
  }

  render() {
    return(
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    )
  }
}

export default App