import React, { Component } from 'react'

class App extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      location: '',
      bio: '',
      avatar: '',
      blog: []
    }
  }

  componentDidMount () {
    const URLGithub = 'https://api.github.com/users/chriskramer2020'
    window.fetch(URLGithub).then(res => res.json()).then((data) => {
      this.setState({
        name: data.name,
        location: data.location,
        bio: data.bio,
        avatar: data.avatar_url,
        blog: data.blog
      })
    })
  }

  render () {
    return <div>
      <main className='content'>
        <nav>
          <ul>
            <li className='kramer'><a href='#'>Kramer</a></li>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>News</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>About</a></li>
          </ul>
        </nav>
        <article className='box'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161215_bogo_usgw_ET?scl=1&qlt=100' alt='box' height='286px' width='1184px' />
        </article>
        <article className='discount'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_1?scl=1&qlt=92' alt='discounts' height='286px' width='1184px' />
        </article>
        <div className='model'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_2?scl=1&qlt=92' alt='model' height='717px' width='590px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_3?scl=1&qlt=92' alt='model' height='717px' width='590px' />
        </div>
        <div className='gift'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_4?scl=1&qlt=92' alt='gift' height='536px' width='1180px' />
        </div>
        <div className='apartment'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161220_MT_hp_d_ET?scl=1&qlt=92' alt='apartment' height='717px' width='590px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_5?scl=1&qlt=92' alt='tech' height='717px' width='590px' />
        </div>
        <div className='others'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_7?scl=1&qlt=92' alt='beauty' height='561px' width='386px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_8_v1?scl=1&qlt=92' alt='intimates' height='561px' width='386px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_9?scl=1&qlt=92' alt='blog' height='561px' width='386px' />
        </div>
        <div className='rewards'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_10?scl=1&qlt=92' alt='rewards' height='153px' width='1184px' />
        </div>
        <div className='community'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/160912_uocomm_hp_us?scl=1&qlt=92' alt='community' height='75px' width='1184px' />
        </div>
        <div className='footerimg'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_ig?scl=1&qlt=92' alt='footerimg' height='597px' width='1184px' />
        </div>
      </main>
      <footer>
        Made With &hearts; in {this.state.location}
      </footer>
    </div>
  }
}

export default App
