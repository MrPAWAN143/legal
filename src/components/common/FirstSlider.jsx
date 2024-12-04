import React from "react";
import Slider from "react-slick";
import agreement from "../../assets/images/legal_documents/agreement.png"
import gear from "../../assets/images/legal_documents/gear.png"
import contract from "../../assets/images/legal_documents/contract.png"
import disclosure from "../../assets/images/legal_documents/disclosure.png"
import workshop from "../../assets/images/legal_documents/workshop.png"
import { Link } from "react-router-dom";

function FirstSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
  ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <div className="document-slider-item">
              <div className="inner_doc">
                <img
                  src={workshop}
                  alt=""
                />
                <h3>Business Formation Documents</h3>
                <ul>
                  <li>
                    Article of Incorporation or Article of Organization (for
                    LLCs)
                  </li>
                  <li>Operating Agreement or ByLaws</li>
                </ul>
                <Link to={'/legalkit'}>Order Now</Link>
              </div>
            </div>
        </div>
        <div>
        <div className="document-slider-item">
              <div className="inner_doc">
                <img
                  src={disclosure}
                  alt=""
                />
                <h3>Non-Disclosure Agreement (NDA)</h3>
                <ul>
                  <li>Confidential Agreement between parties</li>
                  <li>Protects sensitive business information</li>
                  <li>Ensure non-disclousre of trade secrets</li>
                </ul>
                <Link to={'/legalkit'}>Order Now</Link>
              </div>
            </div>
        </div>
        <div>
        <div className="document-slider-item">
              <div className="inner_doc">
                <img
                  src={contract}
                  alt=""
                />
                <h3>Employee Contract</h3>
                <ul>
                  <li>Defines Employee role and responsibilities</li>
                  <li>Outlines salary, benefits and termination terms</li>
                  <li>Protect both employer and employee rights</li>
                </ul>
                <Link to={'/legalkit'}>Order Now</Link>
              </div>
            </div>
        </div>
        <div>
        <div className="document-slider-item">
              <div className="inner_doc">
                <img src={gear} alt="" />
                <h3>Service Agreement</h3>
                <ul>
                  <li>ADetail scope of services to be provided</li>
                  <li>Specific payment terms and timelines</li>
                  <li>Ensures legal protection for both parties</li>
                </ul>
                <Link to={'/legalkit'}>Order Now</Link>
              </div>
            </div>
        </div>
        <div>
        <div className="document-slider-item">
              <div className="inner_doc">
                <img
                  src={agreement}
                  alt=""
                />
                <h3>Power of Attorney (POA)</h3>
                <ul>
                  <li>
                    Grant someone the authority to act on your behalf in legal
                    or financial matters.
                  </li>
                  <li>Conditions under which the POA can be revoked</li>
                  <li>Specifies powers the agent is authorized to exercise</li>
                </ul>
                <Link to={'/legalkit'}>Order Now</Link>
              </div>
            </div>
        </div>
      </Slider>
    </div>
  );
}

export default FirstSlider;
