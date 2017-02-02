import React, { Component } from 'react'
import { Link } from 'react-router'
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
            <Link to='/MusicTechCollections' >
              <a className='ay'>Collections</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Collections' ? 'visible' : 'hidden'}>
              <Link to='/love' >
                <li className='funk'>Valentines Day Shop</li>
              </Link>
              <Link to='/blog' >
                <li className='funk'>For The Record Music Newsletter</li>
              </Link>
              <Link to='/blog' >
                <li className='funk'>UO Exclusives</li>
              </Link>
              <Link to='/blog' >
                <li className='funk'>LookBook</li>
              </Link>
              <Link to='/blog' >
                <li className='funk'>View All LookBook</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('New')} onMouseOut={() => this.hideCategory()}>
            <Link to='/MusicTechNew' >
              <a className='ay'>New</a>
            </Link>
            <ul className={this.state.visibleCategory === 'New' ? 'visible' : 'hidden'}>
              <Link to='/love' >
                <li className='funk'>Vinyl + Cassettes</li>
              </Link>
              <Link to='/NewAudio' >
                <li className='funk'>Audio</li>
              </Link>
              <Link to='/NewPhoto' >
                <li className='funk'>Photo</li>
              </Link>
              <Link to='/NewGadgets+TechAccessories' >
                <li className='funk'>Gadgets+Tech Accessories</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Vinly + Cassettes')} onMouseOut={() => this.hideCategory()}>
            <Link to='/Vinyl+Cassettes' >
              <a className='ay'>Vinly + Cassettes</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Vinly + Cassettes' ? 'visible' : 'hidden'}>
              <Link to='/Pre-Order+NewReleases' >
                <li className='funk'>Pre-Order + New Releases</li>
              </Link>
              <Link to='/VinylExclusives' >
                <li className='funk'>UO Exclusives</li>
              </Link>
              <Link to='/VinylBestSellers' >
                <li className='funk'>Bestsellers</li>
              </Link>
              <Link to='/VinylNewClassics' >
                <li className='funk'>New Classics</li>
              </Link>
              <Link to='/VinylLegends' >
                <li className='funk'>Legends</li>
              </Link>
              <Link to='/VinylSoundtracks' >
                <li className='funk'>Soundtracks</li>
              </Link>
              <Link to='/AllVinyl' >
                <li className='funk'>All Vinyl</li>
              </Link>
              <Link to='/AllCassettes' >
                <li className='funk'>All Cassettes</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Record Players')} onMouseOut={() => this.hideCategory()}>
            <Link to='/RecordPlayers' >
              <a className='ay'>Record Players</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Record Players' ? 'visible' : 'hidden'} />
          </li>
          <li onMouseOver={() => this.showCategory('Audio')} onMouseOut={() => this.hideCategory()}>
            <Link to='/Audio' >
              <a className='ay'>Audio</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Audio' ? 'visible' : 'hidden'}>
              <Link to='/AudioHeadphones' >
                <li className='funk'>Headphones</li>
              </Link>
              <Link to='/AudioSpeakers' >
                <li className='funk'>Speakers</li>
              </Link>
              <Link to='/AudioCassettePlayers+Stereos' >
                <li className='funk'>Cassette Players + Stereos</li>
              </Link>
              <Link to='/AudioComponents' >
                <li className='funk'>Components + Care</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Camera + Film')} onMouseOut={() => this.hideCategory()}>
            <Link to='/Camera+Film' >
              <a className='ay'>Camera + Film</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Camera + Film' ? 'visible' : 'hidden'}>
              <Link to='/Cameras' >
                <li className='funk'>Cameras</li>
              </Link>
              <Link to='/Film+Printing' >
                <li className='funk'>Film + Printing</li>
              </Link>
              <Link to='/Camera+FilmAccessories' >
                <li className='funk'>Accessories</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Phone + Tech')} onMouseOut={() => this.hideCategory()}>
            <Link to='/Phone+Tech' >
              <a className='ay'>Phone + Tech</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Phone + Tech' ? 'visible' : 'hidden'}>
              <Link to='/PhoneCases+Covers' >
                <li className='funk'>Cases+Covers</li>
              </Link>
              <Link to='/PhoneGadgets+Accessories' >
                <li className='funk'>Gadgets + Accessories</li>
              </Link>
              <Link to='/PhoneChargers+PowerAdapters' >
                <li className='funk'>Chargers + Power Adapters</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Gadgets')} onMouseOut={() => this.hideCategory()}>
            <Link to='/Gadgets' >
              <a className='ay'>Gadgets</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Gadgets' ? 'visible' : 'hidden'}>
              <Link to='/GadgetsHealth+Wellness' >
                <li className='funk'>Health + Wellness</li>
              </Link>
              <Link to='/GadgetsProjectors+VR' >
                <li className='funk'>Projectors + Virtual Reality</li>
              </Link>
              <Link to='/GadgetsFun+Games' >
                <li className='funk'>Fun + Games</li>
              </Link>
            </ul>
          </li>
          <li onMouseOver={() => this.showCategory('Media Storage')} onMouseOut={() => this.hideCategory()}>
            <Link to='/MediaStorage' >
              <a className='ay'>Media Storage</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Media Storage' ? 'visible' : 'hidden'} />
          </li>
          <li onMouseOver={() => this.showCategory('Sale')} onMouseOut={() => this.hideCategory()}>
            <Link to='/MusicTechSale' >
              <a className='ay'>Sale</a>
            </Link>
            <ul className={this.state.visibleCategory === 'Sale' ? 'visible' : 'hidden'}>
              <Link to='/MusicTechSaleVinyl+Cassette' >
                <li className='funk'>Vinyl + Cassette</li>
              </Link>
              <Link to='/MusicTechSalePhoto,Music+TechAccessories' >
                <li className='funk'>Photo,Music + Tech Accessories</li>
              </Link>
            </ul>
          </li>
        </ul>
      </nav>
      <main id='apartmentlayout'>
        <div id='apartmentimg1'>
          <Link to='/RecordPlayers' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170130_mugw_us_1?scl=1&qlt=92' alt='prynt' height='717px' width='565px' />
          </Link>
          <Link to='/RecordPlayers' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170130_mugw_us_2?scl=1&qlt=92' alt='img2' height='717px' width='565px' />
          </Link>
        </div>
        <div id='apartmentimg3'>
          <Link to='/blog' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170130_mugw_us_3?scl=1&qlt=92' alt='music' height='536px' width='1180px' />
          </Link>
        </div>
        <div id='apartmentimg4'>
          <Link to='/love' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170130_mugw_us_4?scl=1&qlt=92' alt='vdayshop' height='210px' width='1180px' />
          </Link>
        </div>
        <div id='apartmentimg5'>
          <Link to='/Cameras' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170130_mugw_us_5?scl=1&qlt=92' alt='shopbyfit' height='535px' width='370px' />
          </Link>
          <Link to='/Cameras' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_5?scl=1&qlt=92' alt='teamgraphics' height='535px' width='370px' />
          </Link>
          <Link to='/Cameras' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_6?scl=1&qlt=92' alt='shopbyfit' height='535px' width='370px' />
          </Link>
        </div>
        <section id='apartmentarrivalswrapper'>
          <div id='apartmentnewarrival1'>
            <Link to='/Cameras' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41424243_001_b' alt='newarrival1' height='279px' width='186px' />
            </Link>
            <Link to='/Cameras' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41482233_066_b' alt='newarrival1' height='279px' width='186px' />
            </Link>
            <Link to='/Cameras' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41395021_066_b' alt='newarrival1' height='279px' width='186px' />
            </Link>
            <Link to='/Cameras' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41310004_066_b' alt='newarrival1' height='279px' width='186px' />
            </Link>
            <Link to='/Cameras' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40859688_066_b' alt='newarrival1' height='279px' width='186px' />
            </Link>
            <Link to='/Cameras' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/42088401_001_b' alt='newarrival6' height='279px' width='186px' />
            </Link>
          </div>
        </section>
        <section id='apartmentstories'>
          <div id='apartmentstoriesrow'>
            <article id='apartmentstoriesitems'>
              <Link to='/Vinyl' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_9?scl=1&qlt=92' alt='item1' height='686px' width='565px' />
              </Link>
              <Link to='/Cameras' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_10?scl=1&qlt=92' alt='item2' height='686px' width='565px' />
              </Link>
            </article>
          </div>
        </section>
        <section id='newdiscoveries'>
          <div id='newdiscoveries'>
            <ul id='newdiscoveries'>
              <Link to='/VinylLegends' >
                <li><img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_mm1?scl=1' alt='item2' height='170px' width='170px' /></li>
              </Link>
              <Link to='/VinylLegends' >
                <li><img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_mm2?scl=1' alt='item2' height='170px' width='170px' /></li>
              </Link>
              <Link to='/VinylLegends' >
                <li><img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_mm3?scl=1' alt='item2' height='170px' width='170px' /></li>
              </Link>
            </ul>
          </div>
        </section>
        <section id='apartmentbrands'>
          <div id='apartmenttrendtwo'>
            <ul id='apartmenttrendingtwo'>
              <Link to='/VinylExclusives' >
                <li><img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_p_1?scl=1' alt='item2' height='170px' width='170px' /></li>
              </Link>
              <Link to='/VinylExclusives' >
                <li><img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_p_2?scl=1' alt='item2' height='170px' width='170px' /></li>
              </Link>
              <Link to='/VinylExclusives' >
                <li><img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_p_3?scl=1' alt='item2' height='170px' width='170px' /></li>
              </Link>
            </ul>
          </div>
        </section>
        <section id='fromtheblog'>
          <div id='blogwrapper'>
            <div id='blogitem1'>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_b_2?scl=1&qlt=92' alt='blogitem2' height='240px' width='360px' />
              </Link>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_b_1?scl=1&qlt=92' alt='blogitem1' height='240px' width='360px' />
              </Link>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_mugw_us_b_3?scl=1&qlt=92' alt='blogitem3' height='240px' width='360px' />
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

export default MusicTech
