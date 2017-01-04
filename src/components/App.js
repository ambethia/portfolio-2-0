import React, { Component } from 'react'

class App extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      location: '',
      bio: '',
      avatar: '',
      blog: []
    }
  }

  componentDidMount () {
    const URLGithub = 'https://api.github.com/users/chriskramer2020'
    window.fetch(URLGithub).then(res => res.json()).then((data) => {
      this.setState({
        name: data.name,
        location: data.location,
        bio: data.bio,
        avatar: data.avatar_url,
        blog: data.blog
      })
    })
  }

  render () {
    return <div>
      <canvas id='canvas' />
      <main className='content'>
        <nav>
          <ul className='first'>
            <li className='first'><a href='#'>Kramer's</a></li>
            <li><a href='#'>Women's</a></li>
            <li><a href='#'>Men's</a></li>
            <li><a href='#'>Apartment</a></li>
            <li><a href='#'>Gift's</a></li>
            <li><a href='#'>Music + Tech</a></li>
            <li><a href='#'>Beauty</a></li>
            <li><a href='#'>Intimates</a></li>
            <li><a href='#'>Sale</a></li>
            <li><a href='#'>Blog</a></li>
            <li><i className='material-icons'>search</i> </li>
          </ul>
        </nav>
        <article className='box'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161215_bogo_usgw_ET?scl=1&qlt=100' alt='box' height='196px' width='1179px' />
          <p> *Discounts only apply if you Purchase in the next 24 hours! </p>
        </article>
        <article className='discount'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_1?scl=1&qlt=92' alt='discounts' height='196px' width='1179px' />
        </article>
        <div className='model'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_3?scl=1&qlt=92' alt='cloth' height='717px' width='585px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_2?scl=1&qlt=92' alt='model' height='717px' width='585px' />
        </div>
        <div className='gift'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_4?scl=1&qlt=92' alt='gift' height='536px' width='1180px' />
        </div>
        <div className='apartment'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161220_MT_hp_d_ET?scl=1&qlt=92' alt='apartment' height='717px' width='585px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_5?scl=1&qlt=92' alt='tech' height='717px' width='585px' />
        </div>
        <div className='others'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_7?scl=1&qlt=92' alt='beauty' height='561px' width='386px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_8_v1?scl=1&qlt=92' alt='intimates' height='561px' width='386px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_9?scl=1&qlt=92' alt='blog' height='561px' width='386px' />
        </div>
        <div className='rewards'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_10?scl=1&qlt=92' alt='rewards' height='153px' width='1184px' />
        </div>
        <div className='community'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/160912_uocomm_hp_us?scl=1&qlt=92' alt='community' height='75px' width='1184px' />
        </div>
        <div className='footerimg'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_ig?scl=1&qlt=92' alt='footerimg' height='597px' width='1184px' />
        </div>
      </main>
      <footer>
        <div className='getitby'>
          <b>GET IT BY 12/31 - Choose EXPRESS Shipping By 1 PM ET on 12/29</b>
        </div>
        <div className='justify'>
          <div className='column1'>
            <ul className='help'>
              <b>Help</b>
              <li className='signup'>Order Status</li>
              <li>Orders & Payments</li>
              <li>Shipping</li>
              <li>Returns & Exchanges</li>
              <li>FAQ</li>
              <li>Gift Cards</li>
              <li>Contact Us</li>
              <div className='column2'>
                <ul className='quick'>
                  <b>Quick Links</b>
                  <li className='signup'>In-Store Pickup</li>
                  <li>Brands</li>
                  <li>Careers</li>
                  <li>Shop SA</li>
                  <li>Shop Europe</li>
                  <li>Shop Canada</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </ul>
            <div className='offers'>
              <ul className='offers'>
                <b className='moveup'>Get Special Offers if you sign up here!</b>
                <li className='signups'>Twitter</li>
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Spotify</li>
                <li>Soundcloud</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
        <ul className='apps'>
          <li>App Store</li>
          <li>Google Play</li>
          <li>Amazon</li>
        </ul>
        Made With &hearts; in {this.state.location}
      </footer>
    </div>
  }
};

export default App
