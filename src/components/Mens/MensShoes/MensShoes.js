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
            <li>Shoes</li>
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
        <h2>Mens Shoes</h2>
        <div id='apartmentsale'>
          <Link to='/AdidasShoesone' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40312811_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/AdidasShoestwo' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/34764654_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/AdidasShoesthree' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/34764654_009_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/AdidasShoesfour' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/34764654_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <Link to='/AdidasShoesfive' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39841812_031_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/AdidasShoessix' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39793559_004_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/AdidasShoesseven' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39793559_009_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/AdidasShoeseight'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39793559_105_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <Link to='/AdidasShoesnine' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/33809104_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/AdidasShoesten' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40841744_095_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/AdidasShoeseleven' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40743775_050_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/AdidasShoestwelve' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40743775_072_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <Link to='/AdidasShoesthirteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40632945_061_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/AdidasShoesfourteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40396145_011_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/AdidasShoesfifteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38597449_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/AdidasShoessixteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38597449_040_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <Link to='/AdidasShoesseventeen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/30147854_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/AdidasShoeseighteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42107771_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/AdidasShoesnineteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40601155_031_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/AdidasShoestwenty' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40573248_004_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40560914_004_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40560914_023_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39825211_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39792676_041_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39792676_004_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/37469855_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/34764878_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41238429_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40841645_095_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40555260_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40333585_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40313397_016_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40313397_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40253049_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39849674_016_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39849674_061_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39508981_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38919932_060_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38919932_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38919932_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41883927_004_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/23401219_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41677865_095_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41487133_009_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40784118_034_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40633208_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40633208_061_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40562696_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40551814_080_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40551814_031_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40396368_095_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40315038_031_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
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
