import "./LawyerListing.css";
import { Link } from "react-router-dom";
import briefcase from "../../assets/images/category_logo/briefcase.png";
import mapandflag from "../../assets/images/category_logo/maps-and-flags.png";
import React, { useEffect, useState } from "react";
import RangeSlider from "../common/RangeSlider";
import { useDispatch } from "react-redux";
import {lawyerDetail} from "../../redux/lawyerSlice"

function LawyerListing() {
  const [range, setRange] = useState({ from: 20, to: 80 });
  let [lawyer, setLawyer] = useState([])

  const dispatch = useDispatch()

  const handleLawyerDetail = (item) => {
    dispatch(lawyerDetail(item))
  }

  const handleRangeChange = (from, to) => {
    setRange({ from, to });
  };

  useEffect(()=>{
    const fetchData = async ()=> {
      try{
        const response = await fetch("https://raw.githubusercontent.com/jasvinderkhera/Fake-Server/refs/heads/main/legalSo.json")
        if(!response.ok){
          throw new Error("API is not working...")
        }
        const data = await response.json().then((Data)=>Data.lawyers)
        console.log(data)
        setLawyer(data)
      } catch(error){

      }
    } 
    fetchData()
  },[])

  return (
    <div>
      <section className="section lawyer_listing_banner">
        <div className="custom_container">
          <h2>500+ Consumer Protection Lawyers</h2>
          <p>
            Consumer protection lawyers specialize in advocating for the rights
            of consumers. They handle cases related to fraud, deceptive
            practices, product liability, warranty issues, and unfair business
            practices.
          </p>
        </div>
      </section>

      <section className="section lawyer_listing_main">
        <div className="custom_container">
          <div className="lawyer_listing_content">
            <div className="col_1">
             <div className="range">
             <h3>Consulting Price</h3>
              <hr />

              <RangeSlider
                min={500}
                max={10000}
                from={range.from}
                to={range.to}
                onChange={handleRangeChange}
              />
             </div>

              <div className="search_category">
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

              <div className="search_category">
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
             { lawyer.length > 0 ? lawyer.map((item)=>(
              <Link to={"/lawyer"} onClick={()=>handleLawyerDetail(item)} className="lawyer_profile" key={item.id}>
                <div className="lawyer_img">
                  <img src={item.imgSrc} alt={item.name} />
                </div>
                <div className="lawyer_details">
                  <h3>{item.name}</h3>

                  <div className="lawyer_ratings">
                    <img src={item.ratings[0].s1} alt="" />
                    <img src={item.ratings[0].s2} alt="" />
                    <img src={item.ratings[0].s3} alt="" />
                    <img src={item.ratings[0].s4} alt="" />
                    <img src={item.ratings[0].s5} alt="" />
                  </div>

                  <div className="lawyer_experience">
                    <img src={briefcase} alt="" />
                    <h4>{item.exp}</h4>
                  </div>

                  <div className="lawyer_tags">
                    <span>{item.tags[0].t1}</span>
                    <span>{item.tags[0].t2}</span>
                    <span>{item.tags[0].t3}</span>
                    <span>{item.tags[0].t4}</span>
                    <span>{item.tags[0].t5}</span>
                  </div>

                  <hr />

                  <div className="lawyer_location">
                    <img src={mapandflag} alt="" />
                    <p>
                      {`${item.location[0].chamber}, ${item.location[0].court}, ${item.location[0].area}, ${item.location[0].district}, ${item.location[0].city}`}
                    </p>
                  </div>
                </div>
                <div className="consult_div">
                  <h4>INR {item.price}</h4>
                  <Link to={"/lawyer"} className="btn btn-default" onClick={()=>handleLawyerDetail(item)}>
                    Consult
                  </Link>
                </div>
              </Link>
             )) : "" }
        
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LawyerListing;
