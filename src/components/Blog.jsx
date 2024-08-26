import React from 'react';
import BlogItem from './BlogItem';
import blogData from '../data/blogData.json';

const Blog = () => {
  return (
    <section className="blog-area-five bg-light pt-130 rpt-100 pb-95 rpb-65 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb-50"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <span className="sub-title mb-5">Latest News & Blog</span>
              <h2>Get Every Single Update</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {blogData.map((blog, index) => (
            <BlogItem
              key={index}
              date={blog.date}
              image={blog.image}
              tag={blog.tag}
              title={blog.title}
              author={blog.author}
              comments={blog.comments}
              link={blog.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
