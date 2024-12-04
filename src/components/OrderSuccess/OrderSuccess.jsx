import React from 'react'
import verified from "../../assets/images/category_logo/verified.png";
import "./OrderSuccess.css"

function OrderSuccess() {
    let x = Math.floor((Math.random() * 1000000000) + 1);
  return (
    <div>
       <section className='section order_section'>
        <div className="custom_container">
        <div className="form_modal">
        <div className="form_content">
          <div className="div_1">
          <img src={verified} alt="" />
            <h3>Order Placed Successfully !</h3>
            <p>Your Order ID is {x}</p>
            </div>
        </div>
      </div>
        </div>
       </section>
    </div>
  )
}

export default OrderSuccess
