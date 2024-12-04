import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import menubar from "../../assets/images/menu.png";

function Header() {
  const [menu, setMenu] = useState("hide");
  let ShowMenu = () => {};
  return (
    <navbar className="custom_container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" height="70" width="200" />
        </Link>
      </div>
      <div className="searchbar">
        <input type="text" />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="menu">
        <div className="nav-link menu_links dropdown">
          <Link to={"/services"}>Services</Link>
          <i className="fa-solid fa-angle-down"></i>
          <div className="dropdown-menu">
            <div className="menu_container">
              <div className="menu_col">
                <h4>Civil Law</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Property disputes</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>
                    Family law (divorce, child custody, inheritance)
                  </Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Consumer protection</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Contractual disputes</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Criminal Law</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Criminal defense</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Bail applications</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>FIR lodging</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>
                    Legal representation in criminal cases
                  </Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Corporate Law</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>
                    Company formation and registration
                  </Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>
                    Corporate compliance and governance
                  </Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Mergers and acquisitions</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Insolvency and bankruptcy</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Intellectual Property Law</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>
                    Trademark registration and disputes
                  </Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Copyright protection</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Patent filing</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Design protection</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Taxation Law</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Tax advisory and compliance</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>GST registration and disputes</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Income tax filing</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Handling tax audits and appeals</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Labour and Employment Law</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Employment contracts</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Industrial disputes</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Labor compliance and policies</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>
                    Employee benefits and compensation
                  </Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Real Estate Law</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Property registration</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Land disputes</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Lease and rental agreements</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Real estate transactions</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Dispute Resolution and Arbitration</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Arbitration proceedings</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Mediation services</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Negotiation of settlements</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Litigation support</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Banking and Finance Law</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Loan agreements</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Debt recovery</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Financial compliance</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Bankruptcy filings</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Cyber Law</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>Data protection and privacy</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>
                    Cybercrime investigation and defense
                  </Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/services"}>
                    E-commerce and internet law compliance
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-link menu_links dropdown">
          <Link to={"/lawyerlisting"}>Find a Lawyer</Link>
          <i className="fa-solid fa-angle-down"></i>
          <div className="dropdown-menu">
            <div className="menu_container find_lawyer_container">
              <div className="menu_col">
                <h4>By Practice Area</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/lawyerlisting"}>Property dispute</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/lawyerlisting"}>
                    Family law (divorce, child custody, inheritance)
                  </Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/lawyerlisting"}>Consumer protection</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/lawyerlisting"}>Contractual dispute</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>By Location</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/lawyerlisting"}>Search by City</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/lawyerlisting"}>Search by State/Region</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/lawyerlisting"}>Map of Lawyers Availability</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>By Language</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/lawyerlisting"}>Spanish</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/lawyerlisting"}>Mandarin</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/lawyerlisting"}>French</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/lawyerlisting"}>Other Languages</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Top Rated Lawyers</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/lawyerlisting"}>Awards & Recognition</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/lawyerlisting"}>Featured Lawyers</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Top Rated Lawyers</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/lawyerlisting"}>
                    Online Availability (e.g., chat, video consultation)
                  </Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/lawyerlisting"}>In-Person Availability</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-link menu_links dropdown">
          <Link to="/legalkit">Legal Documents</Link>
          <i className="fa-solid fa-angle-down"></i>
          <div className="dropdown-menu">
            <div className="menu_container">
              <div className="menu_col">
                <Link to={"/legalkit"} className="menuOptions">
                  Sale Deed
                </Link>
              </div>
              <div className="menu_col">
                <Link to={"/legalkit"} className="menuOptions">
                  Wills
                </Link>
              </div>
              <div className="menu_col">
                <Link to={"/legalkit"} className="menuOptions">
                  Contracts
                </Link>
              </div>
              <div className="menu_col">
                <Link to={"/legalkit"} className="menuOptions">
                  Lease Agreements
                </Link>
              </div>
              <div className="menu_col">
                <Link to={"/legalkit"} className="menuOptions">
                  Power of Attorney
                </Link>
              </div>
              <div className="menu_col">
                <Link to={"/legalkit"} className="menuOptions">
                  Partnership Agreement
                </Link>
              </div>
              <div className="menu_col">
                <Link to={"/legalkit"} className="menuOptions">
                  Gift Deed
                </Link>
              </div>
              <div className="menu_col">
                <Link to={"/legalkit"} className="menuOptions">
                  Vendor Agreement
                </Link>
              </div>
              <div className="menu_col">
                <Link to={"/legalkit"} className="menuOptions">
                  Non-Disclosure Agreement
                </Link>
              </div>
              <div className="menu_col">
                <Link to={"/legalkit"} className="menuOptions">
                  Service Agreement
                </Link>
              </div>
              <div className="menu_col">
                <Link to={"/legalkit"} className="menuOptions">
                  Franchise Agreement
                </Link>
              </div>
              <div className="menu_col">
                <Link to={"/legalkit"} className="menuOptions">
                  Loan Agreement
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-link menu_links dropdown">
          <Link to={"/caserequest"}>Case Request</Link>
          <i className="fa-solid fa-angle-down"></i>
          <div className="dropdown-menu">
            <div className="menu_container">
              <div className="menu_col">
                <h4>Request a Consultation</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Online Form</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Phone Contact</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Preferred method of contact</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Availability of consultation</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Phone Contact</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Direct Line</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Office Hours</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Submit Case Details</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Brief Description of Your Case</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Relevant Dates and Events</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Any Existing Legal Documents</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Confidentiality Assurance</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Explanation of Privacy Policies</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Secure Submission Process</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Follow-Up on Existing Cases</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Check Case Status</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Document Upload</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Legal Fees & Payment Options</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Overview of Fees</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Payment Plans Available</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Acceptable Payment Methods</Link>
                </div>
              </div>
              <div className="menu_col">
                <h4>Resources for New Clients</h4>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>
                    What to Expect During the Consultation
                  </Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>Preparing for Your First Meeting</Link>
                </div>
                <div className="nav-link dropdown_items">
                  <Link to={"/consult"}>
                    Frequently Asked Questions about Legal Processes
                  </Link>
                </div>
              </div>
              <div className="menu_col">
                <Link to={"/consult"} className="menuOptions">
                  Contact a Specific Lawyer
                </Link>
              </div>
              <div className="menu_col">
                <Link to={"/consult"} className="menuOptions">
                  Referral Service
                </Link>
              </div>
              <div className="menu_col">
                <Link to={"/consult"} className="menuOptions">
                  Feedback & Testimonials
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-link menu_links">
          <Link to={"/blog"}>Blog</Link>
        </div>
      </div>
      <div className="mobile_menu">
        <img
          src={menubar}
          alt=""
          style={{ height: "20px" }}
          onClick={() => setMenu("show")}
        />
      </div>
      <div
        className="mobile_menu_options"
        style={menu === "hide" ? { display: "none" } : { display: "flex" }}
      >
        <div className="mob_menu_items">
          <div className="mob_menu_item">
            <Link to={"/services"} onClick={() => setMenu("hide")}>
              Services
            </Link>
          </div>
          <div className="mob_menu_item">
            <Link to={"/lawyerlisting"} onClick={() => setMenu("hide")}>
              Find a Lawyer
            </Link>
          </div>
          <div className="mob_menu_item">
            <Link to={"/legalkit"} onClick={() => setMenu("hide")}>
              Legal Documents
            </Link>
          </div>
          <div className="mob_menu_item">
            <Link to={"/consult"} onClick={() => setMenu("hide")}>
              Case Request
            </Link>
          </div>
          <div className="mob_menu_item">
            <Link to={"/blog"} onClick={() => setMenu("hide")}>
              Blog
            </Link>
          </div>
        </div>
        <div className="close">
          <i className="fa-solid fa-x" onClick={() => setMenu("hide")}></i>
        </div>
      </div>
    </navbar>
  );
}

export default Header;
