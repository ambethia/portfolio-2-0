import React, { Component } from 'react'

class Sale extends Component {

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
    return <div id='sale'>
      <nav className='subnavbar'>
        <ul className='salesecondnav'>
          <li onMouseOver={() => this.showCategory('Womens Sale')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Womens Sale</a>
            <ul className={this.state.visibleCategory === 'Womens Sale' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Mens Sale')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Collections</a>
            <ul className={this.state.visibleCategory === 'Mens Sale' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Apartment Sale')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Apartment Sale</a>
            <ul className={this.state.visibleCategory === 'Apartment Sale' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Music + Tech Sale')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Music + Tech Sale</a>
            <ul className={this.state.visibleCategory === 'Music + Tech Sale' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Beauty Sale')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Beauty Sale</a>
            <ul className={this.state.visibleCategory === 'Beauty Sale' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Intimate Sale')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Intimate Sale</a>
            <ul className={this.state.visibleCategory === 'Intimate Sale' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
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
              <br />
              <li className='signups1'>Order Status</li>
              <li className='signups'>Orders & Payments</li>
              <li className='signups'>Shipping</li>
              <li className='signups'>Returns & Exchanges</li>
              <li className='signups'>FAQ</li>
              <li className='signups'>Gift Cards</li>
              <li className='signups'>Contact Us</li>
              <div className='column2'>
                <ul className='quick'>
                  <b id='q'>Quick Links</b>
                  <br />
                  <li className='signups1'>In-Store Pickup</li>
                  <li className='signups'>Brands</li>
                  <li className='signups'>Careers</li>
                  <li className='signups'>Shop SA</li>
                  <li className='signups'>Shop Europe</li>
                  <li className='signups'>Shop Canada</li>
                  <li className='signups'>Facebook</li>
                </ul>
              </div>
            </ul>
            <div className='offers'>
              <ul className='offers'>
                <b id='u'>Get Special Offers if you sign up here!</b>
                <br />
                <li className='signups1'>Twitter</li>
                <li className='signups'>Facebook</li>
                <li className='signups'>Youtube</li>
                <li className='signups'>Spotify</li>
                <li className='signups'>Soundcloud</li>
                <li className='signups'>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
        <ul className='rew'>
          <b id='uo'>Rewards</b>
          <br />
          <p>Click Here. Join Now.</p>
          <article className='b2'>
            <ul className='b5'>
              <form action='email'>
                <li className='b4'>Email: <input type='text' name='/' /><br /></li>
                <li className='b4'><input type='submit' value='Submit' /><br /></li>
                <li className='b4'><p className='b1'>By entering your email address, <br /> you agree to receive Kramer's offers,<br /> promotions, and other commercial messages. <br /> You may unsubscribe at any time.</p></li>
              </form>
            </ul>
          </article>
        </ul>
        <ul className='find'>
          <b id='ak'>Find A Store</b>
          <br />
          <p>Store Locator</p>
          <p>UO Spaces</p>
        </ul>
        <ul className='volunteer'>
          <b className='b7'>Volunteer</b>
          <p className='b6'>Click Here.</p>
        </ul>
        <ul className='apps'>
          <li className='b3'><img src='http://www.urbanoutfitters.com/urban/images/apple-app-store.jpg' height='27px' width='90px' /></li>
          <br />
          <li className='b3'><img src='http://www.urbanoutfitters.com/urban/images/google-app-store.png' height='27px' width='90px' /> </li>
          <br />
          <li className='b3'><img src='http://www.urbanoutfitters.com/urban/images/amazon-app-store.png' height='27px' width='90px' /> </li>
          <br />
        </ul>
      </footer>
    </div>
  }
}

export default Sale
