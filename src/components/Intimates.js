import React, { Component } from 'react'

class Intimates extends Component {

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
        <ul className='apartmentsecondnav'>
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
          <li onMouseOver={() => this.showCategory('Swim')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Swim</a>
            <ul className={this.state.visibleCategory === 'Swim' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Lingerie Sets')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Lingerie Sets</a>
            <ul className={this.state.visibleCategory === 'Lingerie Sets' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Bras + Bralettes')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Bras + Bralettes</a>
            <ul className={this.state.visibleCategory === 'Bras + Bralettes' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Undies')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Undies</a>
            <ul className={this.state.visibleCategory === 'Undies' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Bodysuits')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Bodysuits</a>
            <ul className={this.state.visibleCategory === 'Bodysuits' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Slips + Rompers')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Slips + Rompers</a>
            <ul className={this.state.visibleCategory === 'Slips + Rompers' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Lounge')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Lounge</a>
            <ul className={this.state.visibleCategory === 'Lounge' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Activewear')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Activewear</a>
            <ul className={this.state.visibleCategory === 'Activewear' ? 'visible' : 'hidden'}>
              <li className='funk'>Valentines Day Shop</li>
              <li className='funk'>For The Record Music Newsletter</li>
              <li className='funk'>UO Exclusives</li>
              <li className='funk'>LookBook</li>
              <li className='funk'>View All LookBook</li>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Socks + Tights')} onMouseOut={() => this.hideCategory()}>
            <a className='ay'>Socks + Tights</a>
            <ul className={this.state.visibleCategory === 'Socks + Tights' ? 'visible' : 'hidden'}>
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
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_1?scl=1&qlt=92' alt='updatedutility' height='717px' width='590px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_2?scl=1&qlt=92' alt='thejumpsuit' height='717px' width='590px' />
        </div>
        <div id='apartmentimg3'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_3?scl=1&qlt=92' alt='sweater' height='535px' width='386px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_4?scl=1&qlt=92' alt='logo' height='535px' width='386px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_5?scl=1&qlt=92' alt='logo' height='535px' width='386px' />
        </div>
        <div id='apartmentimg5'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_6?scl=1&qlt=92' alt='teamgraphics' height='717px' width='590px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_7?scl=1&qlt=92' alt='teamgraphics' height='717px' width='590px' />
        </div>
        <div id='apartmnetimg7'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_8?scl=1&qlt=92' alt='vdayshop' height='187px' width='1200px' />
        </div>
        <section id='apartmentarrivalswrapper'>
          <div id='apartmentnewarrival1'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41686981_001_b' alt='newarrival1' height='279px' width='179px' />
          </div>
          <div id='apartmentnewarrival2'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41414285_083_b' alt='newarrival2' height='279px' width='179px' />
          </div>
          <div id='apartmentnewarrival3'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41327545_083_b' alt='newarrival3' height='279px' width='179px' />
          </div>
          <div id='apartmentnewarrival4'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41239484_001_b' alt='newarrival4' height='279px' width='179px' />
          </div>
          <div id='apartmentnewarrival5'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41239203_001_b' alt='newarrival5' height='279px' width='179px' />
          </div>
          <div id='apartmentnewarrival6'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40987067_001_b' alt='newarrival6' height='279px' width='179px' />
          </div>
        </section>
        <section id='apartmentstories'>
          <div id='apartmentstoriesrow'>
            <article id='apartmentstoriesitems'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_9?scl=1&qlt=92' alt='item1' height='686px' width='590px' />
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_10?scl=1&qlt=92' alt='item2' height='686px' width='590px' />
            </article>
          </div>
        </section>
        <section id='fromtheblog'>
          <div id='blogwrapper'>
            <div id='blogitem1'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_b_1?scl=1&qlt=92' alt='blogitem1' height='240px' width='360px' />
            </div>
            <div id='blogitem2'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_b_2?scl=1&qlt=92' alt='blogitem2' height='240px' width='360px' />
            </div>
            <div id='blogitem3'>
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_b_3?scl=1&qlt=92' alt='blogitem3' height='240px' width='360px' />
            </div>
            <article id='daos'>
              <div id='yourcommunity'>
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/a_gw_en?scl=1&qlt=92' alt='community' height='75px' width='1200px' />
              </div>
              <div id='communitytwo'>
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_igw_us_ig?scl=1&qlt=92' alt='num2' height='598px' width='1200px' />
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

export default Intimates
