import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render () {
    return <div>
      <nav className='firstnav'>
        <ul className='first'>
          <li className='first'><Link to='/'>Kramer's</Link></li>
          <li><Link to='/Womens'>Womens </Link></li>
          <li><Link to='/Mens'>Mens</Link></li>
          {/* <li><Link to='/Apartment'>Apartment</Link></li>
          <li><Link to='/MusicTech'>Music + Tech</Link></li>
          <li><Link to='/Beauty'>Beauty</Link></li>
          <li><Link to='/Intimates'>Intimates</Link></li> */}
          <li><Link to='/Sale'>Sale</Link></li>
          <li><Link to='/Blog'>Blog</Link></li>
          {/* <li><i className='material-icons'>search</i> </li> */}
          <Link to='/Orders' ><i className='material-icons'>work</i></Link>
        </ul>
      </nav>
      {this.props.children}
    </div>
  }
};

export default Layout
