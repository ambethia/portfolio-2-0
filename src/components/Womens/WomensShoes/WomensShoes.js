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
          <Link to='/WomensCollections' >
            <li>Collections</li>
          </Link>
          <Link to='/WomensNew' >
            <li>New</li>
          </Link>
          <Link to='/WomensDressesRompers' >
            <li>Dresses + Rompers</li>
          </Link>
          <Link to='/WomensTops' >
            <li>Tops</li>
          </Link>
          <Link to='/WomensJackets' >
            <li>Jackets</li>
          </Link>
          <Link to='/WomensBottoms' >
            <li>Bottoms</li>
          </Link>
          <Link to='/Intimates' >
            <li>Intimates</li>
          </Link>
          <Link to='/WomensSwim' >
            <li>Swim</li>
          </Link>
          <Link to='/WomensVintage' >
            <li>Vintage</li>
          </Link>
          <Link to='/Beauty' >
            <li>Beauty</li>
          </Link>
          <Link to='/WomensAccessories' >
            <li>Accessories</li>
          </Link>
          <Link to='/WomensShoes' >
            <li>Shoes</li>
          </Link>
          <Link to='/WomensBrands' >
            <li>Brands</li>
          </Link>
          <Link to='/WomensSale' >
            <li>Sale</li>
          </Link>
        </ul>
      </nav>
      <main id='apartmentlayout'>
        <div id='apartmentimg1'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170203_25dress_ca_banner_A?scl=1&qlt=100' alt='updatedutility' height='404px' width='1165px' />
        </div>
        <h2>Womens Shoes</h2>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40028011_005_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40028011_002_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40028011_020_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40028011_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40555120_065_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/27253293_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39653142_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/33820143_018_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/33820143_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38888764_041_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38888764_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40311813_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40589129_080_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/37591971_065_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/37591971_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39951660_040_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41510900_018_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41493867_009_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41470097_009_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41454273_065_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41129164_015_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40312746_020_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40926883_004_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40312167_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41606609_004_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41113945_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41039371_091_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/27940642_013_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/34774562_030_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/34774562_023_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/34774562_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38228219_018_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40902785_004_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40902785_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40925109_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38589800_011_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
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
