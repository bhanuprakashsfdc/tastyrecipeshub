import React from 'react'
import Banner from '../utils/Banner';
import blogData from '../data/blogData.json';

const Blogs = () => {
  return (
    <div>
       <Banner bannerType="blogbanner" />
       <section className="blog-page-area py-130 rpy-100 blogarea">
      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-standard-wrap">
              {blogData.posts.map((post, index) => (
                <div key={index} className="blog-item style-two" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                  <div className="image">
                    <img src={post.image} alt="Blog Standard" />
                  </div>
                  <div className="content">
                    <ul className="blog-meta-two">
                      <li><a href="#">{post.category}</a></li>
                      <li><a href="#">{post.date}</a></li>
                      <li><a href="#">{post.comments}</a></li>
                    </ul>
                    <h3><a href={post.link}>{post.title}</a></h3>
                    <p>{post.description}</p>
                    <a href={post.link} className="theme-btn">Read more <i className="far fa-arrow-alt-right"></i></a>
                  </div>
                </div>
              ))}

              <blockquote className="mt-40 mb-45" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                <div className="text"><span>“</span> Resilience, Flexibility Immediacy Working With Headless Systems Google Analyze Compare Changer Browser Back/Forward</div>
                <div className="blockquote-footer">Martin M. Nordquist</div>
              </blockquote>
              
              {/* Add Pagination */}
              <ul className="pagination pt-10 flex-wrap" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#"><i className="fal fa-arrow-right"></i></a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-8">
            <div className="main-sidebar rmt-75">
              <div className="widget widget-search" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                <h4 className="widget-title">Search</h4>
                <form action="#" className="default-search-form">
                  <input type="text" placeholder="Search here" required />
                  <button type="submit" className="searchbutton far fa-search"></button>
                </form>
              </div>
              
              <div className="widget widget-category" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
                <h4 className="widget-title">Category</h4>
                <ul>
                  {blogData.categories.map((category, index) => (
                    <li key={index}><a href={category.link}>{category.name} <span className="count">{category.count}</span></a></li>
                  ))}
                </ul>
              </div>
              
              <div className="widget widget-recent-news" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
                <h4 className="widget-title">Recent news</h4>
                <ul>
                  {blogData.recentNews.map((news, index) => (
                    <li key={index}>
                      <div className="image">
                        <img src={news.image} alt="News" />
                      </div>
                      <div className="content">
                        <span className="date">{news.date}</span>
                        <h6><a href={news.link}>{news.title}</a></h6>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="widget widget-tag-cloud" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                <h4 className="widget-title">Popular Tags</h4>
                <div className="tag-coulds">
                  {blogData.tags.map((tag, index) => (
                    <a key={index} href="shop.html">{tag}</a>
                  ))}
                </div>
              </div>
              
              <div className="widget widget-banner" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                <div className="category-banner-item" style={{ backgroundImage: "url(assets/images/widgets/banner-bg.jpg)" }}>
                  <span className="price">only $59</span>
                  <h3>SPECIALTY PIZZAS</h3>
                  <div className="ratting">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span>(5k)</span>
                  </div>
                  <a href="shop.html" className="theme-btn style-two">Order now <i className="far fa-arrow-alt-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Blogs
