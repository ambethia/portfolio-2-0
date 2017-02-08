import React, { Component } from 'react'
import { Link } from 'react-router'

class Intimates extends Component {

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
    return <div id='Apartment'>
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
          <Link to='/love' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_1?scl=1&qlt=92' alt='updatedutility' height='686px' width='565px' />
          </Link>
          <Link to='/love' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_2?scl=1&qlt=92' alt='thejumpsuit' height='686px' width='565px' />
          </Link>
        </div>
        <div id='apartmentimg3'>
          <Link to='/womensbodysuits' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_3?scl=1&qlt=92' alt='sweater' height='535px' width='380px' />
          </Link>
          <Link to='/blog' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_4?scl=1&qlt=92' alt='logo' height='535px' width='380px' />
          </Link>
          <Link to='/sale' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_5?scl=1&qlt=92' alt='logo' height='535px' width='380px' />
          </Link>
        </div>
        <div id='apartmentimg5'>
          <Link to='/Swim' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_6?scl=1&qlt=92' alt='teamgraphics' height='686px' width='565px' />
          </Link>
          <Link to='/IntimatesBras' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_7?scl=1&qlt=92' alt='teamgraphics' height='686px' width='565px' />
          </Link>
        </div>
        <div id='apartmentimg7'>
          <Link to='/love' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_8?scl=1&qlt=92' alt='vdayshop' height='187px' width='1165px' />
          </Link>
        </div>
        <h2>Womens New Swim</h2>
        <section id='apartmentarrivalswrapper'>
          <div id='apartmentnewarrival1'>
            <Link to='/NewIntimates' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41686981_001_b' alt='newarrival1' height='279px' width='179px' />
            </Link>
            <Link to='/NewIntimates' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41414285_083_b' alt='newarrival2' height='279px' width='179px' />
            </Link>
            <Link to='/NewIntimates' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41327545_083_b' alt='newarrival3' height='279px' width='179px' />
            </Link>
            <Link to='/NewIntimates' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41239484_001_b' alt='newarrival4' height='279px' width='179px' />
            </Link>
            <Link to='/NewIntimates' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41239203_001_b' alt='newarrival5' height='279px' width='179px' />
            </Link>
            <Link to='/NewIntimates' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40987067_001_b' alt='newarrival6' height='279px' width='179px' />
            </Link>
          </div>
        </section>
        <section id='apartmentstories'>
          <div id='apartmentstoriesrow'>
            <article id='apartmentstoriesitems'>
              <Link to='/IntimatesLoungeTops' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_9?scl=1&qlt=92' alt='item1' height='686px' width='565px' />
              </Link>
              <Link to='/CalvinKlein' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_10?scl=1&qlt=92' alt='item2' height='686px' width='565px' />
              </Link>
            </article>
          </div>
        </section>
        <section id='fromtheblog'>
          <div id='blogwrapper'>
            <div id='blogitem1'>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_b_1?scl=1&qlt=92' alt='blogitem1' height='240px' width='360px' />
              </Link>
              <Link to='/BeautyMakeup' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_b_2?scl=1&qlt=92' alt='blogitem2' height='240px' width='360px' />
              </Link>
              <Link to='/Fragrance' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_b_3?scl=1&qlt=92' alt='blogitem3' height='240px' width='360px' />
              </Link>
            </div>
            <article id='daos'>
              <div id='yourcommunity'>
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/a_gw_en?scl=1&qlt=92' alt='community' height='75px' width='1200px' />
              </div>
              <div id='communitytwo'>
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_ig?scl=1&qlt=92' alt='num2' height='598px' width='1200px' />
              </div>
            </article>
          </div>
        </section>
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

export default Intimates
