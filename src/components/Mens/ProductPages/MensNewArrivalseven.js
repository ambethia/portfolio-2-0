import React, { Component } from 'react'
// import { Link } from 'react-router'

class productsPage extends Component {

  addToBag = () => {
    // save this item to cart, use `this.refs.quantity.value` to get the quantity

    window.alert(`Added ${this.refs.quantity.value} of this product to the bag.`)
  }

  render () {
    return <div id='productstyling' >
      <main id='productspage'>
        <h6>Mens Graphic Tees</h6>
        <h4>Carrots X Brooks Long Sleeve Tee$60</h4>
        <div id='productleft'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41450131_041_b?$medium$&defaultImage=' alt='' height='296px' width='197px' />
          <div>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41450131_041_d?$medium$&defaultImage=' alt='' height='296px' width='197px' />
          </div>
          <div>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41450131_041_e?$medium$&defaultImage=' alt='' height='296px' width='197px' />
          </div>
        </div>
        <br />
        <div id='productright'>
          <div>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41450131_041_f?$medium$&defaultImage=' alt='' height='296px' width='197px' />
          </div>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41450131_041_g?$medium$&defaultImage=' alt='' height='296px' width='197px' />
          <div>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41450131_041_h?$medium$&defaultImage=' alt='' height='296px' width='197px' />
          </div>
        </div>
        <aside id='rightside'>
          <div id='mrright'>
            <p id='p'>Long sleeve t-shirt from the Carrots collab with running shoe brand Brooks. Heavyweight cotton is cut in a standard fit featuring a co-branded graphic at the chest and an embroidered Carrots callout at the right sleeve. Finished with rib-knit banding at the crew neck + cuffs. Carrots was launched in 2005 by Anwar "Carrots" Washington after the success of his streetwear brand Peas & Carrots.</p>
            <p id='p' />
          </div>
          <ul id='size'>
            <li id='sizes'>S</li>
            <li id='sizes'>M</li>
            <li id='sizes'>L</li>
            <li id='sizes'>XL</li>
          </ul>
          <div>
            <input ref='quantity' placeholder='How Many?' />
          </div>
          <div>
            <button onClick={this.addToBag}>Add To Bag</button>
          </div>
          <div id='details'>
            <p id='p' />
          </div>
        </aside>
        <div id='apartmentsale'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38597449_001_b?$medium$' alt='thejumpsuit' height='256px' width='171px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39793559_004_d?$medium$' alt='thejumpsuit' height='256px' width='171px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39793559_009_d?$medium$' alt='thejumpsuit' height='256px' width='171px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39793559_105_d?$medium$' alt='thejumpsuit' height='256px' width='171px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39793559_009_d?$medium$' alt='thejumpsuit' height='256px' width='171px' />
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/39793559_105_d?$medium$' alt='thejumpsuit' height='256px' width='171px' />
        </div>
      </main>
      {/* Footer */}
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
            <ul className='apps'>
              <li className='b3'><img src='http://www.urbanoutfitters.com/urban/images/apple-app-store.jpg' height='27px' width='90px' /></li>
              <br />
              <li className='b3'><img src='http://www.urbanoutfitters.com/urban/images/google-app-store.png' height='27px' width='90px' /> </li>
              <br />
              <li className='b3'><img src='http://www.urbanoutfitters.com/urban/images/amazon-app-store.png' height='27px' width='90px' /> </li>
              <br />
            </ul>
          </article>
        </ul>
        {/* <ul className='connect'>
          <li>2</li>
          <li>1</li>
          <li>2</li>
          <li>1</li>
          <li>2</li>
          <li>1</li>
        </ul> */}
        <ul className='find'>
          <b id='ak'>Find A Store</b>
          <br />
          <p>Store Locator</p>
          <p>UO Spaces</p>
        </ul>
      </footer>
    </div>
  }
}

export default productsPage
