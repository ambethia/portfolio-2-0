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
      <nav className='subnavbar'>
        <ul className='apartmentsecondnav'>
          <li onMouseOver={() => this.showCategory('Collections')} onMouseOut={() => this.hideCategory()}>
            <Link to='IntimatesCollections' >
              <a className='ay'>Collections</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Collections' ? 'visible' : 'hidden'}>
              <Link to='/love' >
                <li className='funk'>Valentines Day Shop</li>
              </Link>
              <Link to='/blog' >
                <li className='funk'>For The Record Music Newsletter</li>
              </Link>
              <Link to='/IntimatesCollections' >
                <li className='funk'>UO Exclusives</li>
              </Link>
              <Link to='/' >
                <li className='funk'>LookBook</li>
              </Link>
              <Link to='/' >
                <li className='funk'>View All LookBook</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('New')} onMouseOut={() => this.hideCategory()}>
            <Link to='/NewIntimates' >
              <a className='ay'>New</a>
            </Link>
            <ul className={this.state.visibleCategory === 'New' ? 'visible' : 'hidden'}>
              <Link to='/IntimatesNewBras' >
                <li className='funk'>Bras + Undies</li>
              </Link>
              <Link to='/IntimatesNewSlips+Bodysuits' >
                <li className='funk'>Slips + Bodysuits</li>
              </Link>
              <Link to='/IntimatesNewLounge+Activewear' >
                <li className='funk'>Lounge + Activewear</li>
              </Link>
              <Link to='/IntimatesNewSwim' >
                <li className='funk'>Swim</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Swim')} onMouseOut={() => this.hideCategory()}>
            <Link to='/IntimatesNewSwim' >
              <a className='ay'>Swim</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Swim' ? 'visible' : 'hidden'}>
              <Link to='/IntimatesMix+Match' >
                <li className='funk'>Mix + Match</li>
              </Link>
              <Link to='/IntimatesOnePieces' >
                <li className='funk'>One Pieces</li>
              </Link>
              <Link to='/IntimatesBikiniTops' >
                <li className='funk'>Bikini Tops</li>
              </Link>
              <Link to='/IntimatesBikiniBottoms' >
                <li className='funk'>Bikini Bottoms</li>
              </Link>
              <Link to='/IntimatesBeachTowels' >
                <li className='funk'>Beach Towels</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Lingerie Sets')} onMouseOut={() => this.hideCategory()}>
            <Link to='/IntimatesLingerieSets' >
              <a className='ay'>Lingerie Sets</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Lingerie Sets' ? 'visible' : 'hidden'} />
          </li>
          <li onMouseOver={() => this.showCategory('Bras + Bralettes')} onMouseOut={() => this.hideCategory()}>
            <Link to='/IntimatesBras+Bralettes' >
              <a className='ay'>Bras + Bralettes</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Bras + Bralettes' ? 'visible' : 'hidden'}>
              <Link to='/IntimatesHalter' >
                <li className='funk'>Halter</li>
              </Link>
              <Link to='/IntimatesBralettes' >
                <li className='funk'>Bralettes</li>
              </Link>
              <Link to='/IntimatesTriangle' >
                <li className='funk'>Triangle</li>
              </Link>
              <Link to='/IntimatesStrappy' >
                <li className='funk'>Strappy</li>
              </Link>
              <Link to='/IntimatesSeamless+Fusion' >
                <li className='funk'>Seamless+Fusion</li>
              </Link>
              <Link to='/IntimatesSportsBras' >
                <li className='funk'>Sports Bra's</li>
              </Link>
              <Link to='/IntimatesSeamless' >
                <li className='funk'>Seamless</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Undies')} onMouseOut={() => this.hideCategory()}>
            <Link to='/IntimatesUndies' >
              <a className='ay'>Undies</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Undies' ? 'visible' : 'hidden'}>
              <Link to='/IntimatesUndiesHipster' >
                <li className='funk'>Hipster</li>
              </Link>
              <Link to='/IntimatesUndiesThong' >
                <li className='funk'>Thong</li>
              </Link>
              <Link to='/IntimatesUndiesCheeky' >
                <li className='funk'>Cheeky</li>
              </Link>
              <Link to='/IntimatesUndiesBoyShorts+Briefs' >
                <li className='funk'>BoyShorts + Briefs</li>
              </Link>
              <Link to='/IntimatesUndiesPromo' >
                <li className='funk'>Promo Undies</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Bodysuits')} onMouseOut={() => this.hideCategory()}>
            <Link to='/IntimatesBodysuits' >
              <a className='ay'>Bodysuits</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Bodysuits' ? 'visible' : 'hidden'} />
          </li>
          <li onMouseOver={() => this.showCategory('Slips + Rompers')} onMouseOut={() => this.hideCategory()}>
            <Link to='/IntimatesSlips+Rompers' >
              <a className='ay'>Slips + Rompers</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Slips + Rompers' ? 'visible' : 'hidden'} />
          </li>
          <li onMouseOver={() => this.showCategory('Lounge')} onMouseOut={() => this.hideCategory()}>
            <Link to='/Lounge' >
              <a className='ay'>Lounge</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Lounge' ? 'visible' : 'hidden'}>
              <Link to='/IntimatesLoungeTops' >
                <li className='funk'>Tops</li>
              </Link>
              <Link to='/IntimatesLoungeBottoms' >
                <li className='funk'>Bottoms</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Activewear')} onMouseOut={() => this.hideCategory()}>
            <Link to='/IntimatesActivewear' >
              <a className='ay'>Activewear</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Activewear' ? 'visible' : 'hidden'}>
              <Link to='/IntimatesActivewearTops' >
                <li className='funk'>Tops + Sports Bras</li>
              </Link>
              <Link to='/IntimatesActivewearBottoms' >
                <li className='funk'>Bottoms</li>
              </Link>
              <Link to='/IntimatesActivewearYoga' >
                <li className='funk'>Yoga Accessories</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Socks + Tights')} onMouseOut={() => this.hideCategory()}>
            <Link to='/IntimatesSocks + Tights' >
              <a className='ay'>Socks + Tights</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Socks + Tights' ? 'visible' : 'hidden'}>
              <Link to='/IntimatesSocks' >
                <li className='funk'>Socks</li>
              </Link>
              <Link to='/IntimatesTights' >
                <li className='funk'>Tights</li>
              </Link>
              <Link to='/IntimatesPromo' >
                <li className='funk'>Promo Socks + Tights</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Sale')} onMouseOut={() => this.hideCategory()}>
            <Link to='/IntimatesSale' >
              <a className='ay'>Sale</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Sale' ? 'visible' : 'hidden'}>
              <Link to='/IntimatesSaleLounge' >
                <li className='funk'>Lounge + Activewear</li>
              </Link>
              <Link to='/IntimatesSaleBras+Undies' >
                <li className='funk'>Bras + Undies</li>
              </Link>
              <Link to='/IntimatesSaleSwim' >
                <li className='funk'>Swim</li>
              </Link>
              <Link to='/IntimatesSaleSocks+Tights' >
                <li className='funk'>Socks + Tights</li>
              </Link>
            </ul>
          </li>
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
