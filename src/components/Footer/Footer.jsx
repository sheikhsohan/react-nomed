import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import './style.css'

const Footer = () => {
  return (
    <footer className="footer-20192">
      <div className="site-section">
        <div className="container">

          <div className="cta d-block d-md-flex align-items-center px-5">
            <div>
              <h2 className="mb-0">Ready for a next project?</h2>
              <h3 className="text-dark">Let's get started!</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <a href="#" className="footer-logo">Developed By Sohan</a>
              <p className="copyright">
                <small>&copy; 2023</small>
              </p>
            </div>

            <div className="col-sm">
              <h3>Company</h3>
              <ul className="list-unstyled links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#contact">Contact us</a></li>
              </ul>
            </div>

            <div className="col-sm">
              <h3>Further Information</h3>
              <ul className="list-unstyled links">
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3>Follow us</h3>
              <ul className='custom'>
                <li><a href="https://facebook.com/s.s0han"><FaFacebook /></a></li>
                <li><a href="#"><FaInstagram /></a></li>
                <li><a href="https://github.com/sheikhsohan"><FaGithub /></a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
