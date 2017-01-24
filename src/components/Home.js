import React, { Component } from 'react'
// import { Link } from 'react-router'

class Home extends Component {

  render () {
    return <div>
      <div id='snow' />
      <main className='content'>
        <article className='box'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_HomeSale_us_ET?scl=1&qlt=92' alt='box' height='468px' width='1180px' />
          <p> *Discounts only apply if you Purchase in the next 24 hours! </p>
        </article>
        <article className='discount'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_1?scl=1&qlt=92' alt='discounts' height='196px' width='1180px' />
        </article>
        <div className='model'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_hpgw_us_1?scl=1&qlt=92' alt='cloth' height='717px' width='585px' />
          <div>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_hpgw_us_2?scl=1&qlt=92' alt='model' height='717px' width='585px' />
          </div>
        </div>
        <div className='gift'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_hpgw_us_3?scl=1&qlt=92' alt='gift' height='326px' width='1180px' />
        </div>
        <div className='apartment'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161220_MT_hp_d_ET?scl=1&qlt=92' alt='apartment' height='717px' width='585px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_5?scl=1&qlt=92' alt='tech' height='717px' width='585px' />
        </div>
        <div className='others'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_hpgw_us_5?scl=1&qlt=92' alt='beauty' height='561px' width='385px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_hpgw_us_6?scl=1&qlt=92' alt='intimates' height='561px' width='385px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_hpgw_us_7?scl=1&qlt=92' alt='blog' height='561px' width='385px' />
        </div>
        <div className='rewards'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_10?scl=1&qlt=92' alt='rewards' height='153px' width='1180px' />
        </div>
        <div className='community'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/160912_uocomm_hp_us?scl=1&qlt=92' alt='community' height='75px' width='1180px' />
        </div>
        <div className='footerimg'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_hpgw_us_ig?scl=1&qlt=92' alt='footerimg' height='597px' width='1180px' />
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
                <b id='u'>Get Special Offers if you sign up here!</b>
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
        Made With &hearts; in St Pete
      </footer>
    </div>
  }
};

export default Home
