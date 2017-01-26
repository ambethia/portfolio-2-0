import React, { Component } from 'react'

class MusicTech extends Component {

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
    return <div className='MusicTech'>
      <nav className='musicsubnavbar'>
        <ul className='musicsecondnav'>
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
          <li onMouseOver={() => this.showCategory('Vinly + Cassettes')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Vinly + Cassettes</a>
            <ul className={this.state.visibleCategory === 'Vinly + Cassettes' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Record Players')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Record Players</a>
            <ul className={this.state.visibleCategory === 'Record Players' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Audio')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Audio</a>
            <ul className={this.state.visibleCategory === 'Audio' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Camera + Film')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Camera + Film</a>
            <ul className={this.state.visibleCategory === 'Camera + Film' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Phone + Tech')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Phone + Tech</a>
            <ul className={this.state.visibleCategory === 'Phone + Tech' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Gadgets')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Gadgets</a>
            <ul className={this.state.visibleCategory === 'Gadgets' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Media Storage')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Media Storage</a>
            <ul className={this.state.visibleCategory === 'Media Storage' ? 'visible' : 'hidden'}>
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
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_1?scl=1&qlt=92' alt='prynt' height='717px' width='590px' />
        </div>
        <div id='apartmentimg2'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_2?scl=1&qlt=92' alt='img2' height='624px' width='590px' />
        </div>
        <div id='apartmentimg3'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_3?scl=1&qlt=92' alt='img3' height='536px' width='1200px' />
        </div>
        <div id='apartmentimg4'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_4?scl=1&qlt=92' alt='logo' height='535px' width='386px' />
        </div>
        <div id='apartmentimg5'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_5?scl=1&qlt=92' alt='teamgraphics' height='535px' width='386px' />
        </div>
        <div id='apartmnetimg6'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_6?scl=1&qlt=92' alt='shopbyfit' height='535px' width='386px' />
        </div>
        <div id='apartmnetimg7'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_7?scl=1&qlt=92' alt='vdayshop' height='686px' width='590px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_8?scl=1&qlt=92' alt='slowjams' height='686px' width='590px' />
        </div>
        <section id='apartmentarrivalswrapper'>
          <div id='apartmentnewarrival1'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41424243_001_b' alt='newarrival1' height='279px' width='186px' />
          </div>
          <div id='apartmentnewarrival2'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41482233_066_b' alt='newarrival1' height='279px' width='186px' />
          </div>
          <div id='apartmentnewarrival3'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41395021_066_b' alt='newarrival1' height='279px' width='186px' />
          </div>
          <div id='apartmentnewarrival4'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41310004_066_b' alt='newarrival1' height='279px' width='186px' />
          </div>
          <div id='apartmentnewarrival5'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40859688_066_b' alt='newarrival1' height='279px' width='186px' />
          </div>
          <div id='apartmentnewarrival6'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42088401_001_b' alt='newarrival6' height='279px' width='186px' />
          </div>
        </section>
        <section id='apartmentstories'>
          <div id='apartmentstoriesrow'>
            <article id='apartmentstoriesitems'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_9?scl=1&qlt=92' alt='item1' height='686px' width='590px' />
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_10?scl=1&qlt=92' alt='item2' height='686px' width='590px' />
            </article>
          </div>
        </section>
        <section id='newdiscoveries'>
          <div id='newdiscoveries'>
            <ul id='newdiscoveries'>
              <li><img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_mm1?scl=1' alt='item2' height='170px' width='170px' /></li>
              <li><img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_mm2?scl=1' alt='item2' height='170px' width='170px' /></li>
              <li><img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_mm3?scl=1' alt='item2' height='170px' width='170px' /></li>
            </ul>
          </div>
        </section>
        <section id='apartmentbrands'>
          <div id='apartmenttrendtwo'>
            <ul id='apartmenttrendingtwo'>
              <li><img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_p_1?scl=1' alt='item2' height='170px' width='170px' /></li>
              <li><img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_p_2?scl=1' alt='item2' height='170px' width='170px' /></li>
              <li><img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_p_3?scl=1' alt='item2' height='170px' width='170px' /></li>
            </ul>
          </div>
        </section>
        <section id='fromtheblog'>
          <div id='blogwrapper'>
            <div id='blogitem1'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_b_1?scl=1&qlt=92' alt='blogitem1' height='240px' width='360px' />
            </div>
            <div id='blogitem2'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_b_2?scl=1&qlt=92' alt='blogitem2' height='240px' width='360px' />
            </div>
            <div id='blogitem3'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_b_3?scl=1&qlt=92' alt='blogitem3' height='240px' width='360px' />
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

export default MusicTech
