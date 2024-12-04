import React, { useState } from "react";
import "./Consult.css";
import lawyer2 from "../../assets/images/lawyer_2.jpg";
import star from "../../assets/images/category_logo/star.png";
import rating from "../../assets/images/category_logo/rating.png";
import briefcase from "../../assets/images/category_logo/briefcase.png";
import verified from "../../assets/images/category_logo/verified.png";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Consult() {
  let decisionInput = useLocation();
  const [modal, setModal] = useState("hide");
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    caseCategory: "",
    contactMethod: "",
    contactTime: "",
    caseDescription: "",
    appointmentDate: "",
    termsCheck: false,
  });

  const lawyerItem = useSelector((state) => state.lawyer.lawyerData);

  // const [modalVisible, setModalVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const {
      firstName,
      lastName,
      email,
      phone,
      caseCategory,
      contactMethod,
      contactTime,
      caseDescription,
      appointmentDate,
      termsCheck,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !caseCategory ||
      !contactMethod ||
      !contactTime ||
      !caseDescription ||
      !appointmentDate ||
      !termsCheck
    ) {
      alert("Please fill out all required fields and agree to the terms.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // If the form is valid, trigger the modal.
      setModal("show");
    }
  };

  return (
    <div>
      <section class="lawyer_page">
        <div class="custom_container">
          <div class="lawyer_page_row">
            <div class="col_9">
              {decisionInput.pathname === "/consult" ? (
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
                    <div class="about_section">
                      <h4>About</h4>
                      <p>
                        {lawyerItem.name} is a seasoned attorney with over 8
                        years of experience in various areas of law, including
                        family law, criminal defense, and corporate law.
                        Committed to providing personalized legal solutions,
                        Harshwardhan believes in a client-centered approach that
                        prioritizes clear communication and understanding.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div class="consultation_form">
                {decisionInput.pathname === "/consult" ? (
                  <h3>Free Consultation Booking</h3>
                ) : (
                  <h3>Case Request</h3>
                )}
                <form action="" method="post" onSubmit={handleSubmit}>
                  <div class="name form_div">
                    <div class="first">
                      <label for="">First Name</label>
                      <input
                        name="firstName"
                        type="text"
                        placeholder="eg. Rohit"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="middle">
                      <label for="">Middle Name</label>
                      <input
                        name="middleName"
                        type="text"
                        placeholder="eg. Singh"
                        value={formData.middleName}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="last">
                      <label for="">Last Name</label>
                      <input
                        name="lastName"
                        type="text"
                        placeholder="eg. Kashyap"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div class="mail_phone form_div">
                    <div class="email">
                      <label for="">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="eg. rohit@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="phone">
                      <label for="">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="eg. +91XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div class="category form_div">
                    <div class="case_category">
                      <label for="">Case Category</label>
                      <select
                        name="caseCategory"
                        value={formData.caseCategory}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="Divorce">Divorce</option>
                        <option value="Cheque_Bounce">Cheque Bounce</option>
                        <option value="Family">Family</option>
                        <option value="Litigation">Litigation</option>
                        <option value="Property">Property</option>
                        <option value="Consumer_Complaint">
                          Consumer Complaint
                        </option>
                      </select>
                    </div>
                    <div class="phone">
                      <label for="">Phone Number</label>
                      <input type="tel" placeholder="eg. +91XXXXX" />
                    </div>
                    <div class="contact_method">
                      <label for="">Contact Method</label>
                      <select
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="Email">Email</option>
                        <option value="Phone">Phone</option>
                        <option value="WhatsApp">WhatsApp</option>
                      </select>
                    </div>
                    <div class="contact_time">
                      <label for="">Contact Time</label>
                      <select
                        name="contactTime"
                        value={formData.contactTime}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                      </select>
                    </div>
                  </div>
                  <div class="case_description form_div">
                    <label for="">Case Description</label>
                    <textarea
                      name="caseDescription"
                      placeholder="Write your case description here..."
                      value={formData.caseDescription}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div class="appointment_date form_div">
                    <label for="">Appointment Date</label>
                    <input
                      type="date"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="terms">
                    <input
                      type="checkbox"
                      name="termsCheck"
                      checked={formData.termsCheck}
                      onChange={handleChange}
                    />
                    <p>
                      {" "}
                      I accept and agree to the{" "}
                      <a href="">Terms and Conditions</a> and
                      {" "}<a href="">Privacy Policy</a>
                    </p>
                  </div>

                  <button type="submit" class="btn-default">
                    Consult Now
                  </button>

                  
        <div class="form_modal" style={ modal === "hide" ? {display: "none"} : {display: "flex", justifyContent:"center"}}>
          <div class="form_content">
            <div class="div_1">
              <img src={verified} alt="" />
              <h3>Appointment Booking Successful</h3>
              <p>
                <ul>
                  <li>Name: {formData.firstName} {formData.lastName}</li>
                  <li>Email: {formData.email}</li>
                  <li>Phone: {formData.phone}</li>
                  <li>Case Category: {formData.caseCategory}</li>
                  <li>Contact Method: {formData.contactMethod}</li>
                  <li>Contact Time: {formData.contactTime}</li>
                </ul>
              </p>
            </div>
            <i
              class="fa-solid fa-x"
              onClick={() => (window.location.pathname = "/")}
            ></i>
          </div>
        </div>
      
                </form>
              </div>
            </div>
            {decisionInput.pathname === "/consult" ? (
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
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default Consult;
