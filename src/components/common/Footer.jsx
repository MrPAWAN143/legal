import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.jpg";

function Footer() {
  return (
    <footer>
      <div className="custom_container">
        <div className="footer_row">
          <div className="footer_logo">
            <img src={logo} alt="" className="site_logo" />
            <br />
            <div className="social_media">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="contact_info">
              <a href="mailto:info@legal.so.in"> Email: info@legal.so</a>
              <br />
              <a href="tel:+919891584201"> Call: +91 9891584201</a>
            </div>
          </div>
          <div className="col mob_col">
            <h4>Legal Services</h4>
            <ul>
              <li>
                <a href="">Corporate Law</a>
              </li>
              <li>
                <a href="">Civil Litigation</a>
              </li>
              <li>
                <a href="">Criminal Defense</a>
              </li>
              <li>
                <a href="">Employment Law</a>
              </li>
              <li>
                <a href="">Intellectual Property</a>
              </li>
              <li>
                <a href="">Family Law</a>
              </li>
              <li>
                <a href="">Real Estate Law</a>
              </li>
              <li>
                <a href="">Tax Law</a>
              </li>
              <li>
                <a href="">Bankruptcy Law</a>
              </li>
              <li>
                <a href="">Personal Injury Law</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Practice Areas</h4>
            <ul>
              <li>
                <a href="">Business Law</a>
              </li>
              <li>
                <a href="">Contract Law</a>
              </li>
              <li>
                <a href="">Estate Planning</a>
              </li>
              <li>
                <a href="">Immigration Law</a>
              </li>
              <li>
                <a href="">Environmental Law</a>
              </li>
              <li>
                <a href="">Consumer Protection</a>
              </li>
              <li>
                <a href="">Insurance Law</a>
              </li>
              <li>
                <a href="">Mergers & Acquisitions</a>
              </li>
              <li>
                <a href="">Antitrust Law</a>
              </li>
              <li>
                <a href="">Healthcare Law</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Client Resources</h4>
            <ul>
              <li>
                <a href="">Legal Consultations</a>
              </li>
              <li>
                <a href="">Free Case Evaluation</a>
              </li>
              <li>
                <a href="">Legal Articles</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">Law Glossary</a>
              </li>
              <li>
                <a href="">Legal Forms</a>
              </li>
              <li>
                <a href="">Document Templates</a>
              </li>
              <li>
                <a href="">Pricing Guide</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">Legal News</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4 className="mob_pad">Contact & Support</h4>
            <ul>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Schedule an Appointment</a>
              </li>
              <li>
                <a href="">Live Chat Support</a>
              </li>
              <li>
                <a href="">Case Tracker</a>
              </li>
              <li>
                <a href="">Online Payment</a>
              </li>
              <li>
                <a href="">Client Login</a>
              </li>
              <li>
                <a href="">Newsletter Signup</a>
              </li>
              <li>
                <a href="">Office Locations</a>
              </li>
              <li>
                <a href="">Submit Documents</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <hr />

      <h5>&copy; 2024, Legal.so.All Rights Reserved</h5>
    </footer>
  );
}

export default Footer;
