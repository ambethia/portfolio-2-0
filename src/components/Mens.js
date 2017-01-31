import React, { Component } from 'react'
import { Link } from 'react-router'

class Mens extends Component {

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
      <nav className='menssubnavbar'>
        <ul className='menssecondnav'>
          <li onMouseOver={() => this.showCategory('Collections')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Collections</a>
            <ul className={this.state.visibleCategory === 'Collections' ? 'visible' : 'hidden'}>
              <Link to='/love' >
                <li className='funk'>Valentine's Day Shop</li>
              </Link>
              <Link to='/blog' >
                <li className='funk'>UO: Exclusives</li>
              </Link>
              <Link to='/blog' >
                <li className='funk'>LookBook: #UO:Love Stories</li>
              </Link>
              <Link to='/blog' >
                <li className='funk'>LookBook: The Checklist</li>
              </Link>
              <Link to='/blog' >
                <li className='funk'>View all LookBooks</li>
              </Link>
              <Link to='/blog' >
                <li className='funk'>Gift Cards</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('New')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>New</a>
            <ul className={this.state.visibleCategory === 'New' ? 'visible' : 'hidden'}>
              <Link to='/MensNewJackets+Coats' >
                <li className='funk'>Jackets + Coats</li>
              </Link>
              <Link to='/MensNewGraphics' >
                <li className='funk'>Graphics</li>
              </Link>
              <Link to='/MensNewTops' >
                <li className='funk'>Tops</li>
              </Link>
              <Link to='/MensNewBottoms' >
                <li className='funk'>Bottoms</li>
              </Link>
              <Link to='/MensNewShoes' >
                <li className='funk'>Shoes</li>
              </Link>
              <Link to='/MensNewAccessories' >
                <li className='funk'>Accessories</li>
              </Link>
              <Link to='/MensNewGrooming' >
                <li className='funk'>Grooming</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Graphic Tees')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Graphic Tees</a>
            <ul className={this.state.visibleCategory === 'Graphic Tees' ? 'visible' : 'hidden'}>
              <Link to='/MensGraphicBrand+Logos' >
                <li className='funk'>Brand + Logos</li>
              </Link>
              <Link to='/MensGraphicMusic' >
                <li className='funk'>Music</li>
              </Link>
              <Link to='/MensSport+Athletic' >
                <li className='funk'>Sport + Athletic</li>
              </Link>
              <Link to='/MensPopCulture' >
                <li className='funk'>Pop Culture</li>
              </Link>
              <Link to='/MensArt+Design' >
                <li className='funk'>Art + Design</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Tops')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Tops</a>
            <ul className={this.state.visibleCategory === 'Tops' ? 'visible' : 'hidden'}>
              <Link to='/MensTops' >
                <li className='funk'>Hoodies + Sweatshirts</li>
              </Link>
              <Link to='/MensTees' >
                <li className='funk'>Tees</li>
              </Link>
              <Link to='/MensShirts' >
                <li className='funk'>Shirts</li>
              </Link>
              <Link to='/MensSweaters' >
                <li className='funk'>Sweaters</li>
              </Link>
              <Link to='/MensGraphicTees' >
                <li className='funk'>Graphic Tees</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Jackets')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Jackets</a>
            <ul className={this.state.visibleCategory === 'Jackets' ? 'visible' : 'hidden'}>
              <Link to='/MensBomber' >
                <li className='funk'>Bomber</li>
              </Link>
              <Link to='/MensDenim+Trucker' >
                <li className='funk'>Denim + Trucker</li>
              </Link>
              <Link to='/MensWindbreaker' >
                <li className='funk'>Windbreaker</li>
              </Link>
              <Link to='/MensLeather+Suede' >
                <li className='funk'>Leather + Suede</li>
              </Link>
              <Link to='/MensCoats' >
                <li className='funk'>Coats</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Bottoms')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Bottoms</a>
            <ul className={this.state.visibleCategory === 'Bottoms' ? 'visible' : 'hidden'}>
              <Link to='/MensPants' >
                <li className='funk'>Pants</li>
              </Link>
              <Link to='/MensJeans' >
                <li className='funk'>Jeans</li>
              </Link>
              <Link to='/MensOveralls+Coveralls' >
                <li className='funk'>Overalls + Coveralls</li>
              </Link>
              <Link to='/MensAthletic' >
                <li className='funk'>Athletic</li>
              </Link>
              <Link to='/MensShorts' >
                <li className='funk'>Shorts</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Shoes')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Shoes</a>
            <ul className={this.state.visibleCategory === 'Shoes' ? 'visible' : 'hidden'}>
              <Link to='/MensSneakers' >
                <li className='funk'>Sneakers</li>
              </Link>
              <Link to='/MensBoots' >
                <li className='funk'>Boots</li>
              </Link>
              <Link to='/MensDressShoes' >
                <li className='funk'>Dress Shoes</li>
              </Link>
              <Link to='/MensSlippers+Sandals' >
                <li className='funk'>Slippers + Sandals</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Accessories')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Accessories</a>
            <ul className={this.state.visibleCategory === 'Accessories' ? 'visible' : 'hidden'}>
              <Link to='/MensHats+Beanies' >
                <li className='funk'>Hats + Beanies</li>
              </Link>
              <Link to='/MensBags+Wallets' >
                <li className='funk'>Bags + Wallets</li>
              </Link>
              <Link to='/MensPins+Patches' >
                <li className='funk'>Pins + Patches</li>
              </Link>
              <Link to='/MensSunglasses+Readers' >
                <li className='funk'>Sunglasses + Readers</li>
              </Link>
              <Link to='/MensWatches+Jewelery' >
                <li className='funk'>Watches + Jewelery</li>
              </Link>
              <Link to='/MensBandanas' >
                <li className='funk'>Bandanas</li>
              </Link>
              <Link to='/MensBelts' >
                <li className='funk'>Belts</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Sock + Underwear')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Socks + Underwear</a>
            <ul className={this.state.visibleCategory === 'Sock + Underwear' ? 'visible' : 'hidden'}>
              <Link to='/MensSocks' >
                <li className='funk'>Socks</li>
              </Link>
              <Link to='/MensUnderwear' >
                <li className='funk'>Underwear</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Grooming')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Grooming</a>
            <ul className={this.state.visibleCategory === 'Grooming' ? 'visible' : 'hidden'}>
              <Link to='/MensBeard+Shave' >
                <li className='funk'>Beard + Shave</li>
              </Link>
              <Link to='/MensHair' >
                <li className='funk'>Hair</li>
              </Link>
              <Link to='/MensSkin' >
                <li className='funk'>Skin</li>
              </Link>
              <Link to='/MensCologone' >
                <li className='funk'>Cologone</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Brands')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Brands</a>
            <ul className={this.state.visibleCategory === 'Brands' ? 'visible' : 'hidden'}>
              <Link to='/MensAdidas' >
                <li className='funk'>adidas</li>
              </Link>
              <Link to='/MensAlphaIndustries' >
                <li className='funk'>Alpha Industries</li>
              </Link>
              <Link to='/MensStussy' >
                <li className='funk'>Stussy</li>
              </Link>
              <Link to='/MensPatagonia' >
                <li className='funk'>Patagonia</li>
              </Link>
              <Link to='/MensCalvinKlein' >
                <li className='funk'>Calvin Klein</li>
              </Link>
              <Link to='/MensBDG' >
                <li className='funk'>BDG</li>
              </Link>
              <Link to='/MensReebok' >
                <li className='funk'>Reebok</li>
              </Link>
              <Link to='/MensFILA' >
                <li className='funk'>FILA</li>
              </Link>
              <Link to='/' >
                <li className='funk'>UrbanOutfitters</li>
              </Link>
              <Link to='/AllBrands' >
                <li className='funk'>Brands A-Z</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Sale')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Sale</a>
            <ul className={this.state.visibleCategory === 'Sale' ? 'visible' : 'hidden'}>
              <Link to='/MensSaleJustAdded' >
                <li className='funk'>Just Added</li>
              </Link>
              <Link to='/MensSaleGraphicTees' >
                <li className='funk'>Graphic Tees</li>
              </Link>
              <Link to='/MensSaleTees+Tanks' >
                <li className='funk'>Tees + Tanks</li>
              </Link>
              <Link to='/MensSaleShirts' >
                <li className='funk'>Shirts</li>
              </Link>
              <Link to='/MensSaleSweaters+Sweatshirts' >
                <li className='funk'>Sweaters + Sweatshirts</li>
              </Link>
              <Link to='/MensSaleCoats+Jackets' >
                <li className='funk'>Coats + Jackets</li>
              </Link>
              <Link to='/MensSaleJeans+Pants' >
                <li className='funk'>Jeans + Pants</li>
              </Link>
              <Link to='/MensSaleShoes' >
                <li className='funk'>Shoes</li>
              </Link>
              <Link to='/MensSaleHats+Beanies' >
                <li className='funk'>Hats + Beanies</li>
              </Link>
              <Link to='/MensSaleAccessories' >
                <li className='funk'>Accessories</li>
              </Link>
            </ul>
          </li>
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
          <Link to='/MensHats+Beanies' >
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
