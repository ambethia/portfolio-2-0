import React, { Component } from 'react'
// import { Link } from 'react-router'

class Apartment extends Component {

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
    return <div className='Apartment'>
      <nav className='apartmentsubnavbar'>
        <ul className='apartmentsecondnav'>
          <li onMouseOver={() => this.showCategory('Collections')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Collections</a>
            <ul className={this.state.visibleCategory === 'Collections' ? 'visible' : 'hidden'}>
              <li className='funk'>The Bedding Shop</li>
              <li className='funk'>The Valentines Day Shop</li>
              <li className='funk'>Back On Campus</li>
              <li className='funk'>The Print Shop</li>
              <li className='funk'>One Of A Kind</li>
              <li className='funk'>LookBook #UO:Love Stories</li>
              <li className='funk'>LookBook Soft & Sweet</li>
              <li className='funk'>Cabin Life</li>
              <li className='funk'>View All LookBooks</li>
              <li className='funk'>Gift Cards</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('New')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>New</a>
            <ul className={this.state.visibleCategory === 'New' ? 'visible' : 'hidden'}>
              <li className='funk'>Furniture + Room Decor</li>
              <li className='funk'>Textiles</li>
              <li className='funk'>Kitchen + Bar</li>
              <li className='funk'>Party + Fun</li>
              <li className='funk'>Books + Stationery</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Bedding')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Bedding</a>
            <ul className={this.state.visibleCategory === 'Bedding' ? 'visible' : 'hidden'}>
              <li className='funk'>Duvet Covers</li>
              <li className='funk'>Comforters,Quilts + Blankets</li>
              <li className='funk'>Snooze Sets</li>
              <li className='funk'>Pillowcases + Shams</li>
              <li className='funk'>Pillows + Throws</li>
              <li className='funk'>Sheets</li>
              <li className='funk'>Bedding Basics</li>
              <li className='funk'>Tapestries</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Furniture')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Furniture</a>
            <ul className={this.state.visibleCategory === 'Furniture' ? 'visible' : 'hidden'}>
              <li className='funk'>Beds + Headboards</li>
              <li className='funk'>Sofas</li>
              <li className='funk'>Chairs</li>
              <li className='funk'>Tables</li>
              <li className='funk'>Dresses + Wardrobes</li>
              <li className='funk'>Storage + Shelving</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Lighting')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Lighting</a>
            <ul className={this.state.visibleCategory === 'Lighting' ? 'visible' : 'hidden'}>
              <li className='funk'>Pendants + Sconces</li>
              <li className='funk'>Table + Desk Lamps</li>
              <li className='funk'>Floor Lamps</li>
              <li className='funk'>Novelty + String Lighting</li>
              <li className='funk'>Bulbs + Cord Kits</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Storage')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Storage</a>
            <ul className={this.state.visibleCategory === 'Storage' ? 'visible' : 'hidden'}>
              <li className='funk'>Shelving</li>
              <li className='funk'>Closet</li>
              <li className='funk'>Kitchen</li>
              <li className='funk'>Bathroom</li>
              <li className='funk'>Desk</li>
              <li className='funk'>Jewelery</li>
              <li className='funk'>Baskets, Bins + Boxes</li>
              <li className='funk'>Hooks + Knobs</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Art + Decor')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Art + Decor</a>
            <ul className={this.state.visibleCategory === 'Art + Decor' ? 'visible' : 'hidden'}>
              <li className='funk'>Rugs</li>
              <li className='funk'>Window</li>
              <li className='funk'>Tapestries</li>
              <li className='funk'>Wall Art</li>
              <li className='funk'>Frames</li>
              <li className='funk'>Pillows + Throws</li>
              <li className='funk'>Planters + Terrariums</li>
              <li className='funk'>Candles</li>
              <li className='funk'>Mirrors</li>
              <li className='funk'>Room Accessories</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Kitchen + Bar')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Kitchen + Bar</a>
            <ul className={this.state.visibleCategory === 'Kitchen + Bar' ? 'visible' : 'hidden'}>
              <li className='funk'>Barware + Supplies</li>
              <li className='funk'>Drinkware</li>
              <li className='funk'>Dinnerware</li>
              <li className='funk'>Cookwear</li>
              <li className='funk'>Appliances</li>
              <li className='funk'>Storage + Accessories</li>
              <li className='funk'>Cookbooks</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Bath')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Bath</a>
            <ul className={this.state.visibleCategory === 'Bath' ? 'visible' : 'hidden'}>
              <li className='funk'>Shower Curtains</li>
              <li className='funk'>Bath Mats</li>
              <li className='funk'>Towels</li>
              <li className='funk'>Laundry</li>
              <li className='funk'>Bath Accessories</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Books + Stationery')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Books + Stationery</a>
            <ul className={this.state.visibleCategory === 'Books + Stationery' ? 'visible' : 'hidden'}>
              <li className='funk'>Books</li>
              <li className='funk'>Coloring Activities</li>
              <li className='funk'>Journals + Notebooks</li>
              <li className='funk'>Desk Accessories</li>
              <li className='funk'>Photo Albums</li>
              <li className='funk'>Greeting Cards</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Party + Fun')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Party + Fun</a>
            <ul className={this.state.visibleCategory === 'Party + Fun' ? 'visible' : 'hidden'}>
              <li className='funk'>Favors</li>
              <li className='funk'>Party Supplies + Decoration</li>
              <li className='funk'>Novelty</li>
              <li className='funk'>Pool Floats</li>
              <li className='funk'>Games</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Sale')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Sale</a>
            <ul className={this.state.visibleCategory === 'Sale' ? 'visible' : 'hidden'}>
              <li className='funk'>Just Added</li>
              <li className='funk'>Bedding</li>
              <li className='funk'>Rugs + Curtains</li>
              <li className='funk'>Pillows + Tapestries</li>
              <li className='funk'>Furniture</li>
              <li className='funk'>Room Decor</li>
              <li className='funk'>Kitchen + Bar</li>
              <li className='funk'>Bath</li>
              <li className='funk'>Books + Stationery</li>
              <li className='funk'>Party + Fun</li>
              <li className='funk'>Music + Tech</li>
            </ul>
          </li>
        </ul>
      </nav>
      <main className='apartmentlayout'>
        <div id='apartmentimg1'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_HomeSale_us_agw_A?scl=1&qlt=92' alt='updatedutility' height='187px' width='1200px' />
        </div>
        <div id='apartmentimg2'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_1?scl=1&qlt=92' alt='thejumpsuit' height='624px' width='590px' />
        </div>
        <div id='apartmentimg3'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_2?scl=1&qlt=92' alt='sweater' height='535px' width='386px' />
        </div>
        <div id='apartmentimg4'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_3?scl=1&qlt=92' alt='logo' height='535px' width='386px' />
        </div>
        <div id='apartmentimg5'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_4?scl=1&qlt=92' alt='teamgraphics' height='535px' width='386px' />
        </div>
        <div id='apartmnetimg6'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_5?scl=1&qlt=92' alt='shopbyfit' height='535px' width='386px' />
        </div>
        <div id='apartmnetimg7'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_9?scl=1&qlt=92' alt='vdayshop' height='187px' width='1200px' />
        </div>
        <section id='apartmentarrivalswrapper'>
          <div id='apartmentnewarrival1'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42040741_020_b' alt='newarrival1' height='279px' width='179px' />
          </div>
          <div id='apartmentnewarrival2'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41975905_010_b' alt='newarrival2' height='279px' width='179px' />
          </div>
          <div id='apartmentnewarrival3'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41138116_095_b' alt='newarrival3' height='279px' width='179px' />
          </div>
          <div id='apartmentnewarrival4'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40859233_027_b' alt='newarrival4' height='279px' width='179px' />
          </div>
          <div id='apartmentnewarrival5'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40719783_010_b' alt='newarrival5' height='279px' width='179px' />
          </div>
          <div id='apartmentnewarrival6'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40418600_022_b' alt='newarrival6' height='279px' width='179px' />
          </div>
        </section>
        <section id='apartmentstories'>
          <div id='apartmentstoriesrow'>
            <article id='apartmentstoriesitems'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_10?scl=1&qlt=92' alt='item1' height='686px' width='590px' />
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_11?scl=1&qlt=92' alt='item2' height='686px' width='590px' />
            </article>
          </div>
        </section>
        <section id='apartmenttrends'>
          <div id='apartmenttrendone'>
            <ul id='apartmenttrendingone'>
              <li>LookBook:Soft & Sweet</li>
              <li>Back On Campus</li>
              <li>Desk + Storage</li>
              <li>Small Space Decor</li>
              <li>Eat + Drink</li>
              <li>Bath + Laundry</li>
            </ul>
          </div>
        </section>
        <section id='apartmentbrands'>
          <div id='apartmenttrendtwo'>
            <ul id='apartmenttrendingtwo'>
              <li>DENY Designs</li>
              <li>FujiFilm</li>
              <li>Crosley</li>
              <li>S'well</li>
              <li>Sonix</li>
              <li>Umbra</li>
            </ul>
          </div>
        </section>
        <section id='fromtheblog'>
          <div id='blogwrapper'>
            <div id='blogitem1'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_b_1?scl=1&qlt=92' alt='blogitem1' height='240px' width='360px' />
            </div>
            <div id='blogitem2'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_b_2?scl=1&qlt=92' alt='blogitem2' height='240px' width='360px' />
            </div>
            <div id='blogitem3'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_b_3?scl=1&qlt=92' alt='blogitem3' height='240px' width='360px' />
            </div>
            <article id='daos'>
              <div id='yourcommunity'>
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/a_gw_en?scl=1&qlt=92' alt='community' height='75px' width='1200px' />
              </div>
              <div id='communitytwo'>
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_ig?scl=1&qlt=92' alt='num2' height='598px' width='1200px' />
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

export default Apartment
