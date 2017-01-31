import React, { Component } from 'react'
// import { Link } from 'react-router'

class soinlove extends Component {

  constructor () {
    super()
    this.state = {
      visibleCategory: null
    }
  }

  showCategory (category) {
    this.setState({ visibleCategory: category })
  }

  hideCategory (category) {
    this.setState({ visibleCategory: null })
  }

  render () {
    return <div id='soinlove'>
      <p>123</p>
    </div>
  }

}

export default soinlove
