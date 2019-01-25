import React from 'react'

class Form extends React.Component {
  render() {
    return(
      <form>
        <input type="text" name="city"/>
        <input type="text" name="country"/>
      </form>
    )
  }
}

export default Form