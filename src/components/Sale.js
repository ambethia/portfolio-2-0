import React, { Component } from 'react'

class Sale extends Component {

  render () {
    return <div id='sale'>
      <nav className='subnavbar'>
        <ul className='secondnav'>
          <li>Womens Sale</li>
          <li>Mens Sale</li>
          <li>Apartment Sale</li>
          <li>Music + Tech Sale</li>
          <li>Beauty Sale</li>
          <li>Intimate Sale</li>
        </ul>
      </nav>
      <main className='apartmentlayout'>
        <div id='apartmentimg1'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_HomeSale_us_sgw_ET?scl=1&qlt=92' alt='updatedutility' height='334px' width='1200px' />
        </div>
        <div id='womenssale'>
          <h2> Womens Sale </h2>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_1?scl=1&qlt=92' alt='thejumpsuit' height='505px' width='383px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_2?scl=1&qlt=92' alt='thejumpsuit' height='505px' width='383px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_3?scl=1&qlt=92' alt='thejumpsuit' height='505px' width='383px' />
        </div>
        <div id='menssale'>
          <h2> Mens Sale </h2>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_4?scl=1&qlt=92' alt='thejumpsuit' height='505px' width='383px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_5?scl=1&qlt=92' alt='thejumpsuit' height='505px' width='383px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_6?scl=1&qlt=92' alt='thejumpsuit' height='505px' width='383px' />
        </div>
        <div id='apartmentsale'>
          <h2> Apartment Sale </h2>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_7?scl=1&qlt=92' alt='thejumpsuit' height='505px' width='383px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_8?scl=1&qlt=92' alt='thejumpsuit' height='505px' width='383px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_9?scl=1&qlt=92' alt='thejumpsuit' height='505px' width='383px' />
        </div>
        <article id='daos'>
          <div id='yourcommunity'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/a_gw_en?scl=1&qlt=92' alt='community' height='75px' width='1200px' />
          </div>
          <div id='communitytwo'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_ig?scl=1&qlt=92' alt='num2' height='598px' width='1200px' />
          </div>
        </article>
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
        Made With &hearts; in St Pete
      </footer>
    </div>
  }
}

export default Sale
