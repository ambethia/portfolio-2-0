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
        <h2>Mens New Arrivals</h2>
        <div id='apartmentsale'>
          <Link to='/MensNewArrivalone' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40562696_001_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensNewArrivaltwo' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41422874_001_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensNewArrivalthree' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41855784_106_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensNewArrivalfour' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40779910_010_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <Link to='/MensNewArrivalfive' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40551814_009_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensNewArrivalsix' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41973157_001_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensNewArrivalseven' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41970203_001_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensNewArrivaleight' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41953779_051_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <Link to='/MensNewArrivalnine' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42039776_072_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensNewArrivalten' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41298043_066_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensNewArrivaleleven' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41996232_106_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensNewArrivaltwelve' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40560914_004_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <Link to='/MensNewArrivalthirteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40560914_023_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensNewArrivalfourteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41389560_001_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensNewArrivalfifteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41889742_005_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensNewArrivalsixteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41889742_010_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <Link to='/MensNewArrivalseventeen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41970815_045_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensNewArrivaleighteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41855578_106_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensNewArrivalnineteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40555260_010_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensNewArrivaltwenty' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42042051_031_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41265398_067_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41265398_009_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41265398_023_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41265398_030_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40396145_011_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40624371_060_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39402334_106_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40633208_010_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40633208_061_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41045451_010_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40985087_015_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41855420_006_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40601155_031_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42330753_001_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42187179_010_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42132027_010_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41970864_010_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41887670_012_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41855784_106_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41728478_002_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40999294_068_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40779910_010_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40743775_072_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40364994_004_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
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
