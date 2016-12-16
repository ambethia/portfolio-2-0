import React, { Component } from 'react'

class App extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      location: '',
      bio: '',
      avatar: ''
    }
  }

  componentDidMount () {
    const URL = 'https://api.github.com/users/chriskramer2020'
    fetch(URL).then(res => res.json()).then((data) => {
      this.setState({
        name: data.name,
        location: data.location,
        bio: data.bio,
        avatar: data.avatar_url
      })
    })
  }

  render () {
    return <div>
      {/* <main> */}
      <h2>Portfolio 2.0</h2>
      <header>
        <img src='https://help.github.com/assets/images/help/profile/identicon.png'alt='headpic' height='150' width='200' />
        <blockquote>Hi! I'm Chris a Front End Developer! </blockquote>
      </header>
      <video src='https://vimeo.com/22439234' autoPlay poster='posterimage.jpg'>
        Sorry, your browser doesn't support embedded videos, but dont worry, you can <a href='videofile.webm'>download it</a>
  and watch it with your favorite video player!
      </video>
      <nav>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>News</a></li>
          <li><a href='#'>Contact</a></li>
          <li><a href='#'>About</a></li>
        </ul>
      </nav>
      <section>
        <img src='https://tse1.mm.bing.net/th?&id=OIP.Mb1aa5b517fa2cd9de90b907765e2e332o0&w=300&h=300&c=0&pid=1.9&rs=0&p=0&r=0'alt='example1' height='150' width='200' />
        <img src='https://tse2.mm.bing.net/th?id=OIP.Me5608aefc1d1d194afbb2e09514ea34fH0&pid=15.1'alt='example2' height='150' width='200' />
        <img src='http://www.cygnus-x1.net/links/rush/images/albums/permanentwaves-cover.jpg'alt='example3' height='150' width='200' />
        <img src='http://theindiegirlsguideto.files.wordpress.com/2009/02/foals-antidotes-cover.jpg'alt='example4' height='150' width='200' />
        <img src='https://tse1.mm.bing.net/th?&id=OIP.Mbafe326bc14d6ef2fe5b23e81057b123o0&w=300&h=300&c=0&pid=1.9&rs=0&p=0&r=0'alt='example5' height='150' width='200' />
        <img src='https://tse1.mm.bing.net/th?id=OIP.Ma6703147e6d840eafeab57820eb7e15eo0&w=192&h=184&c=7&rs=1&qlt=90&o=4&pid=1.1'alt='example6' height='150' width='200' />
      </section>
      <article>
        <header className='a'>
          <p>
            Life is crazy!
          </p>
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
      <footer>
        Made With &hearts; in St. Pete
      </footer>
      {/* </main> */}

    </div>
  }
}

export default App
