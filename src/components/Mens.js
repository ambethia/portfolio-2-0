import React, { Component } from 'react'
// import { Link } from 'react-router'

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
              <li className='funk'>Valentine's Day Shop</li>
              <li className='funk'>UO: Exclusives</li>
              <li className='funk'>LookBook: #UO:Love Stories</li>
              <li className='funk'>LookBook: The Checklist</li>
              <li className='funk'>View all LookBooks</li>
              <li className='funk'>Gift Cards</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('New')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>New</a>
            <ul className={this.state.visibleCategory === 'New' ? 'visible' : 'hidden'}>
              <li className='funk'>Jackets + Coats</li>
              <li className='funk'>Graphics</li>
              <li className='funk'>Tops</li>
              <li className='funk'>Bottoms</li>
              <li className='funk'>Shoes</li>
              <li className='funk'>Accessories</li>
              <li className='funk'>Grooming</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Graphic Tees')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Graphic Tees</a>
            <ul className={this.state.visibleCategory === 'Graphic Tees' ? 'visible' : 'hidden'}>
              <li className='funk'>Brand + Logos</li>
              <li className='funk'>Music</li>
              <li className='funk'>Sport + Athletic</li>
              <li className='funk'>Pop Culture</li>
              <li className='funk'>Art + Design</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Tops')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Tops</a>
            <ul className={this.state.visibleCategory === 'Tops' ? 'visible' : 'hidden'}>
              <li className='funk'>Hoodies + Sweatshirts</li>
              <li className='funk'>Tees</li>
              <li className='funk'>Shirts</li>
              <li className='funk'>Sweaters</li>
              <li className='funk'>Graphic Tees</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Jackets')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Jackets</a>
            <ul className={this.state.visibleCategory === 'Jackets' ? 'visible' : 'hidden'}>
              <li className='funk'>Bomber</li>
              <li className='funk'>Denim + Trucker</li>
              <li className='funk'>Windbreaker</li>
              <li className='funk'>Leather + Suede</li>
              <li className='funk'>Coats</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Bottoms')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Bottoms</a>
            <ul className={this.state.visibleCategory === 'Bottoms' ? 'visible' : 'hidden'}>
              <li className='funk'>Pants</li>
              <li className='funk'>Jeans</li>
              <li className='funk'>Overalls + Coveralls</li>
              <li className='funk'>Athletic</li>
              <li className='funk'>Shorts</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Shoes')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Shoes</a>
            <ul className={this.state.visibleCategory === 'Shoes' ? 'visible' : 'hidden'}>
              <li className='funk'>Sneakers</li>
              <li className='funk'>Boots</li>
              <li className='funk'>Dress Shoes</li>
              <li className='funk'>Slippers + Sandals</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Accessories')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Accessories</a>
            <ul className={this.state.visibleCategory === 'Accessories' ? 'visible' : 'hidden'}>
              <li className='funk'>Hats + Beanies</li>
              <li className='funk'>Bags + Wallets</li>
              <li className='funk'>Pins + Patches</li>
              <li className='funk'>Sunglasses + Readers</li>
              <li className='funk'>Watches + Jewelery</li>
              <li className='funk'>Bandanas</li>
              <li className='funk'>Belts</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Sock + Underwear')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Socks + Underwear</a>
            <ul className={this.state.visibleCategory === 'Sock + Underwear' ? 'visible' : 'hidden'}>
              <li className='funk'>Socks</li>
              <li className='funk'>Underwear</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Grooming')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Grooming</a>
            <ul className={this.state.visibleCategory === 'Grooming' ? 'visible' : 'hidden'}>
              <li className='funk'>Beard + Shave</li>
              <li className='funk'>Hair</li>
              <li className='funk'>Skin</li>
              <li className='funk'>Cologone</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Brands')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Brands</a>
            <ul className={this.state.visibleCategory === 'Brands' ? 'visible' : 'hidden'}>
              <li className='funk'>adidas</li>
              <li className='funk'>Alpha Industries</li>
              <li className='funk'>Stussy</li>
              <li className='funk'>Patagonia</li>
              <li className='funk'>Calvin Klein</li>
              <li className='funk'>BDG</li>
              <li className='funk'>Reebok</li>
              <li className='funk'>FILA</li>
              <li className='funk'>UrbanOutfitters</li>
              <li className='funk'>Brands A-Z</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Sale')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Sale</a>
            <ul className={this.state.visibleCategory === 'Sale' ? 'visible' : 'hidden'}>
              <li className='funk'>Just Added</li>
              <li className='funk'>Graphic Tees</li>
              <li className='funk'>Tees + Tanks</li>
              <li className='funk'>Shirts</li>
              <li className='funk'>Sweaters + Sweatshirts</li>
              <li className='funk'>Coats + Jackets</li>
              <li className='funk'>Jeans + Pants</li>
              <li className='funk'>Shoes</li>
              <li className='funk'>Hats + Beanies</li>
              <li className='funk'>Accessories</li>
            </ul>
          </li>
        </ul>
      </nav>
      <main className='menslayout'>
        <div id='mensimg1'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_1?scl=1&qlt=92' alt='shoe' height='686px' width='590px' />
        </div>
        <div id='mensimg2'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_2?scl=1&qlt=92' alt='jackets' height='686px' width='590px' />
        </div>
        <div id='mensimg3'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_3?scl=1&qlt=92' alt='sweater' height='535px' width='386px' />
        </div>
        <div id='mensimg4'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_4?scl=1&qlt=92' alt='logo' height='535px' width='386px' />
        </div>
        <div id='mensimg5'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_5?scl=1&qlt=92' alt='teamgraphics' height='535px' width='386px' />
        </div>
        <div id='mensimg6'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_6?scl=1&qlt=92' alt='shopbyfit' height='535px' width='386px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_7?scl=1&qlt=92' alt='shopbyfit2' height='535px' width='386px' />
        </div>
        <section id='newarrivalswrapper'>
          <div id='newarrival1'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41139395_092_b' alt='newarrival1' height='279px' width='179px' />
          </div>
          <div id='newarrival2'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41891920_010_b' alt='newarrival2' height='279px' width='179px' />
          </div>
          <div id='newarrival3'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40315293_016_b' alt='newarrival3' height='279px' width='179px' />
          </div>
          <div id='newarrival4'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40722191_106_b' alt='newarrival4' height='279px' width='179px' />
          </div>
          <div id='newarrival5'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41377227_072_b' alt='newarrival5' height='279px' width='179px' />
          </div>
          <div id='newarrival6'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41460627_060_b' alt='newarrival6' height='279px' width='179px' />
          </div>
        </section>
        <section id='morestories'>
          <div id='morestoriesrow'>
            <article id='morestoriesitems'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_8?scl=1&qlt=92' alt='item1' height='686px' width='590px' />
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_9?scl=1&qlt=92' alt='item2' height='686px' width='590px' />
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
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_b_1?scl=1&qlt=92' alt='blogitem1' height='240px' width='360px' />
            </div>
            <div id='blogitem2'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_b_2?scl=1&qlt=92' alt='blogitem2' height='240px' width='360px' />
            </div>
            <div id='blogitem3'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_b_3?scl=1&qlt=92' alt='blogitem3' height='240px' width='360px' />
            </div>
            <article id='daos'>
              <div id='yourcommunity'>
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/160912_uocomm_m_us?scl=1&qlt=92' alt='community' height='75px' width='1200px' />
              </div>
              <div id='communitytwo'>
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mgw_us_ig?scl=1&qlt=92' alt='num2' height='598px' width='1200px' />
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

export default Mens
