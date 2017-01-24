import React, { Component } from 'react'

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
              <li className='funk'><a href='#'> Valentine's Day Shop</a></li>
              <li className='funk'>Back in Stock</li>
              <li className='funk'>LookBook: #UO:Love Stories</li>
              <li className='funk'>LookBook: Modern Monochrome</li>
              <li className='funk'>LookBook: Class of 2017</li>
              <li className='funk'>View all LookBooks</li>
              <li className='funk'>Gift Cards</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('new')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>New</a>
            <ul className={this.state.visibleCategory === 'new' ? 'visible' : 'hidden'}>
              <li className='funk'>Dresses + Rompers</li>
              <li className='funk'>Tops + Jackets</li>
              <li className='funk'>Bottoms</li>
              <li className='funk'>Accessories</li>
              <li className='funk'>Shoes</li>
              <li className='funk'>Intimates + Lounge</li>
              <li className='funk'>Swim</li>
              <li className='funk'>intage</li>
              <li className='funk'>Beauty</li>
            </ul>
          </li>

          <li onMouseOver={() => this.showCategory('Dresses + Rompers')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Dresses + Rompers</a>
            <ul className={this.state.visibleCategory === 'Dresses + Rompers' ? 'visible' : 'hidden'}>
              <li className='funk'>Casual</li>
              <li className='funk'>Going Out</li>
              <li className='funk'>Party + Celebration</li>
              <li className='funk'>Rompers + Jumpsuits</li>
              <li className='funk'>Mini</li>
              <li className='funk'>Midi + Maxi</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Tops')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Tops</a>
            <ul className={this.state.visibleCategory === 'Tops' ? 'visible' : 'hidden'}>
              <li className='funk'>Sweatshirts + Pullovers</li>
              <li className='funk'>Going Out Tops</li>
              <li className='funk'>Sweaters + Cardigan</li>
              <li className='funk'>Shirts + Blouses</li>
              <li className='funk'>Basic Tees</li>
              <li className='funk'>Graphic Tees</li>
              <li className='funk'>Tanks</li>
              <li className='funk'>Bodysuits</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Womens Jackets')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Womens Jackets</a>
            <ul className={this.state.visibleCategory === 'Womens Jackets' ? 'visible' : 'hidden'}>
              <li className='funk'>Bombers</li>
              <li className='funk'>Denim</li>
              <li className='funk'>Leather + Suede</li>
              <li className='funk'>Coats + Parkas</li>
              <li className='funk'>Lightweight</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Bottoms')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Bottoms</a>
            <ul className={this.state.visibleCategory === 'Bottoms' ? 'visible' : 'hidden'}>
              <li className='funk'>Jeans</li>
              <li className='funk'>Pants</li>
              <li className='funk'>Overalls + Coveralls</li>
              <li className='funk'>Skirts</li>
              <li className='funk'>Shorts</li>
              <li className='funk'>Leggings</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Intimates')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Intimates</a>
            <ul className={this.state.visibleCategory === 'Intimates' ? 'visible' : 'hidden'}>
              <li className='funk'>Lingerie Sets</li>
              <li className='funk'>Bras + Bralettes</li>
              <li className='funk'>Undies</li>
              <li className='funk'>Bodysuits</li>
              <li className='funk'>Lounge Tops</li>
              <li className='funk'>Lounge Bottoms</li>
              <li className='funk'>Slips + Rompers</li>
              <li className='funk'>Socks + Tights</li>
              <li className='funk'>Activewear</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Swim')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Swim</a>
            <ul className={this.state.visibleCategory === 'Swim' ? 'visible' : 'hidden'}>
              <li className='funk'>Mix + Match</li>
              <li className='funk'>One Pieces</li>
              <li className='funk'>Bikini Tops</li>
              <li className='funk'>Bikini Bottoms</li>
              <li className='funk'>Beach Towels</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Vintage')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Vintage</a>
            <ul className={this.state.visibleCategory === 'Vintage' ? 'visible' : 'hidden'}>
              <li className='funk'>Dresses + Rompers</li>
              <li className='funk'>Tops + Jackets</li>
              <li className='funk'>Bottoms</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Beauty')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Beauty</a>
            <ul className={this.state.visibleCategory === 'Beauty' ? 'visible' : 'hidden'}>
              <li className='funk'>Makeup</li>
              <li className='funk'>Skin + Care</li>
              <li className='funk'>Bath + Body</li>
              <li className='funk'>Hair</li>
              <li className='funk'>Nails</li>
              <li className='funk'>Fragrance</li>
              <li className='funk'>Wellness</li>
              <li className='funk'>Accessories</li>
              <li className='funk'>Gift Sets</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Accessories')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Accessories</a>
            <ul className={this.state.visibleCategory === 'Accessories' ? 'visible' : 'hidden'}>
              <li className='funk'>Bags + Wallets</li>
              <li className='funk'>Jewelery + Watches </li>
              <li className='funk'>Scarves</li>
              <li className='funk'>Hats</li>
              <li className='funk'>Belts</li>
              <li className='funk'>Pins + Patches</li>
              <li className='funk'>Sunglass + Readers</li>
              <li className='funk'>Hair Accessories</li>
              <li className='funk'>Socks + Tights</li>
              <li className='funk'>Tech Accessories</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Shoes')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Shoes</a>
            <ul className={this.state.visibleCategory === 'Shoes' ? 'visible' : 'hidden'}>
              <li className='funk'>Sneakers</li>
              <li className='funk'>Boots + Booties</li>
              <li className='funk'>Heels + Wedges</li>
              <li className='funk'>Oxfords + Loafers</li>
              <li className='funk'>Flats</li>
              <li className='funk'>Slippers</li>
              <li className='funk'>Sandals</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Brands')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Brands</a>
            <ul className={this.state.visibleCategory === 'Brands' ? 'visible' : 'hidden'}>
              <li className='funk'>adidas</li>
              <li className='funk'>Calvin Klein</li>
              <li className='funk'>Champion</li>
              <li className='funk'>FILA</li>
              <li className='funk'>Stussy</li>
              <li className='funk'>Tommy Jeans</li>
              <li className='funk'>Brands A-Z</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Sale')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Sale</a>
            <ul className={this.state.visibleCategory === 'Sale' ? 'visible' : 'hidden'}>
              <li className='funk'>Just Added</li>
              <li className='funk'>Dresses + Rompers</li>
              <li className='funk'>Sweaters + Sweatshirts</li>
              <li className='funk'>Tops + Tees</li>
              <li className='funk'>Graphic Tees</li>
              <li className='funk'>Coats + Jackets</li>
              <li className='funk'>Jeans,Pants + Leggings</li>
              <li className='funk'>Shorts + Skirts</li>
              <li className='funk'>Intimates</li>
              <li className='funk'>Lounge + Activewear</li>
              <li className='funk'>Swim</li>
              <li className='funk'>Shoes</li>
              <li className='funk'>Bags + Wallets</li>
              <li className='funk'>Accessories</li>
              <li className='funk'>Beauty</li>
            </ul>
          </li>
        </ul>
      </nav>
      <main className='womenslayout'>
        <div id='womensimg1'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_1?scl=1&qlt=92' alt='updatedutility' height='686px' width='590px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_2?scl=1&qlt=92' alt='updatedutility' height='686px' width='590px' />
        </div>
        <div id='womensimg2'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_3?scl=1&qlt=92' alt='thejumpsuit' height='535px' width='386px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_4?scl=1&qlt=92' alt='thejumpsuit' height='535px' width='386px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_5?scl=1&qlt=92' alt='thejumpsuit' height='535px' width='386px' />
        </div>
        <div id='womensimg3'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_6?scl=1&qlt=92' alt='sweater' height='717px' width='590px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_7?scl=1&qlt=92' alt='sweater' height='717px' width='590px' />
        </div>
        <div id='womensimg5'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_8?scl=1&qlt=92' alt='vdayshop' height='218px' width='1200px' />
        </div>
        <section id='womensnewarrivalswrapper'>
          <div id='womensnewarrival1'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41072794_003_b' alt='newarrival1' height='279px' width='179px' />
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41256975_030_b' alt='newarrival2' height='279px' width='179px' />
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41210246_049_b' alt='newarrival3' height='279px' width='179px' />
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41282161_066_b' alt='newarrival5' height='279px' width='179px' />
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41034919_015_b' alt='newarrival6' height='279px' width='179px' />
          </div>
        </section>
        <section id='womensstories'>
          <div id='womensstoriesrow'>
            <article id='womensstoriesitems'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_9?scl=1&qlt=92' alt='item1' height='717px' width='590px' />
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_10?scl=1&qlt=92' alt='item2' height='717px' width='590px' />
            </article>
          </div>
        </section>
        <section id='womenstrends'>
          <div id='womenstrendone'>
            <ul id='womenstrendingone'>
              <li>Champion + OU</li>
              <li>Shop By Fit</li>
              <li>LookBook:The Checklist</li>
              <li>New Stussy</li>
              <li>UO:Presents Artist Edition</li>
              <li>Vintage</li>
            </ul>
          </div>
        </section>
        <section id='womensbrands'>
          <div id='womenstrendtwo'>
            <ul id='womenstrendingtwo'>
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
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_b_1?scl=1&qlt=92' alt='blogitem1' height='240px' width='360px' />
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_b_2?scl=1&qlt=92' alt='blogitem2' height='240px' width='360px' />
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_b_3?scl=1&qlt=92' alt='blogitem3' height='240px' width='360px' />
            </div>
            <article id='daos'>
              <div id='yourcommunity'>
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/160912_uocomm_m_us?scl=1&qlt=92' alt='community' height='75px' width='1200px' />
              </div>
              <div id='communitytwo'>
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_ig?scl=1&qlt=92' alt='num2' height='598px' width='1200px' />
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
              <li className='signup'>Order Status</li>
              <li>Orders & Payments</li>
              <li>Shipping</li>
              <li>Returns & Exchanges</li>
              <li>FAQ</li>
              <li>Gift Cards</li>
              <li>Contact Us</li>
              <div className='column2'>
                <ul className='quick'>
                  <b>Quick Links</b>
                  <li className='signup'>In-Store Pickup</li>
                  <li>Brands</li>
                  <li>Careers</li>
                  <li>Shop SA</li>
                  <li>Shop Europe</li>
                  <li>Shop Canada</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </ul>
            <div className='offers'>
              <ul className='offers'>
                <b className='moveup'>Get Special Offers if you sign up here!</b>
                <li className='signups'>Twitter</li>
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Spotify</li>
                <li>Soundcloud</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
        <ul className='apps'>
          <li>App Store</li>
          <li>Google Play</li>
          <li>Amazon</li>
        </ul>
        Made With &hearts; in St Pete
      </footer>
    </div>
  }
  }

export default Womens
