import React from "react";
import Slider from "react-slick";
import lawyer1 from "../../assets/images/lawyer_1.jpg"
import lawyer2 from "../../assets/images/lawyer_2.jpg"
import lawyer3 from "../../assets/images/lawyer_3.jpg"
import lawyer4 from "../../assets/images/lawyer_4.jpg"
import lawyer5 from "../../assets/images/lawyer_5.jpeg"
import laywer6 from "../../assets/images/laywer_6.jpg"
import lawyer7 from "../../assets/images/laywer_7.jpeg"
import lawyer8 from "../../assets/images/lawyer_8.jpg"
import lawyer9 from "../../assets/images/lawyer_9.jpg"
import lawyer10 from "../../assets/images/laywer_10.jpeg"

function SecondSlider() {
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
                dots: true,
               
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                PrevArrow: null,
                NextArrow: null
              }
            }
        ]
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
          <div>
            <div className="testimonial-slider-item">
              <div className="inner_doc">
                <img src={lawyer3} alt="" />
                <h4 className="text-center">Dr. Rajendra Prasad</h4>
                <h5 className="text-center">MD, ABC Limited</h5>
                <p className="text-center">
                  “From the very start, they were incredibly attentive and
                  dedicated to my case. Their expertise and commitment made a
                  significant difference in the outcome. I highly recommend Dr.
                  Rajendra Prasad to anyone needing legal representation.” 
                  <br/>—
                  <b>Jane S.</b>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-slider-item">
                <div className="inner_doc">
                    <img src={lawyer1} alt="Lawyer 1" />
                    <h4 className="text-center">Mrs. Anjali Verma</h4>
                    <h5 className="text-center">Partner, XYZ Law Firm</h5>
                    <p className="text-center">
                        “Ms. Aisha Khan provided exceptional legal advice and support throughout our case. Her professionalism and dedication were evident every step of the way. I would not hesitate to recommend her services to anyone in need of legal assistance.” 
                        <br/>— <b>John D.</b>
                    </p>
                </div>
            </div>
        </div>
        
        <div>
            <div className="testimonial-slider-item">
                <div className="inner_doc">
                    <img src={lawyer2} alt="Lawyer 2" />
                    <h4 className="text-center">Mr. Harshwardhan Sharma</h4>
                    <h5 className="text-center">Senior Attorney, Legal Experts Inc.</h5>
                    <p className="text-center">
                        “Working with Mr. Samuel Lee was a truly positive experience. His expertise and strategic approach to our case were invaluable. I am grateful for his hard work and highly recommend him to anyone seeking knowledgeable legal representation.” 
                        <br/>— <b>Emily R.</b>
                    </p>
                </div>
            </div>
        </div>
        
        <div>
            <div className="testimonial-slider-item">
                <div className="inner_doc">
                    <img src={lawyer7} alt="Lawyer 4" />
                    <h4 className="text-center">Dr. Priya Sharma</h4>
                    <h5 className="text-center">Founder, Legal Solutions Group</h5>
                    <p className="text-center">
                        “Dr. Priya Sharma’s dedication to her clients is unparalleled. Her ability to navigate complex legal matters with ease and her commitment to achieving the best outcomes make her an outstanding legal professional. I wholeheartedly recommend her services.” 
                        <br/>— <b>Michael B.</b>
                    </p>
                </div>
            </div>
        </div>

        <div>
          <div className="testimonial-slider-item">
              <div className="inner_doc">
                  <img src={lawyer9} alt="Lawyer 9" />
                  <h4 className="text-center">Ms. Aarti Patel</h4>
                  <h5 className="text-center">Senior Advocate, Patel & Associates</h5>
                  <p className="text-center">
                      “Ms. Aarti Patel provided exceptional legal guidance and support. Her dedication and expertise made a significant difference in the outcome of my case. I highly recommend her for anyone in need of skilled legal representation.” 
                      <br/>— <b>Rajesh K.</b>
                  </p>
              </div>
          </div>
      </div>
      
      <div>
          <div className="testimonial-slider-item">
              <div className="inner_doc">
                  <img src={lawyer4} alt="Lawyer 10" />
                  <h4 className="text-center">Mr. Vikram Sharma</h4>
                  <h5 className="text-center">Principal Lawyer, Sharma Law Chambers</h5>
                  <p className="text-center">
                      “Mr. Vikram Sharma’s professionalism and legal acumen were remarkable. His thorough understanding of the law and commitment to my case ensured a successful outcome. I strongly recommend his services.” 
                      <br/>— <b>Neha S.</b>
                  </p>
              </div>
          </div>
      </div>
      
      <div>
          <div className="testimonial-slider-item">
              <div className="inner_doc">
                  <img src={laywer6} alt="Lawyer 11" />
                  <h4 className="text-center">Dr. Ananya Singh</h4>
                  <h5 className="text-center">Managing Partner, Singh Legal Solutions</h5>
                  <p className="text-center">
                      “Dr. Ananya Singh provided excellent legal representation with a high level of professionalism. Her strategic approach and dedication to my case were outstanding. I would highly recommend her services to anyone.” 
                      <br/>— <b>Amit R.</b>
                  </p>
              </div>
          </div>
      </div>
      
      <div>
          <div className="testimonial-slider-item">
              <div className="inner_doc">
                  <img src={lawyer8} alt="Lawyer 12" />
                  <h4 className="text-center">Mr. Arjun Mehta</h4>
                  <h5 className="text-center">Lead Counsel, Mehta Associates</h5>
                  <p className="text-center">
                      “Mr. Arjun Mehta’s expertise and dedication to my legal matters were truly impressive. His insightful advice and thorough handling of my case led to a favorable resolution. I highly recommend his services.” 
                      <br/>— <b>Priya J.</b>
                  </p>
              </div>
          </div>
      </div>
      
      <div>
          <div className="testimonial-slider-item">
              <div className="inner_doc">
                  <img src={lawyer10} alt="Lawyer 13" />
                  <h4 className="text-center">Ms. Divya Rao</h4>
                  <h5 className="text-center">Consultant Lawyer, Rao & Co.</h5>
                  <p className="text-center">
                      “Ms. Divya Rao demonstrated exceptional legal expertise and commitment throughout our case. Her attention to detail and proactive approach were crucial to our success. I highly endorse her for anyone seeking expert legal representation.” 
                      <br/>— <b>Sanjay D.</b>
                  </p>
              </div>
          </div>
      </div>
          </Slider>
    </div>
  );
}

export default SecondSlider