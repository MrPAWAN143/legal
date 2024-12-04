import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import FirstSlider from "../common/FirstSlider";
import media1 from "../../assets/images/news/img_1.png";
import media2 from "../../assets/images/news/img_2.png";
import media3 from "../../assets/images/news/img_3.webp";
import media4 from "../../assets/images/news/img_4.jpeg";
import media5 from "../../assets/images/news/img_5.jpeg";
import media6 from "../../assets/images/news/img_6.jpg";
import media7 from "../../assets/images/news/img_7.png";
import lawyer1 from "../../assets/images/lawyer_1.jpg";
import lawyer2 from "../../assets/images/lawyer_2.jpg";
import lawyer3 from "../../assets/images/lawyer_3.jpg";
import lawyer4 from "../../assets/images/lawyer_4.jpg";
import lawyer5 from "../../assets/images/lawyer_5.jpeg";
import corporatelaw from "../../assets/images/category_logo/corporate-laws.png";
import civilright from "../../assets/images/category_logo/civil-right.png";
import order from "../../assets/images/category_logo/order.png";
import complaint from "../../assets/images/compliant.png";
import criminallaw from "../../assets/images/category_logo/criminal-law.png";
import familylaw from "../../assets/images/category_logo/family-law.png";
import protectedimg from "../../assets/images/category_logo/protected.png";
import stamp from "../../assets/images/category_logo/stamp.png";
import labourlaw from "../../assets/images/category_logo/labour-law.png";
import onlinetax from "../../assets/images/category_logo/online-tax.png";
import international from "../../assets/images/category_logo/international.png";
import legal from "../../assets/images/legal.png";
import SecondSlider from "../common/SecondSlider";

function Home() {
  return (
    <div>
      <div className="hero-section">
        <div className="custom_container">
          <div className="hero_details">
            <h1>Legal.so</h1>
            <p className="motive">Simplify your legal needs</p>
            <p className="rest">
              At Legal.so, we are dedicated to providing expert legal guidance
              tailored to your unique needs.
            </p>
            <br />
            <hr />
            <br />
            <p className="hero_section_address">
              E-86, South Extension Part 1, New Delhi
            </p>
            <a href="tel" className="rest">
              +91 9891 5842 01
            </a>

            <Link to="/lawyerlisting" className="banner_btn">Find a Lawyer</Link>
          </div>
        </div>
      </div>


      <section className="section services_section">
        <div className="custom_container">
          <div className="categories services">
            <h2 className="categories_heading">Our Services</h2>
            <div className="services_grid">
              <div className="grid">
                <div className="service_grid_item">
                  <div className="service_grid_top">
                    <img src={legal} alt="" width="50" />
                    <h4>Corporate and Business Law</h4>
                  </div>
                  <div className="service_grid_rest">
                    <ul>
                      <li>Business formation (LLCs, corporation)</li>
                      <li>Contract drafting and review</li>
                      <li>Mergers and acquisitions Corporate governance</li>
                      <li>
                        Compliance and regulatory advice Intellectual advice
                      </li>
                      <li>Intellectual property protection</li>
                    </ul>
                    <Link to={"/services"} className="know_more_btn">
                      Know More...
                    </Link>
                  </div>
                </div>
                <div className="service_grid_item">
                  <div className="service_grid_top">
                  <img src={legal} alt="" width="50" />
                    <h4>Tax Law Services</h4>
                  </div>
                  <div className="service_grid_rest">
                    <ul>
                      <li>Tax planning and compliance</li>
                      <li>Representation in audits</li>
                      <li>Tax dispute resolution</li>
                      <li>International tax considerations</li>
                      <li>Estate and gift tax planning</li>
                    </ul>
                    <Link to={"/services"} className="know_more_btn">
                      Know More...
                    </Link>
                  </div>
                </div>

                <div className="service_grid_item">
                  <div className="service_grid_top">
                  <img src={legal} alt="" width="50" />
                    <h4>Employment Law</h4>
                  </div>
                  <div className="service_grid_rest">
                    <ul>
                      <li>Employee contracts and handbooks</li>
                      <li>Workplace discrimination claims</li>
                      <li>Wage and hour disputes</li>
                      <li>Employee termination guidance</li>
                      <li>Workplace compliance audits</li>
                    </ul>
                    <Link to={"/services"} className="know_more_btn">
                      Know More...
                    </Link>
                  </div>
                </div>

                <div className="service_grid_item">
                  <div className="service_grid_top">
                  <img src={legal} alt="" width="50" />
                    <h4>Real Estate Law</h4>
                  </div>
                  <div className="service_grid_rest">
                    <ul>
                      <li>Property transactions</li>
                      <li>Leasing agreements</li>
                      <li>Zoning and land use</li>
                      <li>Real estate litigation</li>
                      <li>Title examination and insurance</li>
                    </ul>
                    <Link to={"/services"} className="know_more_btn">
                      Know More...
                    </Link>
                  </div>
                </div>

                <div className="service_grid_item">
                  <div className="service_grid_top">
                  <img src={legal} alt="" width="50" />
                    <h4>Family Law</h4>
                  </div>
                  <div className="service_grid_rest">
                    <ul>
                      <li>Divorce and separation</li>
                      <li>Child custody and support</li>
                      <li>Adoption processes</li>
                      <li>Domestic violence issues</li>
                      <li>Property division</li>
                    </ul>
                    <Link to={"/services"} className="know_more_btn">
                      Know More...
                    </Link>
                  </div>
                </div>

                <div className="service_grid_item">
                  <div className="service_grid_top">
                  <img src={legal} alt="" width="50" />
                    <h4>Criminal Defense</h4>
                  </div>
                  <div className="service_grid_rest">
                    <ul>
                      <li>Felony and misdemeanor defense</li>
                      <li>Drug charges</li>
                      <li>DUI/DWI representation</li>
                      <li>Expungements</li>
                      <li>Appeals and post-conviction relief</li>
                    </ul>
                    <Link to={"/services"} className="know_more_btn">
                      Know More...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="custom_container">
        <div className="categories">
          <h2 className="categories_heading">Law Categories</h2>
          <div className="grid">
            <Link to="/services" className="grid-item">
              <img src={complaint} alt="" height="50" width="50" />
              <p>Constitutional Law</p>
            </Link>
            <Link to="/services" className="grid-item">
              <img src={criminallaw} alt="" height="50" width="50" />
              <p>Criminal Law</p>
            </Link>
            <Link to="/services" className="grid-item">
              <img src={civilright} alt="" height="50" width="50" />
              <p>Civil Law</p>
            </Link>
            <Link to="/services" className="grid-item">
              <img src={order} alt="" height="50" width="50" />
              <p>Administrative Law</p>
            </Link>
            <Link to="/services" className="grid-item">
              <img src={familylaw} alt="" height="50" width="50" />
              <p>Family Law</p>
            </Link>
            <Link to="/services" className="grid-item">
              <img src={corporatelaw} alt="" height="50" width="50" />
              <p>Corporate Law</p>
            </Link>
            <Link href="" className="grid-item">
              <img src={protectedimg} alt="" height="50" width="50" />
              <p>Contract Law</p>
            </Link>
            <Link to="/services" className="grid-item">
              <img src={stamp} alt="" height="50" width="50" />
              <p>Property Law</p>
            </Link>
            <Link to="/services" className="grid-item">
              <img src={labourlaw} alt="" height="50" width="50" />
              <p>Labor and Employment Law</p>
            </Link>
            <Link to="/services" className="grid-item">
              <img src={onlinetax} alt="" height="50" width="50" />
              <p>Taxation Law</p>
            </Link>
            <Link to="/services" className="grid-item">
              <img src={international} alt="" height="50" width="50" />
              <p>Environmental Law</p>
            </Link>
            <Link href="" className="grid-item">
              <img src={complaint} alt="" height="50" width="50" />
              <p>Intellectual Property Law</p>
            </Link>
            <Link to="/services" className="grid-item">
              <img src={complaint} alt="" height="50" width="50" />
              <p>Consumer Protection Law</p>
            </Link>
            <Link to="/services" className="grid-item">
              <img src={complaint} alt="" height="50" width="50" />
              <p>Cyber Law</p>
            </Link>
            <Link to="/services" className="grid-item">
              <img src={complaint} alt="" height="50" width="50" />
              <p>Maritime Law</p>
            </Link>
            <Link to="/services" className="grid-item">
              <img src={complaint} alt="" height="50" width="50" />
              <p>Banking and Finance Law</p>
            </Link>
            <Link to="/services" className="grid-item">
              <img src={complaint} alt="" height="50" width="50" />
              <p>Human Rights Law</p>
            </Link>
            <Link to="/services" className="grid-item">
              <img src={complaint} alt="" height="50" width="50" />
              <p>International Law</p>
            </Link>
          </div>
        </div>
      </div>
    
      <section className="section lawyers_section">
        <div className="custom_container">
          <div className="categories lawyers">
            <h2 className="categories_heading">Most Rated Lawyers</h2>
            <h4>We have world's Best team of Lawyers</h4>
            <div className="grid">
              <div className="lawyer_grid_item">
                <div className="lawyer_pic">
                  <img src={lawyer1} alt="" />
                </div>
                <h5 className="text-center">Adv. Anjali Verma</h5>
                <p className="text-center">Criminal/Family Lawyer (SC)</p>
                <div className="tags">
                  <span>Criminal</span>
                  <span>Family Law</span>
                  <span>Corporate Law</span>
                  <span>Company Law</span>
                  <span>Divorce Law</span>
                  <span>Litigation Law</span>
                </div>
                <Link to={"/lawyerlisting"}>Consult Now</Link>
              </div>
              <div className="lawyer_grid_item">
                <div className="lawyer_pic">
                  <img src={lawyer2} alt="" />
                </div>
                <h5 className="text-center">Adv. Harshwardhan Sharma</h5>
                <p className="text-center">
                  Corporate/Intellectual Property Lawyer (HC)
                </p>
                <div className="tags">
                  <span>Corporate Law</span>
                  <span>Intellectual Property</span>
                  <span>Contract Law</span>
                  <span>Patent Law</span>
                  <span>Trademark</span>
                </div>
                <Link to={"/lawyerlisting"}>Consult Now</Link>
              </div>

              <div className="lawyer_grid_item">
                <div className="lawyer_pic">
                  <img src={lawyer3} alt="" />
                </div>
                <h5 className="text-center">Adv. Rajendra Prasad</h5>
                <p className="text-center">Family/Divorce Lawyer (SC)</p>
                <div className="tags">
                  <span>Family Law</span>
                  <span>Divorce Law</span>
                  <span>Child Custody</span>
                  <span>Property Disputes</span>
                  <span>Adoption Law</span>
                </div>
                <Link to={"/lawyerlisting"}>Consult Now</Link>
              </div>

              <div className="lawyer_grid_item">
                <div className="lawyer_pic">
                  <img src={lawyer4} alt="" />
                </div>
                <h5 className="text-center">Adv. Aakash Patel</h5>
                <p className="text-center">Criminal/Corporate Lawyer (HC)</p>
                <div className="tags">
                  <span>Criminal Law</span>
                  <span>Corporate Law</span>
                  <span>White-Collar Crime</span>
                  <span>Fraud Cases</span>
                  <span>Regulatory Compliance</span>
                </div>
                <Link to={"/lawyerlisting"}>Consult Now</Link>
              </div>

              <div className="lawyer_grid_item">
                <div className="lawyer_pic">
                  <img src={lawyer5} alt="" />
                </div>
                <h5 className="text-center">Adv. Nitin Gupta</h5>
                <p className="text-center">Civil/Property Lawyer (SC)</p>
                <div className="tags">
                  <span>Civil Law</span>
                  <span>Property Law</span>
                  <span>Real Estate</span>
                  <span>Inheritance Law</span>
                  <span>Land Disputes</span>
                </div>
                <Link to={"/lawyerlisting"}>Consult Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section documents_section">
        <div className="custom_container">
          <h2>Buy Legal Documents</h2>
          <p>
            Trustworthy Solutions for Your Legal Needs where Legal Clarity Meets
            Convenience
          </p>
          <FirstSlider />
        </div>
      </section>
      <section className="section testimonial_section">
        <div className="custom_container">
          <h2 className="text-center">Client Testimonials</h2>
          <div className="testimonial-slider">
            <SecondSlider />
          </div>
        </div>
      </section>

      <section className="section media_section">
        <div className="custom_container">
          <h2 className="text-center">Media Coverage</h2>
          <div className="media_content">
            <img src={media1} alt="" />
            <img src={media2} alt="" />
            <img src={media3} alt="" />
            <img src={media4} alt="" />
            <img src={media5} alt="" />
            <img src={media6} alt="" />
            <img src={media7} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
