import React, { Component } from 'react'
import { Link } from 'react-router'
class Beauty extends Component {

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
    return <div className='beauty'>
      <nav className='subnavbar'>
        <ul className='beautysecondnav'>
          <li onMouseOver={() => this.showCategory('Collections')} onMouseOut={() => this.hideCategory()}>
            <Link to='/BeautyCollections' >
              <a className='ay'>Collections</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Collections' ? 'visible' : 'hidden'}>
              <Link to='/love' >
                <li className='funk'>Valentines Day Shop</li>
              </Link>
              <Link to='/TheSunShop' >
                <li className='funk'>The Sun Shop</li>
              </Link>
              <Link to='/BeautyTopRated' >
                <li className='funk'>Top Rated</li>
              </Link>
              <Link to='/BeautyBackInStock' >
                <li className='funk'>Back In Stock</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('New')} onMouseOut={() => this.hideCategory()}>
            <Link to='/BeautyNew' >
              <a className='ay'>New</a>
            </Link>
            <ul className={this.state.visibleCategory === 'New' ? 'visible' : 'hidden'}>
              <Link to='/BeautyNewMakeup' >
                <li className='funk'>Makeup</li>
              </Link>
              <Link to='/BeautyNewSkinCare' >
                <li className='funk'>Skin Care</li>
              </Link>
              <Link to='/BeautyNewBathBody' >
                <li className='funk'>Bath + Body</li>
              </Link>
              <Link to='/BeautyNewHairNails' >
                <li className='funk'>Hair+Nails</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Makeup')} onMouseOut={() => this.hideCategory()}>
            <Link to='/BeautyMakeup' >
              <a className='ay'>Makeup</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Makeup' ? 'visible' : 'hidden'}>
              <Link to='/BeautyLipMakeup' >
                <li className='funk'>Lip</li>
              </Link>
              <Link to='/BeautyEyeMakeup' >
                <li className='funk'>Eye</li>
              </Link>
              <Link to='/BeautyFaceMakeup' >
                <li className='funk'>Face</li>
              </Link>
              <Link to='/BeautyBrowMakeup' >
                <li className='funk'>Brow</li>
              </Link>
              <Link to='/BeautyPalettesSets' >
                <li className='funk'>Palettes + Sets</li>
              </Link>
              <Link to='/BeautyBrushesApplicators' >
                <li className='funk'>Brushes + Applicators</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Skin Care')} onMouseOut={() => this.hideCategory()}>
            <Link to='/BeautySkinCare' >
              <a className='ay'>Skin Care</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Skin Care' ? 'visible' : 'hidden'}>
              <Link to='/Masks' >
                <li className='funk'>Masks</li>
              </Link>
              <Link to='/Cleansers' >
                <li className='funk'>Cleansers</li>
              </Link>
              <Link to='/Toner+Mist' >
                <li className='funk'>Toner + Mist</li>
              </Link>
              <Link to='/MoisturizerCream' >
                <li className='funk'>Moisturizer + Cream</li>
              </Link>
              <Link to='/AcneBlemish' >
                <li className='funk'>Acne + Blemish</li>
              </Link>
              <Link to='/OilSerum' >
                <li className='funk'>Oil + Serum</li>
              </Link>
              <Link to='/NaturalOrganic' >
                <li className='funk'>Natural + Organic</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Bath + Body')} onMouseOut={() => this.hideCategory()}>
            <Link to='/BeautyBathBody' >
              <a className='ay'>Bath + Body</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Bath + Body' ? 'visible' : 'hidden'}>
              <Link to='/CreamOil' >
                <li className='funk'>Cream + Oil</li>
              </Link>
              <Link to='/ShowerBath' >
                <li className='funk'>Shower + Bath</li>
              </Link>
              <Link to='/ScrubsSunCare' >
                <li className='funk'>Scrubs + Sun Care</li>
              </Link>
              <Link to='/PersonalCare' >
                <li className='funk'>Personal Care</li>
              </Link>
              <Link to='/NaturalOrganic' >
                <li className='funk'>Natural + Organic</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Hair')} onMouseOut={() => this.hideCategory()}>
            <Link to='/BeautyHair' >
              <a className='ay'>Hair</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Hair' ? 'visible' : 'hidden'}>
              <Link to='/Shampoo' >
                <li className='funk'>Shampoo</li>
              </Link>
              <Link to='/ConditionerTreatment' >
                <li className='funk'>Conditioner + Treatment</li>
              </Link>
              <Link to='/StylingProduct' >
                <li className='funk'>Styling Product</li>
              </Link>
              <Link to='/ToolsBrushes' >
                <li className='funk'>Tools + Brushes</li>
              </Link>
              <Link to='/HairAccessories' >
                <li className='funk'>Accessories</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Nails')} onMouseOut={() => this.hideCategory()}>
            <Link to='/BeautyNails' >
              <a className='ay'>Nails</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Nails' ? 'visible' : 'hidden'}>
              <Link to='/NailPolish' >
                <li className='funk'>Nail Polish</li>
              </Link>
              <Link to='/NailCareTools' >
                <li className='funk'>Nail Care + Tools</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Fragrance')} onMouseOut={() => this.hideCategory()}>
            <Link to='/BeautyFragrance' >
              <a className='ay'>Fragrance</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Fragrance' ? 'visible' : 'hidden'}>
              <Link to='/Spray' >
                <li className='funk'>Spray</li>
              </Link>
              <Link to='/RollOnOil' >
                <li className='funk'>Roll On + Oil</li>
              </Link>
              <Link to='/MultiUse' >
                <li className='funk'>Multi-Use</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Wellness')} onMouseOut={() => this.hideCategory()}>
            <Link to='/BeautyWellness' >
              <a className='ay'>Wellness</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Wellness' ? 'visible' : 'hidden'}>
              <Link to='/VitaminsSupplements' >
                <li className='funk'>Vitamins + Supplements</li>
              </Link>
              <Link to='/SuperFoodsTeas' >
                <li className='funk'>SuperFoods + Teas</li>
              </Link>
              <Link to='/OralCare' >
                <li className='funk'>Oral Care</li>
              </Link>
              <Link to='/AromaTherapy' >
                <li className='funk'>AromaTherapy</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Accessories')} onMouseOut={() => this.hideCategory()}>
            <Link to='/BeautyAccessories' >
              <a className='ay'>Accessories</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Accessories' ? 'visible' : 'hidden'}>
              <Link to='/BeautyAccessoriesBags' >
                <li className='funk'>Bags + Cases</li>
              </Link>
              <Link to='/BeautyBrushesApplicators' >
                <li className='funk'>Brushes + Applicators</li>
              </Link>
              <Link to='/BeautyBathVanity' >
                <li className='funk'>Bath + Vanity</li>
              </Link>
              <Link to='/BeautyAccessoriesHair' >
                <li className='funk'>Hair</li>
              </Link>
              <Link to='/BeautyAccessoriesBodyArt' >
                <li className='funk'>Body Art</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Mens Grooming')} onMouseOut={() => this.hideCategory()}>
            <Link to='/BeautyMensGrooming' >
              <a className='ay'>Mens Grooming</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Mens Grooming' ? 'visible' : 'hidden'}>
              <Link to='/MensBeardShave' >
                <li className='funk'>Beard + Shave</li>
              </Link>
              <Link to='/BeautyMensHair' >
                <li className='funk'>Hair</li>
              </Link>
              <Link to='/BeautyMensSkin' >
                <li className='funk'>Skin</li>
              </Link>
              <Link to='/BeautyMensCologne' >
                <li className='funk'>Cologne</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Gift Sets')} onMouseOut={() => this.hideCategory()}>
            <Link to='/BeautyGiftSets' >
              <a className='ay'>Gift Sets</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Gift Sets' ? 'visible' : 'hidden'}>
              <Link to='/ForHer' >
                <li className='funk'>For Her</li>
              </Link>
              <Link to='/ForHim' >
                <li className='funk'>For Him</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Brands')} onMouseOut={() => this.hideCategory()}>
            <Link to='/BeautyBrands' >
              <a className='ay'>Brands</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Brands' ? 'visible' : 'hidden'}>
              <Link to='/BeautyAnastasiaHills' >
                <li className='funk'>Anastasia Beverley Hills</li>
              </Link>
              <Link to='/bhcosmetics' >
                <li className='funk'>bh cosmetics</li>
              </Link>
              <Link to='/HerbivoreBotanicals' >
                <li className='funk'>Herbivore Botanicals</li>
              </Link>
              <Link to='/LimeCrime' >
                <li className='funk'>Lime Crime</li>
              </Link>
              <Link to='/MarioBadescu' >
                <li className='funk'>Mario Badescu</li>
              </Link>
              <Link to='/MilkMakeUp' >
                <li className='funk'>Milk MakeUp</li>
              </Link>
              <Link to='/ObsessiveCosmetics' >
                <li className='funk'>Obsessive Cosmetics</li>
              </Link>
              <Link to='/SigmaBeauty' >
                <li className='funk'>Sigma Beauty</li>
              </Link>
              <Link to='/Stila' >
                <li className='funk'>Stila</li>
              </Link>
              <Link to='/TONYMOLY' >
                <li className='funk'>TONYMOLY</li>
              </Link>
              <Link to='/AllBeautyBrands' >
                <li className='funk'>Brands A-Z</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Sale')} onMouseOut={() => this.hideCategory()}>
            <Link to='/BeautySale' >
              <a className='ay'>Sale</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Sale' ? 'visible' : 'hidden'} />
          </li>
        </ul>
      </nav>
      <main id='apartmentlayout'>
        <div id='apartmentimg1'>
          <Link to='/HairAccessories' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_bgw_us_1?scl=1&qlt=92' alt='updatedutility' height='708px' width='565px' />
          </Link>
          <Link to='/MakeUp' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_bgw_us_2?scl=1&qlt=92' alt='updatedutility' height='708px' width='565px' />
          </Link>
        </div>
        <div id='apartmentimg2'>
          <Link to='/BeautyNew' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_bgw_us_3?scl=1&qlt=92' alt='glow' height='528px' width='381px' />
          </Link>
          <Link to='/BeautyNew' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_bgw_us_4?scl=1&qlt=92' alt='glow' height='528px' width='381px' />
          </Link>
          <Link to='/BeautyNew' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_bgw_us_5?scl=1&qlt=92' alt='glow' height='528px' width='381px' />
          </Link>
        </div>
        <section id='apartmentarrivalswrapper'>
          <div id='apartmentnewarrival1'>
            <Link to='/BeautySale' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40812091_000_b' alt='newarrival1' height='279px' width='179px' />
            </Link>
            <Link to='/BeautyNew' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40942955_038_b' alt='newarrival2' height='279px' width='179px' />
            </Link>
            <Link to='/BeautySale' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40821829_045_b' alt='newarrival3' height='279px' width='179px' />
            </Link>
            <Link to='/BeautyNew' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40888190_086_b' alt='newarrival4' height='279px' width='179px' />
            </Link>
            <Link to='/BeautyNew' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40892119_000_b' alt='newarrival5' height='279px' width='179px' />
            </Link>
            <Link to='/BeautySale' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42040170_000_b' alt='newarrival6' height='279px' width='179px' />
            </Link>
          </div>
        </section>
        <section id='apartmentstories'>
          <div id='apartmentstoriesrow'>
            <article id='apartmentstoriesitems'>
              <Link to='/BeautyNew' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_bgw_us_6?scl=1&qlt=92' alt='item1' height='708px' width='565px' />
              </Link>
              <Link to='/BeautyTopRated' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_bgw_us_7?scl=1&qlt=92' alt='item2' height='708px' width='565px' />
              </Link>
            </article>
          </div>
        </section>
        <section id='apartmenttrends'>
          <div id='apartmenttrendone'>
            <ul id='apartmenttrendingone'>
              <li>Get The Look: Bold & Colorful</li>
              <li>2017 First Favorites</li>
              <li>LookBook: Mask Guide</li>
              <li>Mill Makeup</li>
              <li>LookBook: 5 Buzzworthy Beauty Brands</li>
              <li>LookBook: 5 Giftable Beauty Looks</li>
            </ul>
          </div>
        </section>
        <section id='apartmentbrands'>
          <div id='apartmenttrendtwo'>
            <ul id='apartmenttrendingtwo'>
              <li>Cedar + Stone</li>
              <li>TONYMOLY</li>
              <li>Anastasia Beverley Hills</li>
              <li>Herbivore Botanicals</li>
              <li>Sigma Beauty</li>
              <li>Stila</li>
            </ul>
          </div>
        </section>
        <section id='fromtheblog'>
          <div id='blogwrapper'>
            <div id='blogitem1'>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_bgw_us_b_1?scl=1&qlt=92' alt='blogitem1' height='240px' width='360px' />
              </Link>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_bgw_us_b_2?scl=1&qlt=92' alt='blogitem2' height='240px' width='360px' />
              </Link>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_bgw_us_b_3?scl=1&qlt=92' alt='blogitem3' height='240px' width='360px' />
              </Link>
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

export default Beauty
