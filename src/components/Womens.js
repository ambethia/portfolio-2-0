import React, { Component } from 'react'
import { Link } from 'react-router'

class Womens extends Component {

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
    return <div className='Womens'>
      <nav className='womenssubnavbar'>
        <ul className='womenssecondnav'>
          <li onMouseOver={() => this.showCategory('collections')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Collections</a>
            <ul className={this.state.visibleCategory === 'collections' ? 'visible' : 'hidden'}>
              <Link to='/love' >
                <li className='funk'> Valentine's Day Shop</li>
              </Link>
              <Link to='/' >
                <li className='funk'>Back in Stock</li>
              </Link>
              <Link to='/blog' >
                <li className='funk'>LookBook: #UO:Love Stories</li>
              </Link>
              <Link to='/blog' >
                <li className='funk'>LookBook: Modern Monochrome</li>
              </Link>
              <Link to='/' >
                <li className='funk'>LookBook: Class of 2017</li>
              </Link>
              <Link to='/' >
                <li className='funk'>View all LookBooks</li>
              </Link>
              <Link to='/' >
                <li className='funk'>Gift Cards</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('new')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>New</a>
            <ul className={this.state.visibleCategory === 'new' ? 'visible' : 'hidden'}>
              <Link to='/Dresses+Rompers' >
                <li className='funk'>Dresses + Rompers</li>
              </Link>
              <Link to='/WomensNewTops+Jackets' >
                <li className='funk'>Tops + Jackets</li>
              </Link>
              <Link to='/WomensNewBottoms' >
                <li className='funk'>Bottoms</li>
              </Link>
              <Link to='/WomensNewAccessories' >
                <li className='funk'>Accessories</li>
              </Link>
              <Link to='/WomensNewShoes' >
                <li className='funk'>Shoes</li>
              </Link>
              <Link to='/WomensNewIntimates+Lounge' >
                <li className='funk'>Intimates + Lounge</li>
              </Link>
              <Link to='/WomensNewSwim' >
                <li className='funk'>Swim</li>
              </Link>
              <Link to='/NewVintage' >
                <li className='funk'>Vintage</li>
              </Link>
              <Link to='/NewBeauty' >
                <li className='funk'>Beauty</li>
              </Link>
            </ul>
          </li>

          <li onMouseOver={() => this.showCategory('Dresses + Rompers')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Dresses + Rompers</a>
            <ul className={this.state.visibleCategory === 'Dresses + Rompers' ? 'visible' : 'hidden'}>
              <Link to='/WomensCasual' >
                <li className='funk'>Casual</li>
              </Link>
              <Link to='/WomensGoingOut' >
                <li className='funk'>Going Out</li>
              </Link>
              <Link to='/Party+Celebration' >
                <li className='funk'>Party + Celebration</li>
              </Link>
              <Link to='/WomensRompers+Jumpsuits' >
                <li className='funk'>Rompers + Jumpsuits</li>
              </Link>
              <Link to='/WomensMini' >
                <li className='funk'>Mini</li>
              </Link>
              <Link to='/WomensMidi+Maxi' >
                <li className='funk'>Midi + Maxi</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Tops')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Tops</a>
            <ul className={this.state.visibleCategory === 'Tops' ? 'visible' : 'hidden'}>
              <Link to='/WomensSweatshirts+Pullovers' >
                <li className='funk'>Sweatshirts + Pullovers</li>
              </Link>
              <Link to='/WomensGoingOutTops' >
                <li className='funk'>Going Out Tops</li>
              </Link>
              <Link to='/WomensSweaters+Cardigan' >
                <li className='funk'>Sweaters + Cardigan</li>
              </Link>
              <Link to='/WomensShirts+Blouses' >
                <li className='funk'>Shirts + Blouses</li>
              </Link>
              <Link to='/WomensBasicTees' >
                <li className='funk'>Basic Tees</li>
              </Link>
              <Link to='/WomensGraphicTees' >
                <li className='funk'>Graphic Tees</li>
              </Link>
              <Link to='/WomensTanks' >
                <li className='funk'>Tanks</li>
              </Link>
              <Link to='/womensbodysuits' >
                <li className='funk'>Bodysuits</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Womens Jackets')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Womens Jackets</a>
            <ul className={this.state.visibleCategory === 'Womens Jackets' ? 'visible' : 'hidden'}>
              <Link to='/WomensBombers' >
                <li className='funk'>Bombers</li>
              </Link>
              <Link to='/WomensDenim' >
                <li className='funk'>Denim</li>
              </Link>
              <Link to='/WomensLeather+Suede' >
                <li className='funk'>Leather + Suede</li>
              </Link>
              <Link to='/WomensCoats+Parkas' >
                <li className='funk'>Coats + Parkas</li>
              </Link>
              <Link to='WomensLightweight' >
                <li className='funk'>Lightweight</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Bottoms')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Bottoms</a>
            <ul className={this.state.visibleCategory === 'Bottoms' ? 'visible' : 'hidden'}>
              <Link to='/WomensJeans' >
                <li className='funk'>Jeans</li>
              </Link>
              <Link to='/WomensPants' >
                <li className='funk'>Pants</li>
              </Link>
              <Link to='/WomensOveralls+Coveralls' >
                <li className='funk'>Overalls + Coveralls</li>
              </Link>
              <Link to='/WomensSkirts' >
                <li className='funk'>Skirts</li>
              </Link>
              <Link to='/WomensShorts' >
                <li className='funk'>Shorts</li>
              </Link>
              <Link to='/WomensLeggings' >
                <li className='funk'>Leggings</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Intimates')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Intimates</a>
            <ul className={this.state.visibleCategory === 'Intimates' ? 'visible' : 'hidden'}>
              <Link to='/WomensLingerieSets' >
                <li className='funk'>Lingerie Sets</li>
              </Link>
              <Link to='/WomensBras+Bralettes' >
                <li className='funk'>Bras + Bralettes</li>
              </Link>
              <Link to='/WomensUndies' >
                <li className='funk'>Undies</li>
              </Link>
              <Link to='/womensbodysuits' >
                <li className='funk'>Bodysuits</li>
              </Link>
              <Link to='/WomensLoungeTops' >
                <li className='funk'>Lounge Tops</li>
              </Link>
              <Link to='/WomensLoungeBottoms' >
                <li className='funk'>Lounge Bottoms</li>
              </Link>
              <Link to='/Slips+Rompers' >
                <li className='funk'>Slips + Rompers</li>
              </Link>
              <Link to='/WomensSocks+Tights' >
                <li className='funk'>Socks + Tights</li>
              </Link>
              <Link to='/WomensActiveWear' >
                <li className='funk'>Activewear</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Swim')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Swim</a>
            <ul className={this.state.visibleCategory === 'Swim' ? 'visible' : 'hidden'}>
              <Link to='/WomensMix+Match' >
                <li className='funk'>Mix + Match</li>
              </Link>
              <Link to='/WomensOnePieces' >
                <li className='funk'>One Pieces</li>
              </Link>
              <Link to='/WomensBikiniTops' >
                <li className='funk'>Bikini Tops</li>
              </Link>
              <Link to='/WomensBikiniBottoms' >
                <li className='funk'>Bikini Bottoms</li>
              </Link>
              <Link to='/WomensBeachTowels' >
                <li className='funk'>Beach Towels</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Vintage')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Vintage</a>
            <ul className={this.state.visibleCategory === 'Vintage' ? 'visible' : 'hidden'}>
              <Link to='/WomensVintageDresses+Rompers' >
                <li className='funk'>Dresses + Rompers</li>
              </Link>
              <Link to='/WomensVintageTops+Jackets' >
                <li className='funk'>Tops + Jackets</li>
              </Link>
              <Link to='/WomensVintageBottoms' >
                <li className='funk'>Bottoms</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Beauty')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Beauty</a>
            <ul className={this.state.visibleCategory === 'Beauty' ? 'visible' : 'hidden'}>
              <Link to='/BeautyMakeup'>
                <li className='funk'>Makeup</li>
              </Link>
              <Link to='/BeautySkin+Care' >
                <li className='funk'>Skin + Care</li>
              </Link>
              <Link to='/BeautyBath+Body' >
                <li className='funk'>Bath + Body</li>
              </Link>
              <Link to='/BeautyHair' >
                <li className='funk'>Hair</li>
              </Link>
              <Link to='/BeautyNails' >
                <li className='funk'>Nails</li>
              </Link>
              <Link to='/BeautyFragrance' >
                <li className='funk'>Fragrance</li>
              </Link>
              <Link to='/BeautyWellness' >
                <li className='funk'>Wellness</li>
              </Link>
              <Link to='/BeautyAccessories' >
                <li className='funk'>Accessories</li>
              </Link>
              <Link to='/BeautyGiftSets' >
                <li className='funk'>Gift Sets</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Accessories')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Accessories</a>
            <ul className={this.state.visibleCategory === 'Accessories' ? 'visible' : 'hidden'}>
              <Link to='/WomensBags+Wallets' >
                <li className='funk'>Bags + Wallets</li>
              </Link>
              <Link tp='/WomensJewelery+Watches' >
                <li className='funk'>Jewelery + Watches </li>
              </Link>
              <Link to='/WomensScarves' >
                <li className='funk'>Scarves</li>
              </Link>
              <Link to='/WomensHats' >
                <li className='funk'>Hats</li>
              </Link>
              <Link to='/WomensBelts' >
                <li className='funk'>Belts</li>
              </Link>
              <Link to='/WomensPins+Patches' >
                <li className='funk'>Pins + Patches</li>
              </Link>
              <Link to='/WomensSunglass+Readers' >
                <li className='funk'>Sunglass + Readers</li>
              </Link>
              <Link to='/WomensHairAccessories' >
                <li className='funk'>Hair Accessories</li>
              </Link>
              <Link to='/WomensSocks+Tights' >
                <li className='funk'>Socks + Tights</li>
              </Link>
              <Link to='/TechAccessories' >
                <li className='funk'>Tech Accessories</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Shoes')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Shoes</a>
            <ul className={this.state.visibleCategory === 'Shoes' ? 'visible' : 'hidden'}>
              <Link to='/WomensSneakers' >
                <li className='funk'>Sneakers</li>
              </Link>
              <Link to='/WomensBoots+Booties' >
                <li className='funk'>Boots + Booties</li>
              </Link>
              <Link to='/WomensHeels+Wedges' >
                <li className='funk'>Heels + Wedges</li>
              </Link>
              <Link to='/WomensOxfords+Loafers' >
                <li className='funk'>Oxfords + Loafers</li>
              </Link>
              <Link to='/WomensFlats' >
                <li className='funk'>Flats</li>
              </Link>
              <Link to='/WomensSlippers' >
                <li className='funk'>Slippers</li>
              </Link>
              <Link to='/WomensSandals' >
                <li className='funk'>Sandals</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Brands')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Brands</a>
            <ul className={this.state.visibleCategory === 'Brands' ? 'visible' : 'hidden'}>
              <Link to='/BrandsAdidas' >
                <li className='funk'>adidas</li>
              </Link>
              <Link to='/BrandsCalvinKlein' >
                <li className='funk'>Calvin Klein</li>
              </Link>
              <Link to='/BrandsChampion' >
                <li className='funk'>Champion</li>
              </Link>
              <Link to='/BrandsFILA' >
                <li className='funk'>FILA</li>
              </Link>
              <Link to='/BrandsStussy' >
                <li className='funk'>Stussy</li>
              </Link>
              <Link to='/TommyJeans' >
                <li className='funk'>Tommy Jeans</li>
              </Link>
              <Link to='/AllBrands' >
                <li className='funk'>Brands A-Z</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Sale')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Sale</a>
            <ul className={this.state.visibleCategory === 'Sale' ? 'visible' : 'hidden'}>
              <Link to='/WomensSaleJustAdded' >
                <li className='funk'>Just Added</li>
              </Link>
              <Link to='/WomensSaleDresses+Rompers' >
                <li className='funk'>Dresses + Rompers</li>
              </Link>
              <Link to='/WomensSaleSweaters+Sweatshirts' >
                <li className='funk'>Sweaters + Sweatshirts</li>
              </Link>
              <Link to='/WomensSaleTops+Tees' >
                <li className='funk'>Tops + Tees</li>
              </Link>
              <Link to='/WomensSaleGraphicTees' >
                <li className='funk'>Graphic Tees</li>
              </Link>
              <Link to='/WomensSaleCoats+Jackets' >
                <li className='funk'>Coats + Jackets</li>
              </Link>
              <Link to='/WomensSaleJeansPants+Leggings' >
                <li className='funk'>Jeans,Pants + Leggings</li>
              </Link>
              <Link to='/WomensSaleShorts+Skirts' >
                <li className='funk'>Shorts + Skirts</li>
              </Link>
              <Link to='/WomensSaleIntimates' >
                <li className='funk'>Intimates</li>
              </Link>
              <Link to='/WomensSaleLounge+Activewear' >
                <li className='funk'>Lounge + Activewear</li>
              </Link>
              <Link to='/WomensSaleSwim' >
                <li className='funk'>Swim</li>
              </Link>
              <Link to='/WomensSaleShoes' >
                <li className='funk'>Shoes</li>
              </Link>
              <Link to='/WomensSaleBags+Wallets' >
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
        </ul>
      </nav>
      <main className='womenslayout'>
        <div className='womensimg1'>
          <Link to='/love' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_1?scl=1&qlt=92' alt='updatedutility' height='686px' width='565px' />
          </Link>
          <Link to='/blog' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_2?scl=1&qlt=92' alt='updatedutility' height='686px' width='565px' />
          </Link>
        </div>
        <div className='womensimg2'>
          <Link to='/womensproductpage' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_3?scl=1&qlt=92' alt='thejumpsuit' height='535px' width='380px' />
          </Link>
          <Link to='/beauty' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_4?scl=1&qlt=92' alt='thejumpsuit' height='535px' width='380px' />
          </Link>
          <Link to='/womensproductpage' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_5?scl=1&qlt=92' alt='thejumpsuit' height='535px' width='380px' />
          </Link>
        </div>
        <div className='womensimg3'>
          <Link to='/love' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_6?scl=1&qlt=92' alt='sweater' height='717px' width='565px' />
          </Link>
          <Link to='/love' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_7?scl=1&qlt=92' alt='sweater' height='717px' width='565px' />
          </Link>
        </div>
        <div className='womensimg5'>
          <Link to='/love' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_8?scl=1&qlt=92' alt='vdayshop' height='218px' width='1180px' />
          </Link>
        </div>
        <section className='womensnewarrivalswrapper'>
          <div className='womensnewarrival1'>
            <Link to='/womensproductpage' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41072794_003_b' alt='newarrival1' height='279px' width='179px' />
            </Link>
            <Link to='/womensproductpage' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41256975_030_b' alt='newarrival2' height='279px' width='179px' />
            </Link>
            <Link to='/womensproductpage' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41210246_049_b' alt='newarrival3' height='279px' width='179px' />
            </Link>
            <Link to='/womensproductpage' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41282161_066_b' alt='newarrival5' height='279px' width='179px' />
            </Link>
            <Link to='/womensproductpage' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41034919_015_b' alt='newarrival6' height='279px' width='179px' />
            </Link>
          </div>
        </section>
        <section className='womensstories'>
          <div className='womensstoriesrow'>
            <article className='womensstoriesitems'>
              <Link to='/womensproductpage' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_9?scl=1&qlt=92' alt='item1' height='717px' width='565px' />
              </Link>
              <Link to='/womensproductpage' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_10?scl=1&qlt=92' alt='item2' height='717px' width='565px' />
              </Link>
            </article>
          </div>
        </section>
        <section className='womenstrends'>
          <div className='womenstrendone'>
            <ul className='womenstrendingone'>
              <li>Champion + OU</li>
              <li>Shop By Fit</li>
              <li>LookBook:The Checklist</li>
              <li>New Stussy</li>
              <li>UO:Presents Artist Edition</li>
              <li>Vintage</li>
            </ul>
          </div>
        </section>
        <section className='womensbrands'>
          <div className='womenstrendtwo'>
            <ul className='womenstrendingtwo'>
              <li>adidas</li>
              <li>Calvin Klein</li>
              <li>Herschel Supply Co</li>
              <li>Katin</li>
              <li>Levi's</li>
              <li>Patagonia</li>
            </ul>
          </div>
        </section>
        <section className='fromtheblog'>
          <div className='blogwrapper'>
            <div className='blogitem1'>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_b_1?scl=1&qlt=92' alt='blogitem1' height='240px' width='360px' />
              </Link>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_b_2?scl=1&qlt=92' alt='blogitem2' height='240px' width='360px' />
              </Link>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_b_3?scl=1&qlt=92' alt='blogitem3' height='240px' width='360px' />
              </Link>
            </div>
            <article className='daos'>
              <div className='yourcommunity'>
                <Link to='/blog' >
                  <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/160912_uocomm_m_us?scl=1&qlt=92' alt='community' height='75px' width='1180px' />
                </Link>
              </div>
              <div className='communitytwo'>
                <Link to='/blog' >
                  <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_ig?scl=1&qlt=92' alt='num2' height='598px' width='1180px' />
                </Link>
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

export default Womens
