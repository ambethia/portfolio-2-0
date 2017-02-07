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
      <nav className='menssubnavbar'>
        <ul className='menssecondnav'>
          {/* <li onMouseOver={() => this.showCategory('Collections')} onMouseOut={() => this.hideCategory()}> */}
          <Link to='/MensCollections' >
            <a className='ay'>Collections</a>
          </Link>
          <ul className={this.state.visibleCategory === 'Collections' ? 'visible' : 'hidden'}>
            <Link to='/love' >
              <li className='funk'>Valentine's Day Shop</li>
            </Link>
          </ul>
          {/* </li> */}
          {/* <li onMouseOver={() => this.showCategory('New')} onMouseOut={() => this.hideCategory()}> */}
          <Link to='/MensNew' >
            <a className='ay'>New</a>
          </Link>
          <ul className={this.state.visibleCategory === 'New' ? 'visible' : 'hidden'}>
            <Link to='/MensNewJacketsCoats' >
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
          {/* </li> */}
          {/* <li onMouseOver={() => this.showCategory('Graphic Tees')} onMouseOut={() => this.hideCategory()}> */}
          <Link to='/MensGraphicTees' >
            <a className='ay'>Graphic Tees</a>
          </Link>
          <ul className={this.state.visibleCategory === 'Graphic Tees' ? 'visible' : 'hidden'}>
            <Link to='/MensGraphicBrandLogos' >
              <li className='funk'>Brand + Logos</li>
            </Link>
            <Link to='/MensGraphicMusic' >
              <li className='funk'>Music</li>
            </Link>
            <Link to='/MensSportAthletic' >
              <li className='funk'>Sport + Athletic</li>
            </Link>
            <Link to='/MensPopCulture' >
              <li className='funk'>Pop Culture</li>
            </Link>
            <Link to='/MensArtDesign' >
              <li className='funk'>Art + Design</li>
            </Link>
          </ul>
          {/* </li> */}
          {/* <li onMouseOver={() => this.showCategory('Tops')} onMouseOut={() => this.hideCategory()}> */}
          <Link to='/MensTops' >
            <a className='ay'>Tops</a>
          </Link>
          <ul className={this.state.visibleCategory === 'Tops' ? 'visible' : 'hidden'}>
            <Link to='/MensHoodies' >
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
          {/* </li> */}
          {/* <li onMouseOver={() => this.showCategory('Jackets')} onMouseOut={() => this.hideCategory()}> */}
          <Link to='/MensJackets' >
            <a className='ay'>Jackets</a>
          </Link>
          <ul className={this.state.visibleCategory === 'Jackets' ? 'visible' : 'hidden'}>
            <Link to='/MensBomber' >
              <li className='funk'>Bomber</li>
            </Link>
            <Link to='/MensDenimTrucker' >
              <li className='funk'>Denim + Trucker</li>
            </Link>
            <Link to='/MensWindbreaker' >
              <li className='funk'>Windbreaker</li>
            </Link>
            <Link to='/MensLeatherSuede' >
              <li className='funk'>Leather + Suede</li>
            </Link>
            <Link to='/MensCoats' >
              <li className='funk'>Coats</li>
            </Link>
          </ul>
          {/* </li> */}
          {/* <li onMouseOver={() => this.showCategory('Bottoms')} onMouseOut={() => this.hideCategory()}> */}
          <Link to='/MensBottoms' >
            <a className='ay'>Bottoms</a>
          </Link>
          <ul className={this.state.visibleCategory === 'Bottoms' ? 'visible' : 'hidden'}>
            <Link to='/MensPants' >
              <li className='funk'>Pants</li>
            </Link>
            <Link to='/MensJeans' >
              <li className='funk'>Jeans</li>
            </Link>
            <Link to='/MensOverallsCoveralls' >
              <li className='funk'>Overalls + Coveralls</li>
            </Link>
            <Link to='/MensAthletic' >
              <li className='funk'>Athletic</li>
            </Link>
            <Link to='/MensShorts' >
              <li className='funk'>Shorts</li>
            </Link>
          </ul>
          {/* </li> */}
          {/* <li onMouseOver={() => this.showCategory('Shoes')} onMouseOut={() => this.hideCategory()}> */}
          <Link to='/MensShoes' >
            <a className='ay'>Shoes</a>
          </Link>
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
            <Link to='/MensSlippersSandals' >
              <li className='funk'>Slippers + Sandals</li>
            </Link>
          </ul>
          {/* </li> */}
          {/* <li onMouseOver={() => this.showCategory('Accessories')} onMouseOut={() => this.hideCategory()}> */}
          <Link to='/MensAccessories' >
            <a className='ay'>Accessories</a>
          </Link>
          <ul className={this.state.visibleCategory === 'Accessories' ? 'visible' : 'hidden'}>
            <Link to='/MensHatsBeanies' >
              <li className='funk'>Hats + Beanies</li>
            </Link>
            <Link to='/MensBagsWallets' >
              <li className='funk'>Bags + Wallets</li>
            </Link>
            <Link to='/MensPinsPatches' >
              <li className='funk'>Pins + Patches</li>
            </Link>
            <Link to='/MensSunglassesReaders' >
              <li className='funk'>Sunglasses + Readers</li>
            </Link>
            <Link to='/MensWatchesJewelery' >
              <li className='funk'>Watches + Jewelery</li>
            </Link>
            <Link to='/MensBandanas' >
              <li className='funk'>Bandanas</li>
            </Link>
            <Link to='/MensBelts' >
              <li className='funk'>Belts</li>
            </Link>
          </ul>
          {/* </li> */}
          {/* <li onMouseOver={() => this.showCategory('Sock + Underwear')} onMouseOut={() => this.hideCategory()}> */}
          <Link to='/MensSocksUnderwear' >
            <a className='ay'>Socks + Underwear</a>
          </Link>
          <ul className={this.state.visibleCategory === 'Sock + Underwear' ? 'visible' : 'hidden'}>
            <Link to='/MensSocks' >
              <li className='funk'>Socks</li>
            </Link>
            <Link to='/MensUnderwear' >
              <li className='funk'>Underwear</li>
            </Link>
          </ul>
          {/* </li> */}
          {/* <li onMouseOver={() => this.showCategory('Grooming')} onMouseOut={() => this.hideCategory()}> */}
          <Link to='/MensGrooming' >
            <a className='ay'>Grooming</a>
          </Link>
          <ul className={this.state.visibleCategory === 'Grooming' ? 'visible' : 'hidden'}>
            <Link to='/MensBeardShave' >
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
          {/* </li> */}
          {/* <li onMouseOver={() => this.showCategory('Brands')} onMouseOut={() => this.hideCategory()}> */}
          <Link to='/MensBrands' >
            <a className='ay'>Brands</a>
          </Link>
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
          {/* </li> */}
          {/* <li onMouseOver={() => this.showCategory('Sale')} onMouseOut={() => this.hideCategory()}> */}
          <Link to='/MensSale' >
            <a className='ay'>Sale</a>
          </Link>
          <ul className={this.state.visibleCategory === 'Sale' ? 'visible' : 'hidden'}>
            <Link to='/MensSaleJustAdded' >
              <li className='funk'>Just Added</li>
            </Link>
            <Link to='/MensSaleGraphicTees' >
              <li className='funk'>Graphic Tees</li>
            </Link>
            <Link to='/MensSaleTeesTanks' >
              <li className='funk'>Tees + Tanks</li>
            </Link>
            <Link to='/MensSaleShirts' >
              <li className='funk'>Shirts</li>
            </Link>
            <Link to='/MensSaleSweatersSweatshirts' >
              <li className='funk'>Sweaters + Sweatshirts</li>
            </Link>
            <Link to='/MensSaleCoatsJackets' >
              <li className='funk'>Coats + Jackets</li>
            </Link>
            <Link to='/MensSaleJeansPants' >
              <li className='funk'>Jeans + Pants</li>
            </Link>
            <Link to='/MensSaleShoes' >
              <li className='funk'>Shoes</li>
            </Link>
            <Link to='/MensSaleHatsBeanies' >
              <li className='funk'>Hats + Beanies</li>
            </Link>
            <Link to='/MensSaleAccessories' >
              <li className='funk'>Accessories</li>
            </Link>
          </ul>
          {/* </li> */}
        </ul>
      </nav>
      <main id='apartmentlayout'>
        <div id='apartmentimg1'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170206_sjacket_lb_1?scl=1&qlt=100' alt='updatedutility' height='375px' width='1165px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41304569_030_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41304569_066_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41890419_015_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40898025_016_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42039776_072_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41889742_005_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41045451_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/36657054_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/37723509a_092_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38578928_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38798757_060_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38914842_009_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39315973_091_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39316013_091_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39316203_091_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39316740_091_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39317045_091_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39400700_028_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39564455_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39631411_091_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39916689_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39799887_031_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40011504_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40258014_060_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40258717_030_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40259525_060_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40261711_050_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40262016_040_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40262099_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40262099_010_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40262321_061_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40274987_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40335234_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40378374_029_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40513806_060_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40633794_092_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41026956_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40957722_095_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41030040_091_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41030313_091_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
        </div>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42078907_009_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42078659_001_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42233726_009_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41076894_004_d?$medium$' alt='thejumpsuit' height='404px' width='269px' />
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
