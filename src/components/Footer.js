import React from 'react'
import '../styles/Style.css'
import {Link} from 'react-router-dom';
import logoWhite from '../images/logo-white.svg'
import facebookLogo from '../images/facebook.svg'
import twitterLogo from '../images/twitter.svg'
import instagramLogo from '../images/instagram.svg'

const Footer = () => {
  return(
    <React.Fragment>
      <div className="footer px-5 container-fluid">
        <div className="py-5 footer-wrap">
          <div className="p-0 footer--logo">
            <img src={ logoWhite } alt="logo-white" />
            <p className="text-white mb-2">Build the minds of the future.</p>
            <p className="text-white small"><span className="mr-2">&#169;</span>2020 Learnr. All Rights Reserved</p>
          </div>
          <div className="p-0 footer--content">
            <div className="text-white">Content</div>
            <div><Link to="/about" className="text-white small">About</Link></div>
            <div><Link to="" className="text-white small">Contact Us</Link></div>
            <div><Link to="" className="text-white small">Blog</Link></div>
            <div><Link to="" className="text-white small">Privacy Policy</Link></div>
            <div><Link to="" className="text-white small">Terms of use</Link></div>
          </div>
          <div className="p-0 footer--follow">
            <div className="text-white">Follow Us</div>
            <div className="mb-3"><Link to="" className="text-white small"><img className="mr-2" src={ facebookLogo } alt="facebook-logo" />Facebook</Link></div>
            <div className="mb-3"><Link to="" className="text-white small"><img className="mr-2" src={ twitterLogo } alt="twitter-logo" />Twitter</Link></div>
            <div className="mb-3"><Link to="" className="text-white small"><img className="mr-2" src={ instagramLogo } alt="instagram-logo" />Instagram</Link></div>
          </div>
          <div className="p-0 footer--sub">
            <div className="text-white mb-3">Subscribe To Our Newsletter</div>
            <form>
              <div className="form-group d-flex">
                <label htmlFor="sub-form"></label>
                <input type="text" className="form-control sub-form--input mr-3" id="sub-form" placeholder="Email Address" />
                <button className="sub-button py-2">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer;