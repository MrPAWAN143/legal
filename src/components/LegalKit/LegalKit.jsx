import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./LegalKit.css"
import notFound from "../../assets/images/no-results.png" 
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LegalKit() {
  const [legalkit, setLegalkit] = useState([])
  const cartI = useSelector(state => state.cart)
  // console.log("cartI", cartI.cartData.length)

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  }

  const toastItem = () => {
    toast.success("Item added to Cart")
  }

  useEffect(()=>{
    const fetchData = async() =>  {
      try{
        const response = await fetch('https://raw.githubusercontent.com/jasvinderkhera/Fake-Server/refs/heads/main/legalSo.json')
        if(!response.ok){
          throw new Error('API is not working....')
        }
        const data =  await response.json().then((Data)=>Data.lawKits)
        // console.log(data)
        setLegalkit(data)
      }catch(error){
      }
      
    }
    fetchData()
    
  },[])
  return (
    <div>
      <section className='section'>
        <div className="custom_container">
             <div className="cartDiv"> <Link to={"/cart"} className='cartLink'><i className='fa-solid fa-cart-shopping'></i></Link>
             <span className='cart_length'>{cartI.cartData.length} </span></div>
          <div className="legal_kit_row">
        <div className="col_1">
        <div className="legalkit_search_category">
              <h3>Law Category</h3>
              <hr />

              <div className="category_list">
                <div className="category_list_item">
                  <input type="checkbox" name="" id="" />
                  <label for="">Civil Law</label>
                </div>
                <div className="category_list_item">
                  <input type="checkbox" name="" id="" />
                  <label for="">Criminal Law</label>
                </div>
                <div className="category_list_item">
                  <input type="checkbox" name="" id="" />
                  <label for="">Corporate Law</label>
                </div>
                <div className="category_list_item">
                  <input type="checkbox" name="" id="" />
                  <label for="">Family Law</label>
                </div>
                <div className="category_list_item">
                  <input type="checkbox" name="" id="" />
                  <label for="">Intellectual Property Law</label>
                </div>
                <div className="category_list_item">
                  <input type="checkbox" name="" id="" />
                  <label for="">Employment Law</label>
                </div>
                <div className="category_list_item">
                  <input type="checkbox" name="" id="" />
                  <label for="">Tax Law</label>
                </div>
                <div className="category_list_item">
                  <input type="checkbox" name="" id="" />
                  <label for="">Immigration Law</label>
                </div>
                <div className="category_list_item">
                  <input type="checkbox" name="" id="" />
                  <label for="">Constitutional Law</label>
                </div>
              </div>
            </div>
        </div>
        <div className="col_2">
          <div className="legal_kits_grid">
            {legalkit.length != 0 ? legalkit.map((item)=>(
              <div className="legal_grid_item" key={item.id}>
              <img src={item.imgSrc} alt={item.title} />
              <h3>{item.title}</h3>
              <span>₹{item.price.toLocaleString("en-IN")}</span>
              <button onClick={()=> {handleAddToCart(item);
                toastItem()
              }}>Add to Cart</button>
            </div>
            )) : <div className='notFound'>
              <img src={notFound} alt="" />
              <h2>Not Found</h2>
              </div>}
          </div>
        </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LegalKit