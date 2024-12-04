import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../../assets/images/empty.png";
import {
  decreaseItem,
  increaseItem,
  removeFromCart,
} from "../../redux/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const [finalPrice, setFinalPrice] = useState(null);
  const [changeCount, setChangeCount] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  console.log("change", changeCount);

  const increaseProd = (id) => {
    setChangeCount(changeCount + 1);
    dispatch(increaseItem(id));
  };
  const decreaseProd = (id) => {
    setChangeCount(changeCount - 1);
    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem.quantity == 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(decreaseItem(id));
    }
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    let totalPrice = cartItems
      .map((item) => {
        return item.price*item.quantity;
      })
      .reduce((total, current) => total + current, 0);
    setFinalPrice(totalPrice);
  }, [cartItems, changeCount]);

  return (
    <div className="cart_page">
      <section className="cart_section">
        <div className="custom_container">
          <h2>Cart</h2>
          <div className="cart_row">
            {cartItems.length !== 0 ? (
              <div className="col1">
                <table>
                  <thead>
                    <tr>
                      <th className="serial_no">S No.</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Final Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.length !== 0 ? (
                      cartItems.map((item, index) => (
                        <tr key={item.id}>
                          <td className="serial_no">{index + 1}</td>
                          <td>{item.title}</td>
                          <td>₹ {item.price.toLocaleString("en-In")}</td>
                          <td>
                            <span onClick={() => decreaseProd(item.id)}>-</span>
                            {item.quantity}
                            <span onClick={() => increaseProd(item.id)}>+</span>
                          </td>
                          <td>₹ {item.price * item.quantity}</td>
                          <td>
                            <button
                              className="remove_btn"
                              onClick={() => {
                                removeItem(item.id);
                              }}
                            >
                              <i className="fa-solid fa-x"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} style={{ textAlign: "center" }}>
                          "Cart is Empty"
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
               
              </div>
            ) : (
              <div className="not_content">
                {" "}
                <img src={emptyCart} alt="" /> <h2>Cart is Empty !</h2>
              </div>
            )}
            {cartItems.length !== 0 ? (
              <div className="col2">
                <h2 className="final_amount">Amount Payable</h2>
                <div className="totalPayable">
                  <h2>{finalPrice != 0 ? <h2>₹{finalPrice}</h2> : 0} </h2>

                  <Link
                  to={"/cart/ordersuccess"}
                    className="placeorder_btn"
                  >
                    Place Order
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {cartItems.length !== 0 ? (
                  <div className="row">
                  <div className="col-75">
                    <div className="container">
                      <form action="">
                        <div className="row">
                          <div className="col-50">
                            <h3>Billing Address</h3>
                            <label for="fname">
                              <i className="fa fa-user"></i> Full Name
                            </label>
                            <input
                              type="text"
                              id="fname"
                              name="firstname"
                              placeholder="Rohit Singh"
                            />
                            <label for="email">
                              <i className="fa fa-envelope"></i> Email
                            </label>
                            <input
                              type="text"
                              id="email"
                              name="email"
                              placeholder="rohit@example.com"
                            />
                            <label for="adr">
                              <i className="fa fa-address-card-o"></i> Address
                            </label>
                            <input
                              type="text"
                              id="adr"
                              name="address"
                              placeholder="E-54, South Extension"
                            />
                            <label for="city">
                              <i className="fa fa-institution"></i> City
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              placeholder="New Delhi"
                            />
    
                            <div className="row">
                              <div className="col-50">
                                <label for="state">State</label>
                                <input
                                  type="text"
                                  id="state"
                                  name="state"
                                  placeholder="Delhi"
                                />
                              </div>
                              <div className="col-50">
                                <label for="zip">Zip</label>
                                <input
                                  type="text"
                                  id="zip"
                                  name="zip"
                                  placeholder="110023"
                                />
                              </div>
                            </div>
                          </div>
    
                          <div className="col-50">
                            <h3>Payment</h3>
                            <label for="fname">Accepted Cards</label>
                            <div className="icon-container">
                              <i className="fa-brands fa-cc-visa" style={{color:"navy"}}></i>
                              <i className="fa-brands fa-cc-amex" style={{color:"blue"}}></i>
                              <i className="fa-brands fa-cc-mastercard" style={{color:"red"}}></i>
                              <i
                                className="fa-brands fa-cc-discover"
                                style={{color:"orange"}}
                              ></i>
                            </div>
                            <label for="cname">Name on Card</label>
                            <input
                              type="text"
                              id="cname"
                              name="cardname"
                              placeholder="Rohit Singh"
                            />
                            <label for="ccnum">Credit card number</label>
                            <input
                              type="text"
                              id="ccnum"
                              name="cardnumber"
                              placeholder="1111-2222-3333-4444"
                            />
                            <label for="expmonth">Exp Month</label>
                            <input
                              type="text"
                              id="expmonth"
                              name="expmonth"
                              placeholder="September"
                            />
                            <div className="row">
                              <div className="col-50">
                                <label for="expyear">Exp Year</label>
                                <input
                                  type="text"
                                  id="expyear"
                                  name="expyear"
                                  placeholder="2027"
                                />
                              </div>
                              <div className="col-50">
                                <label for="cvv">CVV</label>
                                <input
                                  type="text"
                                  id="cvv"
                                  name="cvv"
                                  placeholder="352"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <label>
                          <input type="checkbox" checked="checked" name="sameadr" />{" "}
                          Shipping address same as billing
                        </label>
                        <Link to={"/cart/ordersuccess"} className="checkout_btn"> Continue to Checkout</Link>
                      </form>
                    </div>
                  </div>
                </div>
                ) : (
                  ""
                )}
        </div>
      </section>

      
    </div>
  );
}

export default Cart;
