import React, { Component } from 'react'
import { Link } from 'react-router'

class WomensSaleDresses extends Component {

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
            <Link to='/WomensSale' >
              <a className='ay'>Womens Sale</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Womens Sale' ? 'visible' : 'hidden'}>
              <Link to='/WomensSaleJustAdded' >
                <li className='funk'>Just Added</li>
              </Link>
              <Link to='/WomensSaleDresses' >
                <li className='funk'>Dresses+Rompers</li>
              </Link>
              <Link to='/WomensSaleSweaters' >
                <li className='funk'>Sweaters+Sweatshirts</li>
              </Link>
              <Link to='/WomensSaleTops' >
                <li className='funk'>Tops + Tees</li>
              </Link>
              <Link to='/WomensSaleGraphicTees' >
                <li className='funk'>Graphic Tees</li>
              </Link>
              <Link to='/WomensSaleCoats' >
                <li className='funk'>Coats + Jackets</li>
              </Link>
              <Link to='/WomensSaleJeansPants' >
                <li className='funk'>Jeans, Pants+Leggings</li>
              </Link>
              <Link to='/WomensSaleShorts' >
                <li className='funk'>Shorts + Skirts</li>
              </Link>
              <Link to='/WomensSaleIntimates' >
                <li className='funk'>Intimates</li>
              </Link>
              <Link to='/WomensSaleLounge' >
                <li className='funk'>Lounge + Activewear</li>
              </Link>
              <Link to='/WomensSaleSwim' >
                <li className='funk'>Swim</li>
              </Link>
              <Link to='/WomensSaleShoes' >
                <li className='funk'>Shoes</li>
              </Link>
              <Link to='/WomensSaleBags' >
                <li className='funk'>Bags + Wallets</li>
              </Link>
              <Link to='/WomensSaleAccessories' >
                <li className='funk'>Accessories</li>
              </Link>
              <Link to='/WomensSaleBeauty' >
                <li className='funk'>Beauty</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Mens Sale')} onMouseOut={() => this.hideCategory()}>
            <Link to='/MensSale' >
              <a className='ay'>Mens Sale</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Mens Sale' ? 'visible' : 'hidden'}>
              <Link to='/MensSaleJustAdded' >
                <li className='funk'>Just Added</li>
              </Link>
              <Link to='/MensSaleGraphicTees' >
                <li className='funk'>Graphic Tees</li>
              </Link>
              <Link to='/MensSaleTees' >
                <li className='funk'>Tees + Tanks</li>
              </Link>
              <Link to='/MensSaleShirts' >
                <li className='funk'>Shirts</li>
              </Link>
              <Link to='/MensSaleSweaters' >
                <li className='funk'>Sweaters+Sweatshirts</li>
              </Link>
              <Link to='/MensSaleCoats' >
                <li className='funk'>Coats + Jackets</li>
              </Link>
              <Link to='/MensSaleJeans' >
                <li className='funk'>Jeans+Pants</li>
              </Link>
              <Link to='/MensSaleShoes' >
                <li className='funk'>Shoes</li>
              </Link>
              <Link to='/MensSaleHats' >
                <li className='funk'>Hats+Beanies</li>
              </Link>
              <Link to='/MensSaleAccessories' >
                <li className='funk'>Accessories</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Apartment Sale')} onMouseOut={() => this.hideCategory()}>
            <Link to='/ApartmentSale' >
              <a className='ay'>Apartment Sale</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Apartment Sale' ? 'visible' : 'hidden'}>
              <Link to='/ApartmentSaleJustAdded' >
                <li className='funk'>Just Added</li>
              </Link>
              <Link to='/ApartmentSaleBedding' >
                <li className='funk'>Bedding</li>
              </Link>
              <Link to='/ApartmentSaleRugs' >
                <li className='funk'>Rugs + Curtains</li>
              </Link>
              <Link to='/ApartmentSalePillows' >
                <li className='funk'>Pillows, Tapestries + Throws</li>
              </Link>
              <Link to='/ApartmentSaleFurniture' >
                <li className='funk'>Furniture</li>
              </Link>
              <Link to='/ApartmentSaleRoomDecor' >
                <li className='funk'>Room Decor</li>
              </Link>
              <Link to='/ApartmentSaleKitchen' >
                <li className='funk'>Kitchen + Bar</li>
              </Link>
              <Link to='/ApartmentSaleBath' >
                <li className='funk'>Bath</li>
              </Link>
              <Link to='/ApartmentSaleBooks' >
                <li className='funk'>Books + Stationery</li>
              </Link>
              <Link to='/ApartmentSaleParty' >
                <li className='funk'>Party+Fun</li>
              </Link>
              <Link to='/ApartmentSaleMusicTech' >
                <li className='funk'>Music+Tech</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Music + Tech Sale')} onMouseOut={() => this.hideCategory()}>
            <Link to='/MusicTechSale' >
              <a className='ay'>Music + Tech Sale</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Music + Tech Sale' ? 'visible' : 'hidden'}>
              <Link to='/MusicTechSaleVinyl' >
                <li className='funk'>Vinyl + Cassettes</li>
              </Link>
              <Link to='/MusicTechSalePhoto' >
                <li className='funk'>Photo, Music + Tech Accessories</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Beauty Sale')} onMouseOut={() => this.hideCategory()}>
            <Link to='/BeautySale' >
              <a className='ay'>Beauty Sale</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Beauty Sale' ? 'visible' : 'hidden'} />
          </li>
          <li onMouseOver={() => this.showCategory('Intimate Sale')} onMouseOut={() => this.hideCategory()}>
            <Link to='/IntimatesSale' >
              <a className='ay'>Intimate Sale</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Intimate Sale' ? 'visible' : 'hidden'}>
              <Link to='/IntimatesSaleLounge' >
                <li className='funk'>Lounge + Activewear</li>
              </Link>
              <Link to='/IntimatesSaleBras' >
                <li className='funk'>Bras + Undies</li>
              </Link>
              <Link to='/IntimatesSaleSwim' >
                <li className='funk'>Swim</li>
              </Link>
              <Link to='/IntimatesSaleSocks' >
                <li className='funk'>Socks + Tights</li>
              </Link>
            </ul>
          </li>
        </ul>
      </nav>
      <main id='apartmentlayout'>
        <div id='apartmentimg1'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170130_sgw_us_hero?scl=1&qlt=92' alt='updatedutility' height='334px' width='1200px' />
        </div>
        <div id='womenssale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_1?scl=1&qlt=92' alt='thejumpsuit' height='499px' width='378px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_2?scl=1&qlt=92' alt='thejumpsuit' height='499px' width='378px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_3?scl=1&qlt=92' alt='thejumpsuit' height='499px' width='378px' />
        </div>
        <div id='menssale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_4?scl=1&qlt=92' alt='thejumpsuit' height='499px' width='378px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_5?scl=1&qlt=92' alt='thejumpsuit' height='499px' width='378px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_6?scl=1&qlt=92' alt='thejumpsuit' height='499px' width='378px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/34913509_011_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/37965035_020_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/36159234_004_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/36559508_065_b' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/37334141_020_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40205635_001_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/27937606d_015_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38403804b_095_b' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39211206_010_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39036710_018_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40354672_020_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40764391_010_b' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39742903_028_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41261165_040_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41261165_030_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41261165_105_b' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39588264_066_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40435281_095_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40815169_010_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39036959_040_b' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39036959_054_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39036959_034_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39036959_105_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40810913_040_b' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/37826872_054_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40974388_066_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39044797a_040_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40112435_095_b' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/37826872_054_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/36702249_018_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38991287_007_b' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/36701548_018_b' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/37826872_054_b?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_7?scl=1&qlt=92' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_8?scl=1&qlt=92' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_sgw_us_9?scl=1&qlt=92' alt='thejumpsuit' height='404px' width='269px' />
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

export default WomensSaleDresses
