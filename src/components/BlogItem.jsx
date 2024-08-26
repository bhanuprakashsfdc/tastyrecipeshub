import React from 'react';

const BlogItem = ({ date, image, tag, title, author, comments, link }) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div
        className="blog-item-two"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="50"
      >
        <div className="image">
          <span className="date">{date}</span>
          <img src={image} alt="Blog" />
        </div>
        <div className="content">
          <a href="#" className="tag">
            <i className="far fa-tag"></i> {tag}
          </a>
          <h4>
            <a href={link}>{title}</a>
          </h4>
          <ul className="blog-meta-two style-two textre">
            <li>
              <i className="far fa-user"></i>
              <a href="#">{author}</a>
            </li>
            <li>
              <i className="far fa-comments"></i>
              <a href="#">comments ({comments})</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
