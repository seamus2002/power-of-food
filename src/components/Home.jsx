import React from 'react'
import logo from '../flower.png'

const Home = () => {
  return (
    <section id='home'>
        <div class="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src={logo} alt="logo" width='100px' height='100px' />
            <h1 className="display-5 fw-bold">The Power of Food</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">Your health is your wealth.</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <a href='https://www.youtube.com/channel/UCEVV977IDxAChllZmwUPc4A'><button type="button" className="btn btn-danger btn-lg px-4 gap-3">YouTube <i className="fa-brands fa-youtube"></i></button></a>
                  <a href='https://thepoweroffood653129966.wordpress.com/'><button type="button" className="btn btn-outline-secondary btn-lg px-4">View Blog</button></a>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Home