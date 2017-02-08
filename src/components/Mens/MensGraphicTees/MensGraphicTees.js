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
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/us-banners-170130-25?scl=1&qlt=100' alt='updatedutility' height='400px' width='1165px' />
        </div>
        <h2>Mens Graphic Tees</h2>
        <div id='apartmentsale'>
          <Link to='/MensGraphicTeesone' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41344037_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensGraphicTeestwo' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39979646_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensGraphicTeesthree' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41384512_030_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensGraphicTeesfour' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38108890_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <Link to='/MensGraphicTeesfive' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41592080_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensGraphicteessix' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41450131_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensGraphicTeesseven' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41450131_041_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensGraphicteeseight' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40770075_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <Link to='/MensGraphicteesnine' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39770425_032_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensGraphicteesten' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40064545_083_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensGraphicTeeseleven' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40301996_004_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensGraphicTeestwelve' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40895211_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <Link to='/MensGraphicTeesthirteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41304270_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensGraphicTeesfourteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41401183_050_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensGraphicTeesfifteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41493792_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensGraphicTeessixteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40979320_061_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <Link to='/MensGraphicTeesseventeen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40337966_023_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensGraphicTeeseighteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41866203_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensGraphicTeesnineteen' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39118450_030_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
          <Link to='/MensGraphicTeestwenty' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41702424_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          </Link>
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40190134_045_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40624371_060_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39755145_066_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42027920_046_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41491036_061_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40302184_032_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41965666_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40834699_061_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41963992_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38329744_066_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/36035210_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41337700_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39001235_004_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/36556520_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40715518_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40013013_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40086761_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/36085066_018_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41742883_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40041246_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39718531_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39324793_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/34219428_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42187179_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41337205_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41202987_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40979106_061_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39980479_030_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40576019_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39117155_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41969239_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41336819_002_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
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
