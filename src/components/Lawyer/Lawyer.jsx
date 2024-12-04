import React from "react";
import "./Lawyer.css";
import { Link } from "react-router-dom";
import briefcase from "../../assets/images/category_logo/briefcase.png";
import lawyer9 from "../../assets/images/lawyer_9.jpg";
import lawyer5 from "../../assets/images/lawyer_5.jpeg";
import star from "../../assets/images/category_logo/star.png";
import rating from "../../assets/images/category_logo/rating.png";
import verified from "../../assets/images/category_logo/verified.png";
import { useSelector } from "react-redux";

function Lawyer() {
  const lawyerItem = useSelector((state) => state.lawyer.lawyerData);
  console.log("lawyerData:", lawyerItem);
  return (
    <div>
      <section class="lawyer_page">
        <div class="custom_container">
          <div class="lawyer_row">
            <div class="col_9">
              <div class="lawyer_page_profile">
                <img src={lawyerItem.imgSrc} alt="" />
                <div class="lawyer_detail">
                  <h3>{lawyerItem.name}</h3>
                  <div class="lawyer_rating_main">
                    <div className="rating_img">
                      <img src={lawyerItem.ratings[0].s1} alt="" />
                      <img src={lawyerItem.ratings[0].s2} alt="" />
                      <img src={lawyerItem.ratings[0].s3} alt="" />
                      <img src={lawyerItem.ratings[0].s4} alt="" />
                      <img src={lawyerItem.ratings[0].s5} alt="" />
                    </div>

                    <span>4.9 | 50+ user ratings</span>
                  </div>
                  <div class="lawyer_experience">
                    <img src={briefcase} alt="" />
                    <h4>{lawyerItem.exp}</h4>
                  </div>
                </div>
              </div>
              <div class="about_section">
                <h4>About</h4>
                <p>
                  {lawyerItem.name} is a seasoned attorney with over 8 years of
                  experience in various areas of law, including family law,
                  criminal defense, and corporate law. Committed to providing
                  personalized legal solutions, Harshwardhan believes in a
                  client-centered approach that prioritizes clear communication
                  and understanding.
                </p>
              </div>
              <div class="specialization">
                <h4>Specialization</h4>
                <p>
                  {lawyerItem.name} specializes in a diverse range of legal
                  fields, including family law, criminal defense, and corporate
                  law. With over 8 years of experience, he adeptly navigates
                  complex issues such as divorce, child custody, and domestic
                  violence in family law. In criminal defense, Harshwardhan is
                  committed to protecting the rights of his clients facing
                  charges ranging from DUI to white-collar crimes. Additionally,
                  he provides comprehensive legal guidance to businesses in
                  areas such as contract negotiation and compliance, ensuring
                  that clients receive tailored solutions that meet their
                  specific needs. His multifaceted expertise allows him to
                  advocate effectively for clients in various challenging
                  situations.
                </p>
              </div>
              <div class="lawyer_reviews">
                <h4>Reviews</h4>
                <div class="lawyer_reviews_item">
                  <img src={lawyer5} alt="" />
                  <div class="lawyer_page_review">
                    <h4>
                      AMAN SAWHNEY- <img src={verified} alt="" /> Verified
                    </h4>
                    <div class="lawyer_ratings">
                      <div className="rating_img">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={rating} alt="" />
                      </div>
                    </div>
                    <p>
                      "I had the pleasure of working with {lawyerItem.name} for
                      my business’s legal needs. He was thorough and attentive,
                      ensuring that all aspects of our contracts were handled
                      with care. His expertise in corporate law gave me
                      confidence, and I highly recommend him!"
                    </p>
                    <span>24 October 2022</span>
                  </div>
                </div>
                <div class="lawyer_reviews_item">
                  <img src={lawyer9} alt="" />
                  <div class="lawyer_page_review">
                    <h4>
                      TARUNA SINGH- <img src={verified} alt="" /> Verified
                    </h4>
                    <div class="lawyer_ratings">
                      <div className="rating_img">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={rating} alt="" />
                      </div>
                    </div>
                    <p>
                      I cannot recommend {lawyerItem.name} enough for family law
                      matters. He handled my child custody case with the utmost
                      care and compassion. He was always available to answer my
                      questions, and I felt supported throughout the entire
                      process.
                    </p>
                    <span>20 September 2024</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col_3">
              <h4>Language</h4>
              <div class="languages">
                <span>English</span>
                <span>Hindi</span>
                <span>Tamil</span>
              </div>

              <h4>Courts</h4>
              <div class="courts">
                <span>KKD Court</span>
                <span>Supreme Court</span>
                <span>High Court</span>
                <span>Tees Hazari Court</span>
                <span>Saket Court</span>
              </div>

              <Link to="/consult" class="btn-default">
                Consult Now
              </Link>
            </div>
          </div>

          <div class="lawyer_page_faqs">
            <h4>FAQ</h4>
            <div class="faq_item">
              <details>
                <summary>What are your area of expertise?</summary>
                <div class="answer">
                  {lawyerItem.name} brings over {lawyerItem.exp} in various
                  areas of law, specializing in family law, criminal defense,
                  and corporate law. He adeptly handles complex family law
                  matters, including divorce, child custody, and adoption,
                  ensuring his clients receive compassionate support during
                  challenging times.
                </div>
              </details>
            </div>
            <div class="faq_item">
              <details>
                <summary>How can I book an appointment?</summary>
                <div class="answer">
                  Booking an appointment with {lawyerItem.name} is easy! You can
                  schedule a consultation by filling out our online contact
                  form, where you can provide your details and preferred times.
                  Alternatively, you can call our office directly at 9992265434
                  to speak with a member of our team who will assist you in
                  finding a suitable time. We look forward to helping you with
                  your legal needs!
                </div>
              </details>
            </div>
            <div class="faq_item">
              <details>
                <summary>
                  What documents should I bring for consultation?
                </summary>
                <div class="answer">
                  To make the most of your consultation with {lawyerItem.name},
                  please bring any relevant documents related to your legal
                  issue. This may include identification (such as a driver's
                  license or passport), contracts or agreements, court
                  documents, financial statements, and any correspondence
                  related to your case. If your matter involves family law,
                  please bring any pertinent paperwork regarding child custody
                  or support. For criminal defense cases, any police reports or
                  notices you have received would be helpful. Having these
                  documents on hand will allow us to better understand your
                  situation and provide you with tailored legal advice.
                </div>
              </details>
            </div>
            <div class="faq_item">
              <details>
                <summary>Do you handle international cases?</summary>
                <div class="answer">
                  Yes, {lawyerItem.name} is equipped to handle international
                  cases, particularly in areas such as immigration law,
                  international business transactions, and cross-border family
                  law matters. With a deep understanding of the complexities
                  involved in international legal issues, he collaborates with
                  clients to navigate the unique challenges they face. If you
                  have an international legal concern, please reach out to
                  discuss your situation in detail and explore how we can assist
                  you.
                </div>
              </details>
            </div>
            <div class="faq_item">
              <details>
                <summary>What are your consultation fees?</summary>
                <div class="answer">
                  This fee allows us to thoroughly assess your legal situation
                  and provide you with valuable insights. Should you choose to
                  retain our services following the consultation, this fee may
                  be applied toward your overall legal costs. Please feel free
                  to contact us for more details or to discuss any specific
                  concerns regarding fees.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Lawyer;
