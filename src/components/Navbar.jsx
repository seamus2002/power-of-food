import React from 'react'
import logo from '../flower.png'


const Navbar = () => {
  return (
    <React.Fragment>
        <nav className="navbar sticky-top navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" width="30" height="30" class="d-inline-block align-text-top" />
                </a>       

                <ul class="nav nav-pills">
                    <li className="nav-item"><a href='#' class="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#mission" class="nav-link">Mission</a></li>
                    <li className="nav-item"><a href="#about" class="nav-link">About</a></li>
                    <li className="nav-item"><a href="https://thepoweroffood653129966.wordpress.com/" class="nav-link">Blog</a></li>
                </ul>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Navbar