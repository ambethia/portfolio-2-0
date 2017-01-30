import React, { Component } from 'react'

class Blog extends Component {

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
        <ul className='blogsecondnav'>
          <li onMouseOver={() => this.showCategory('Collections')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Collections</a>
            <ul className={this.state.visibleCategory === 'Collections' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('New')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>New</a>
            <ul className={this.state.visibleCategory === 'New' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Bedding')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Bedding</a>
            <ul className={this.state.visibleCategory === 'Bedding' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Furniture')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Furniture</a>
            <ul className={this.state.visibleCategory === 'Furniture' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Lighting')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Lighting</a>
            <ul className={this.state.visibleCategory === 'Lighting' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Storage')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Storage</a>
            <ul className={this.state.visibleCategory === 'Storage' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Art + Decor')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Art + Decor</a>
            <ul className={this.state.visibleCategory === 'Art + Decor' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Kitchen + Bar')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Collections</a>
            <ul className={this.state.visibleCategory === 'Kitchen + Bar' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Bath')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Bath</a>
            <ul className={this.state.visibleCategory === 'Bath' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Books + Stationery')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Books + Stationery</a>
            <ul className={this.state.visibleCategory === 'Books + Stationery' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Part + Fun')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Party + Fun</a>
            <ul className={this.state.visibleCategory === 'Party + Fun' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Sale')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Sale</a>
            <ul className={this.state.visibleCategory === 'Sale' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
        </ul>
      </nav>
      <main className='apartmentlayout'>
        <div id='apartmentimg1'>
          <img src='http://blog.urbanoutfitters.com/files/heroScreen%20Shot%202017-01-17%20at%2012.13.32%20PM.jpg' alt='updatedutility' height='534px' width='800px' />
        </div>
        <div id='apartmentimg2'>
          <img src='http://blog.urbanoutfitters.com/files/TWO%20ONE%20600-5.jpg' alt='thejumpsuit' height='320px' width='270px' />
          <img src='http://blog.urbanoutfitters.com/files/lead_tavish-timothy-00102.jpg' alt='thejumpsuit' height='320px' width='270px' />
          <img src='http://blog.urbanoutfitters.com/files/heroUO%20dollar%20stairs%20final.jpg' alt='thejumpsuit' height='320px' width='270px' />
        </div>
        <div id='apartmentimg3'>
          <img src='http://blog.urbanoutfitters.com/files/heroTSLATES_UO_SV_40.jpg' alt='thejumpsuit' height='179px' width='320px' />
          <img src='http://blog.urbanoutfitters.com/files/UO-beauty-67.jpg' alt='thejumpsuit' height='179px' width='320px' />
          <img src='http://blog.urbanoutfitters.com/files/bowies-v3-rgb_1600_c.jpg' alt='thejumpsuit' height='179px' width='320px' />
        </div>
        <div id='apartmentimg4'>
          <img src='http://blog.urbanoutfitters.com/files/087A3410.jpg' alt='thejumpsuit' height='179px' width='320px' />
          <img src='http://blog.urbanoutfitters.com/files/hero_DSC3121.jpg' alt='thejumpsuit' height='179px' width='320px' />
          <img src='http://blog.urbanoutfitters.com/files/01_WK4_FRAGRANT_13929.jpg' alt='thejumpsuit' height='179px' width='320px' />
        </div>
        <div id='apartmentimg5'>
          <img src='http://blog.urbanoutfitters.com/files/heroScreen%20Shot%202017-01-17%20at%2011.43.08%20AM.jpg' alt='thejumpsuit' height='179px' width='320px' />
          <img src='http://blog.urbanoutfitters.com/files/heroScreen-Shot-2017-01-17-at-11.56.21-AM.jpg' alt='thejumpsuit' height='179px' width='320px' />
          <img src='http://blog.urbanoutfitters.com/files/mm_jan_5.jpg' alt='thejumpsuit' height='179px' width='320px' />
        </div>
        <div id='apartmnetimg6'>
          <img src='http://blog.urbanoutfitters.com/files/heroScreen%20Shot%202017-01-17%20at%2012.13.32%20PM.jpeg' alt='thejumpsuit' height='179px' width='320px' />
          <img src='http://blog.urbanoutfitters.com/files/hero%20Screen%20Shot%202017-01-17%20at%2011.33.08%20AM.jpg' alt='thejumpsuit' height='179px' width='320px' />
          <img src='http://blog.urbanoutfitters.com/files/heroScreen-Shot-2017-01-17-at-12.25.08-PM.jpg' alt='thejumpsuit' height='179px' width='320px' />
        </div>
        <div id='apartmnetimg7'>
          <img src='http://blog.urbanoutfitters.com/files/Screen%20Shot%202017-01-20%20at%208.45.34%20AM.jpeg' alt='thejumpsuit' height='179px' width='320px' />
          <img src='http://blog.urbanoutfitters.com/files/gassycontortionist%205.jpeg' alt='thejumpsuit' height='179px' width='320px' />
          <img src='http://blog.urbanoutfitters.com/files/Screen%20Shot%202017-01-20%20at%206.25.47%20PM.jpg' alt='thejumpsuit' height='179px' width='320px' />
        </div>
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

export default Blog
