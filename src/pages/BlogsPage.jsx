import React from 'react';
import Banner from '../utils/Banner';
import blogData from '../data/blogData.json';

import SearchWidget from '../components/widgets/SearchWidget';
import CategoryWidget from '../components/widgets/CategoryWidget';
import RecentNewsWidget from '../components/widgets/RecentNewsWidget';
import TagCloudWidget from '../components/widgets/TagCloudWidget';
import BannerWidget from '../components/widgets/BannerWidget';

const BlogsPage = () => {
  // Extracting necessary data from the JSON
  const { posts = [], categories = [], recentNews = [], tags = [] } = blogData;

  return (
    <div>
      {/* Banner Component */}
      <Banner bannerType="blogbanner" />

      {/* Blog Page Area */}
      <section className="blog-page-area py-130 rpy-100 blogarea">
        <div className="container container-1290">
          <div className="row">
            {/* Blog Posts Section */}
            <div className="col-lg-8">
              <div className="blog-standard-wrap">
                {posts.length > 0 ? (
                  posts.map((post, index) => (
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
                  ))
                ) : (
                  <p>No blog posts available.</p>
                )}

                <blockquote className="mt-40 mb-45" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                  <div className="text"><span>“</span> Resilience, Flexibility Immediacy Working With Headless Systems Google Analyze Compare Changer Browser Back/Forward</div>
                  <div className="blockquote-footer">Martin M. Nordquist</div>
                </blockquote>

                {/* Pagination */}
                <ul className="pagination pt-10 flex-wrap" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#"><i className="fal fa-arrow-right"></i></a></li>
                </ul>
              </div>
            </div>

            {/* Sidebar Widgets */}
            <div className="col-lg-4 col-md-8">
              <div className="main-sidebar rmt-75">
                 <SearchWidget />
                 <CategoryWidget />
                 <RecentNewsWidget />
                 <TagCloudWidget />
                 <BannerWidget />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
