import React, { Component } from 'react'
import { Link } from 'react-router'

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
      <nav className='pleasework'>
        <ul className='pleasework'>
          <Link to='/MensNew' >
            <li>New</li>
          </Link>
          <Link to='/MensGraphicTees' >
            <li>Graphic Tees</li>
          </Link>
          <Link to='/MensTops' >
            <li>Tops</li>
          </Link>
          <Link to='/MensJackets' >
            <li>Jackets</li>
          </Link>
          <Link to='/MensBottoms' >
            <li>Bottoms</li>
          </Link>
          <Link to='/MensShoes' >
            <li>MensShoes</li>
          </Link>
          <Link to='/MensAccessories' >
            <li>MensAccessories</li>
          </Link>
          <Link to='/MensSale' >
            <li>Sale</li>
          </Link>
        </ul>
      </nav>
      <main id='apartmentlayout'>
        <div id='apartmentimg1'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170130_sgw_us_hero?scl=1&qlt=92' alt='updatedutility' height='334px' width='1165px' />
        </div>
        <h2>Mens Tops</h2>
        <div id='apartmentsale'>
          <Link to='/MensTopsone' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41425885_066_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensTopstwo' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41080342_080_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensTopsthree' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42158899_060_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensTopsfour' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42158725_012_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <Link to='/MensTopsfive' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42158717_012_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensTopssix' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42158709_012_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensTopsseven' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42158691_012_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensTopseight' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42158683_070_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <Link to='/MensTopsnine' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42158675_012_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensTopsten' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42158667_080_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensTopseleven' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42158659_060_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensTopstwelve' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42158642_041_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <Link to='/MensTopsthirteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42158634_070_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensTopsfourteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42158626_060_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensTopsfifteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42158618_012_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensTopssixteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42158600_070_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <Link to='/MensTopsseventeen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42158592_012_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensTopseighteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41097106_001_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensTopsnineteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42156232_001_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensTopstwenty' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42156224_060_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41051517_031_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41322116_022_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41015264_038_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40999294_068_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41728478_002_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41303876_001_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40924276_023_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41322413_045_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41964610_010_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41964347_060_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41972621_001_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41965518_060_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41294190_010_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41229535_001_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39671185_031_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42191874_010_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41994500_010_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41994344_001_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41228990_038_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41994146_010_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41993817_010_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41994468_010_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40513806_060_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42042051_031_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40985087_015_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41325945_001_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/35138320_018_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40624371_060_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <article id='daos'>
          <div id='yourcommunity'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/a_gw_en?scl=1&qlt=92' alt='community' height='75px' width='1165px' />
          </div>
          <div id='communitytwo'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_ig?scl=1&qlt=92' alt='num2' height='598px' width='1165px' />
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
