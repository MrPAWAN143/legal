import React, { useEffect, useState } from 'react'
import "./Blog.css"
import { useDispatch } from 'react-redux'
import { blogDetail } from '../../redux/blogSlice'
import { Link } from 'react-router-dom'

function Blog() {
  let [blog, setBlog] = useState([])

  const dispatch = useDispatch();

  const handleBlogDetail = (item) => {
    dispatch(blogDetail(item))
  }

  useEffect(()=>{
    const fetchBlog = async() =>  {
      try{
        const response = await fetch('https://raw.githubusercontent.com/jasvinderkhera/Fake-Server/refs/heads/main/legalSo.json')
        if(!response.ok){
          throw new Error('API is not working....')
        }
        const data =  await response.json().then((Data)=>Data.blog)
        setBlog(data)
      }catch(error){
      }
      
    }
    fetchBlog()
  },[])
  return (
    <div>
        <section className='blog_section'>
            <div className="custom_container">
                <h2>Blog</h2>
                <div className="blog_row">
                  {blog.length != 0 ? blog.map((item)=> <Link to={"/blogdetail"} onClick={()=>handleBlogDetail(item)} className='blog_main_container'>
                    <div className='imgdiv'>
                      <img src={item.imgSrc} alt=""  style={{width:"100%", height:"100%"}}/>
                    </div>
                    <div className="blog_title">
                      <h4>{item.title}</h4>
                    </div>
                    <div className='author_div'>
                      <h5>{item.author} </h5>
                      </div>
                      <div className="some_data">
                        <p>{item.p1}</p>
                        <div className="blog_overlay"></div>
                      </div>

                  </Link>): <div><h2>"No Data Found..."</h2></div>}
                </div>
                <div className="next_btn">
                  <button className='nxt_btn'>Next</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Blog