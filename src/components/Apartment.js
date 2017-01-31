import React, { Component } from 'react'
import { Link } from 'react-router'

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
              <Link to='/TheBeddingShop' >
                <li className='funk'>The Bedding Shop</li>
              </Link>
              <Link to='/love' >
                <li className='funk'>The Valentines Day Shop</li>
              </Link>
              <Link to='/BackOnCampus' >
                <li className='funk'>Back On Campus</li>
              </Link>
              <Link to='/ThePrintShop' >
                <li className='funk'>The Print Shop</li>
              </Link>
              <Link to='/OneOfAKind' >
                <li className='funk'>One Of A Kind</li>
              </Link>
              <Link to='/blog' >
                <li className='funk'>LookBook #UO:Love Stories</li>
              </Link>
              <Link to='/blog' >
                <li className='funk'>LookBook Soft & Sweet</li>
              </Link>
              <Link to='/CabinLife' >
                <li className='funk'>Cabin Life</li>
              </Link>
              <Link to='/blog' >
                <li className='funk'>View All LookBooks</li>
              </Link>
              <Link to='/' >
                <li className='funk'>Gift Cards</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('New')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>New</a>
            <ul className={this.state.visibleCategory === 'New' ? 'visible' : 'hidden'}>
              <Link to='/ApartmentNewFurniture+RoomDecor' >
                <li className='funk'>Furniture + Room Decor</li>
              </Link>
              <Link to='ApartmentNewTextiles' >
                <li className='funk'>Textiles</li>
              </Link>
              <Link to='/ApartmentNewKitchen+Bar' >
                <li className='funk'>Kitchen + Bar</li>
              </Link>
              <Link to='/ApartmentNewParty+Fun' >
                <li className='funk'>Party + Fun</li>
              </Link>
              <Link to='/ApartmentNewBooks+Stationery' >
                <li className='funk'>Books + Stationery</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Bedding')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Bedding</a>
            <ul className={this.state.visibleCategory === 'Bedding' ? 'visible' : 'hidden'}>
              <Link to='/DuvetCovers' >
                <li className='funk'>Duvet Covers</li>
              </Link>
              <Link to='/ComfortersQuilts+Blankets' >
                <li className='funk'>Comforters,Quilts + Blankets</li>
              </Link>
              <Link to='/SnoozeSets'>
                <li className='funk'>Snooze Sets</li>
              </Link>
              <Link to='/Pillowcases+Shams' >
                <li className='funk'>Pillowcases + Shams</li>
              </Link>
              <Link to='/Pillows+Throws' >
                <li className='funk'>Pillows + Throws</li>
              </Link>
              <Link to='/Sheets' >
                <li className='funk'>Sheets</li>
              </Link>
              <Link to='/BeddingBasics' >
                <li className='funk'>Bedding Basics</li>
              </Link>
              <Link to='/Tapestries' >
                <li className='funk'>Tapestries</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Furniture')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Furniture</a>
            <ul className={this.state.visibleCategory === 'Furniture' ? 'visible' : 'hidden'}>
              <Link to='/Beds+Headboards' >
                <li className='funk'>Beds + Headboards</li>
              </Link>
              <Link to='/Sofas' >
                <li className='funk'>Sofas</li>
              </Link>
              <Link to='/Chairs' >
                <li className='funk'>Chairs</li>
              </Link>
              <Link to='/Tables' >
                <li className='funk'>Tables</li>
              </Link>
              <Link to='/Dresses+Wardrobes' >
                <li className='funk'>Dresses + Wardrobes</li>
              </Link>
              <Link to='Storage+Shelving' >
                <li className='funk'>Storage + Shelving</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Lighting')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Lighting</a>
            <ul className={this.state.visibleCategory === 'Lighting' ? 'visible' : 'hidden'}>
              <Link to='/Pendants+Sconces' >
                <li className='funk'>Pendants + Sconces</li>
              </Link>
              <Link to='/Table+DeskLamps' >
                <li className='funk'>Table + Desk Lamps</li>
              </Link>
              <Link to='/FloorLamps' >
                <li className='funk'>Floor Lamps</li>
              </Link>
              <Link to='/Novelty+StringLighting' >
                <li className='funk'>Novelty + String Lighting</li>
              </Link>
              <Link to='/Bulbs+CordKits' >
                <li className='funk'>Bulbs + Cord Kits</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Storage')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Storage</a>
            <ul className={this.state.visibleCategory === 'Storage' ? 'visible' : 'hidden'}>
              <Link to='/Shelving' >
                <li className='funk'>Shelving</li>
              </Link>
              <Link to='/Closet' >
                <li className='funk'>Closet</li>
              </Link>
              <Link to='/Kitchen' >
                <li className='funk'>Kitchen</li>
              </Link>
              <Link to='/Bathroom' >
                <li className='funk'>Bathroom</li>
              </Link>
              <Link to='/Desk' >
                <li className='funk'>Desk</li>
              </Link>
              <Link to='/Jewelery' >
                <li className='funk'>Jewelery</li>
              </Link>
              <Link to='/BasketsBins+Boxes' >
                <li className='funk'>Baskets, Bins + Boxes</li>
              </Link>
              <Link to='/Hooks+Knobs' >
                <li className='funk'>Hooks + Knobs</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Art + Decor')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Art + Decor</a>
            <ul className={this.state.visibleCategory === 'Art + Decor' ? 'visible' : 'hidden'}>
              <Link to='/Rugs' >
                <li className='funk'>Rugs</li>
              </Link>
              <Link to='/Window' >
                <li className='funk'>Window</li>
              </Link>
              <Link to='/Tapestries' >
                <li className='funk'>Tapestries</li>
              </Link>
              <Link to='/WallArt' >
                <li className='funk'>Wall Art</li>
              </Link>
              <Link to='/Frames' >
                <li className='funk'>Frames</li>
              </Link>
              <Link to='/Pillows+Throws' >
                <li className='funk'>Pillows + Throws</li>
              </Link>
              <Link to='/Planters+Terrariums' >
                <li className='funk'>Planters + Terrariums</li>
              </Link>
              <Link to='/Candles' >
                <li className='funk'>Candles</li>
              </Link>
              <Link to='/Mirrors' >
                <li className='funk'>Mirrors</li>
              </Link>
              <Link to='/Accessories' >
                <li className='funk'>Room Accessories</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Kitchen + Bar')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Kitchen + Bar</a>
            <ul className={this.state.visibleCategory === 'Kitchen + Bar' ? 'visible' : 'hidden'}>
              <Link to='/Barware+Supplies' >
                <li className='funk'>Barware + Supplies</li>
              </Link>
              <Link to='/Drinkware' >
                <li className='funk'>Drinkware</li>
              </Link>
              <Link to='/Dinnerware' >
                <li className='funk'>Dinnerware</li>
              </Link>
              <Link to='/Cookwear' >
                <li className='funk'>Cookwear</li>
              </Link>
              <Link to='/Appliances' >
                <li className='funk'>Appliances</li>
              </Link>
              <Link to='/Storage+Accessories' >
                <li className='funk'>Storage + Accessories</li>
              </Link>
              <Link to='/CookBooks' >
                <li className='funk'>Cookbooks</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Bath')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Bath</a>
            <ul className={this.state.visibleCategory === 'Bath' ? 'visible' : 'hidden'}>
              <Link to='/ShowerCurtains' >
                <li className='funk'>Shower Curtains</li>
              </Link>
              <Link to='/BathMats' >
                <li className='funk'>Bath Mats</li>
              </Link>
              <Link to='/Towels' >
                <li className='funk'>Towels</li>
              </Link>
              <Link to='/Laundry' >
                <li className='funk'>Laundry</li>
              </Link>
              <Link to='/BathAccessories' >
                <li className='funk'>Bath Accessories</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Books + Stationery')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Books + Stationery</a>
            <ul className={this.state.visibleCategory === 'Books + Stationery' ? 'visible' : 'hidden'}>
              <Link to='/Books' >
                <li className='funk'>Books</li>
              </Link>
              <Link to='/ColoringActivities' >
                <li className='funk'>Coloring Activities</li>
              </Link>
              <Link to='/Journals+Notebooks' >
                <li className='funk'>Journals + Notebooks</li>
              </Link>
              <Link to='/DeskAccessories' >
                <li className='funk'>Desk Accessories</li>
              </Link>
              <Link to='/PhotoAlbums' >
                <li className='funk'>Photo Albums</li>
              </Link>
              <Link to='/GreetingCards' >
                <li className='funk'>Greeting Cards</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Party + Fun')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Party + Fun</a>
            <ul className={this.state.visibleCategory === 'Party + Fun' ? 'visible' : 'hidden'}>
              <Link to='/Favors' >
                <li className='funk'>Favors</li>
              </Link>
              <Link to='/PartySupplies+Decoration' >
                <li className='funk'>Party Supplies + Decoration</li>
              </Link>
              <Link to='/Novelty' >
                <li className='funk'>Novelty</li>
              </Link>
              <Link to='/PoolFloats' >
                <li className='funk'>Pool Floats</li>
              </Link>
              <Link to='/Games' >
                <li className='funk'>Games</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Sale')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Sale</a>
            <ul className={this.state.visibleCategory === 'Sale' ? 'visible' : 'hidden'}>
              <Link to='/ApartmentSaleJustAdded' >
                <li className='funk'>Just Added</li>
              </Link>
              <Link to='/ApartmentSaleBedding' >
                <li className='funk'>Bedding</li>
              </Link>
              <Link to='/ApartmentSaleRug+Curtains' >
                <li className='funk'>Rugs + Curtains</li>
              </Link>
              <Link to='/ApartmentSalePillows+Tapestries' >
                <li className='funk'>Pillows + Tapestries</li>
              </Link>
              <Link to='/ApartmentSaleFurniture' >
                <li className='funk'>Furniture</li>
              </Link>
              <Link to='/ApartmentSaleRoomDecor' >
                <li className='funk'>Room Decor</li>
              </Link>
              <Link to='/ApartmentSaleKitchen+Bar' >
                <li className='funk'>Kitchen + Bar</li>
              </Link>
              <Link to='/ApartmentSaleBath' >
                <li className='funk'>Bath</li>
              </Link>
              <Link to='/ApartmentSaleBooks+Stationery' >
                <li className='funk'>Books + Stationery</li>
              </Link>
              <Link to='/ApartmentSaleParty+Fun' >
                <li className='funk'>Party + Fun</li>
              </Link>
              <Link to='/ApartmentSaleMusicTech' >
                <li className='funk'>Music + Tech</li>
              </Link>
            </ul>
          </li>
        </ul>
      </nav>
      <main id='apartmentlayout'>
        <div id='apartmentimg1'>
          <Link to='/' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170130_agw_us_1?scl=1&qlt=92' alt='updatedutility' height='678px' width='565px' />
          </Link>
          <Link to='/' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170130_agw_us_2?scl=1&qlt=92' alt='thejumpsuit' height='678px' width='565px' />
          </Link>
        </div>
        <div id='apartmentimg3'>
          <Link to='/IndoorGarden' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170130_agw_m_us_3?scl=1&qlt=92' alt='sweater' height='528px' width='380px' />
          </Link>
          <Link to='/Bedding' >
            <img src='https://images.urbanoutfitters.com/is/image/UrbanOutfitters/170130_agw_us_4?scl=1&qlt=92' alt='thejumpsuit' height='528px' width='380px' />
          </Link>
          <Link to='/Bedding' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170130_agw_us_5?scl=1&qlt=92' alt='logo' height='528px' width='380px' />
          </Link>
        </div>
        <div id='apartmentimg5'>
          <Link to='/love' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170130_agw_us_6?scl=1&qlt=92' alt='teamgraphics' height='678px' width='565px' />
          </Link>
          <Link to='/blog' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170130_agw_us_7?scl=1&qlt=92' alt='shopbyfit' height='678px' width='565px' />
          </Link>
        </div>
        <div id='apartmentimg7'>
          <Link to='/love' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_9?scl=1&qlt=92' alt='vdayshop' height='187px' width='1180px' />
          </Link>
        </div>
        <section id='apartmentarrivalswrapper'>
          <div id='apartmentnewarrival1'>
            <Link to='/apartmentnewarrivals' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42040741_020_b' alt='newarrival1' height='279px' width='179px' />
            </Link>
            <Link to='/Apartmentnewarrivals' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41975905_010_b' alt='newarrival2' height='279px' width='179px' />
            </Link>
            <Link to='/' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41138116_095_b' alt='newarrival3' height='279px' width='179px' />
            </Link>
            <Link to='/'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40859233_027_b' alt='newarrival4' height='279px' width='179px' />
            </Link>
            <Link to='/' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40719783_010_b' alt='newarrival5' height='279px' width='179px' />
            </Link>
            <Link to='/' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40418600_022_b' alt='newarrival6' height='279px' width='179px' />
            </Link>
          </div>
        </section>
        <section id='apartmentstories'>
          <div id='apartmentstoriesrow'>
            <article id='apartmentstoriesitems'>
              <Link to='/blog' >
                <img src='https://images.urbanoutfitters.com/is/image/UrbanOutfitters/170130_agw_us_8?scl=1&qlt=92' alt='item1' height='650px' width='1180px' />
              </Link>
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
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_b_1?scl=1&qlt=92' alt='blogitem1' height='240px' width='360px' />
              </Link>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_b_2?scl=1&qlt=92' alt='blogitem2' height='240px' width='360px' />
              </Link>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_b_3?scl=1&qlt=92' alt='blogitem3' height='240px' width='360px' />
              </Link>
            </div>
            <article id='daos'>
              <div id='yourcommunity'>
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/a_gw_en?scl=1&qlt=92' alt='community' height='75px' width='1180px' />
              </div>
              <div id='communitytwo'>
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_agw_us_ig?scl=1&qlt=92' alt='num2' height='598px' width='1180px' />
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

export default Apartment
