import React from "react";
import "./BlogDetailPage.css";
import { useSelector } from "react-redux";

function BlogDetailPage() {
  const blogItem = useSelector((state) => state.blog.blogData);
  console.log("blogData", blogItem);

  return (
    <div>
      <section className="blogDetailSection">
        <div className="custom_container">
          {blogItem != 0 ? (
            <div className="blog_row">
              <div className="blog_col1">
                <div className="topArea">
                  <div className="breadcrumb">
                    <div className="breadcrumb_content">
                      <h4>Blog &nbsp;/ &nbsp; {blogItem.title}</h4>
                    </div>
                  </div>
                  <div className="extradots">
                    <span>...</span>
                  </div>
                </div>
                <div className="blogTitle">
                  <h1>{blogItem.title}</h1>
                </div>

                <div className="blogAuthor">
                  <h4>{blogItem.author}</h4>
                </div>
                <div className="blogDate">
                  <h5>{blogItem.date}</h5>
                </div>
                <div className="blogImage">
                  <img src={blogItem.imgSrc} alt="" />
                </div>
                <div className="para1">
                  <p>{blogItem.p1}</p>
                </div>
                <div className="para2">
                  <p>{blogItem.p2}</p>
                </div>
              </div>
              <div className="blog_col2"></div>
            </div>
          ) : (
            <div>
              <h3>Not Found...</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default BlogDetailPage;
