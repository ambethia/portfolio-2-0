import React, { Component } from 'react'
import { Link } from 'react-router'

class Mens extends Component {

  enlarge () {
  }

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
    return <div className='mens'>
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
      <main className='menslayout'>
        <div id='mensimg1'>
          <Link to='/MensShoes' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_1?scl=1&qlt=92' alt='shoe' height='686px' width='565px' />
          </Link>
          <Link to='/MensJackets' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_2?scl=1&qlt=92' alt='jackets' height='686px' width='565px' />
          </Link>
        </div>
        <div id='mensimg2'>
          <Link to='/MensNewSweatshirts' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_3?scl=1&qlt=92' alt='sweater' height='535px' width='380px' />
          </Link>
          <Link to='/MensHatsBeanies' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_4?scl=1&qlt=92' alt='logo' height='535px' width='380px' />
          </Link>
          <Link to='/MensGraphicTees' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_5?scl=1&qlt=92' alt='teamgraphics' height='535px' width='380px' />
          </Link>
        </div>
        <section id='newarrivalswrapper'>
          <div id='newarrival1'>
            <Link to='/MensNewJackets' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41139395_092_b' alt='newarrival1' height='279px' width='179px' />
            </Link>
            <Link to='/MensNewGraphics' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41891920_010_b' alt='newarrival2' height='279px' width='179px' />
            </Link>
            <Link to='/MensNewShoes' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40315293_016_b' alt='newarrival3' height='279px' width='179px' />
            </Link>
            <Link to='/MensNewBottoms' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40722191_106_b' alt='newarrival4' height='279px' width='179px' />
            </Link>
            <Link to='/MensNewAccessories' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41377227_072_b' alt='newarrival5' height='279px' width='179px' />
            </Link>
            <Link to='/MensNewJackets' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41460627_060_b' alt='newarrival6' height='279px' width='179px' />
            </Link>
          </div>
        </section>
        <section id='morestories'>
          <div id='morestoriesrow'>
            <article id='morestoriesitems'>
              <Link to='/AllBrands' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_8?scl=1&qlt=92' alt='item1' height='686px' width='565px' />
              </Link>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_9?scl=1&qlt=92' alt='item2' height='686px' width='565px' />
            </article>
          </div>
        </section>
        <section id='trends'>
          <div id='trendone'>
            <ul id='trendingone'>
              <li>Champion + OU</li>
              <li>Shop By Fit</li>
              <li>LookBook:The Checklist</li>
              <li>New Stussy</li>
              <li>UO:Presents Artist Edition</li>
              <li>Vintage</li>
            </ul>
          </div>
        </section>
        <section id='brands'>
          <div id='trendtwo'>
            <ul id='trendingtwo'>
              <li>adidas</li>
              <li>Calvin Klein</li>
              <li>Herschel Supply Co</li>
              <li>Katin</li>
              <li>Levi's</li>
              <li>Patagonia</li>
            </ul>
          </div>
        </section>
        <section id='newarrivalswrapper'>
          <div id='newarrival1'>
            <Link to='/MensNewJackets' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41139395_092_b' alt='newarrival1' height='279px' width='179px' />
            </Link>
            <Link to='/MensNewGraphics' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41891920_010_b' alt='newarrival2' height='279px' width='179px' />
            </Link>
            <Link to='/MensNewShoes' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40315293_016_b' alt='newarrival3' height='279px' width='179px' />
            </Link>
            <Link to='/MensNewBottoms' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40722191_106_b' alt='newarrival4' height='279px' width='179px' />
            </Link>
            <Link to='/MensNewAccessories' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41377227_072_b' alt='newarrival5' height='279px' width='179px' />
            </Link>
            <Link to='/MensNewJackets' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41460627_060_b' alt='newarrival6' height='279px' width='179px' />
            </Link>
          </div>
        </section>
        <section id='fromtheblog'>
          <div id='blogwrapper'>
            <div id='blogitem1'>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_b_1?scl=1&qlt=92' alt='blogitem1' height='240px' width='360px' />
              </Link>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_b_2?scl=1&qlt=92' alt='blogitem2' height='240px' width='360px' />
              </Link>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_b_3?scl=1&qlt=92' alt='blogitem3' height='240px' width='360px' />
              </Link>
            </div>
            <article id='daos'>
              <div id='yourcommunity'>
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/160912_uocomm_m_us?scl=1&qlt=92' alt='community' height='75px' width='1180px' />
              </div>
              <div id='communitytwo'>
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_ig?scl=1&qlt=92' alt='num2' height='598px' width='1180px' />
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

export default Mens
