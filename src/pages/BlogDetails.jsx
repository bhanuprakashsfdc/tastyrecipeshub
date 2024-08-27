import React from 'react';
import Banner from '../utils/Banner';
import blogDetailsData from '../data/blogDetails.json';
import SearchWidget from '../components/widgets/SearchWidget';
import CategoryWidget from '../components/widgets/CategoryWidget';
import RecentNewsWidget from '../components/widgets/RecentNewsWidget';
import TagCloudWidget from '../components/widgets/TagCloudWidget';
import BannerWidget from '../components/widgets/BannerWidget';

const BlogDetails = () => {
  const {
    blog,
    author,
    previousPost,
    nextPost,
    comments,
    tags
  } = blogDetailsData;

  return (
    <>
      <Banner bannerType="blogdetailbanner" />
      <section className="blog-details-area py-130 rpy-100 blogarea">
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrap">
                <div className="blog-item style-two">
                  <div className="image" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                    <img src={blog.image} alt="Blog Standard" />
                  </div>
                  <div className="content" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                    <ul className="blog-meta-two">
                      <li><a href="#">{blog.category}</a></li>
                      <li><a href="#">{blog.date}</a></li>
                      <li><a href="#">comments ({blog.commentsCount})</a></li>
                    </ul>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <div className="row pt-20 pb-5">
                      {blog.middleImages.map((image, index) => (
                        <div className="col-sm-6" key={index}>
                          <div className="image mb-30">
                            <img src={image} alt="Blog Middle" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote className="mt-40 mb-50" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                  <div className="text"><span>“</span> Create An Information Architecture That’s Easy To Use...</div>
                  <div className="blockquote-footer">Ronald M. Spino</div>
                </blockquote>

                <div className="tag-share">
                  <div className="item" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="50">
                    <h6>Popular Tag : </h6>
                    <div className="tags">
                      {tags.map((tag, index) => (
                        <a href="blog.html" key={index}>{tag}</a>
                      ))}
                    </div>
                  </div>
                  <div className="item" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="50">
                    <h6>Share News</h6>
                    <div className="social-style-one">
                      <a href={author.socialLinks.twitter}><i className="fab fa-twitter"></i></a>
                      <a href={author.socialLinks.facebook}><i className="fab fa-facebook-f"></i></a>
                      <a href={author.socialLinks.instagram}><i className="fab fa-instagram"></i></a>
                      <a href={author.socialLinks.pinterest}><i className="fab fa-pinterest-p"></i></a>
                    </div>
                  </div>
                </div>

                <div className="admin-comment bgc-lighter mt-30" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                  <div className="comment-body">
                    <div className="author-thumb">
                      <img src={author.image} alt="Author" />
                    </div>
                    <div className="content">
                      <h4>{author.name}</h4>
                      <span className="author">{author.role}</span>
                      <p>{author.description}</p>
                      <div className="social-icons">
                        <a href={author.socialLinks.facebook}><i className="fab fa-facebook-f"></i></a>
                        <a href={author.socialLinks.twitter}><i className="fab fa-twitter"></i></a>
                        <a href={author.socialLinks.linkedin}><i className="fab fa-linkedin-in"></i></a>
                        <a href={author.socialLinks.instagram}><i className="fab fa-instagram"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="next-prev-blog pt-45 pb-15">
                  <div className="item" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="50">
                    <div className="image">
                      <img src={previousPost.image} alt="News" />
                    </div>
                    <div className="content">
                      <span className="date">{previousPost.date}</span>
                      <h6><a href={previousPost.link}>{previousPost.title}</a></h6>
                    </div>
                  </div>
                  <div className="item" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="50">
                    <div className="image">
                      <img src={nextPost.image} alt="News" />
                    </div>
                    <div className="content">
                      <span className="date">{nextPost.date}</span>
                      <h6><a href={nextPost.link}>{nextPost.title}</a></h6>
                    </div>
                  </div>
                </div>

                <hr className="mb-95" />

                <h3 className="comment-title">Comments ({comments.length})</h3>
                <div className="comments rattings mt-25" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                  {comments.map((comment, index) => (
                    <div className={`comment-body ${index === 1 ? 'comment-child' : ''}`} key={index}>
                      <div className="author-thumb">
                        <img src={comment.image} alt="Author" />
                      </div>
                      <div className="content">
                        <ul className="comment-header">
                          <li><h6>{comment.name}</h6></li>
                          <li>{comment.date}</li>
                        </ul>
                        <p>{comment.comment}</p>
                        <a href="#" className="read-more">reply <i className="far fa-arrow-alt-right"></i></a>
                      </div>
                    </div>
                  ))}
                </div>

                <hr className="mt-90 mb-90" />

                <h3 className="comment-title">Send us comments</h3>
                <form id="comment-form" className="comment-form mt-30" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50" name="comment-form" action="#" method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" id="full-name" name="full-name" className="form-control" placeholder="Full Name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" id="blog-email" name="blog-email" className="form-control" placeholder="Email Address" required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea name="message" id="message" className="form-control" rows="4" placeholder="Add comments" required></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">Send Comments <i className="far fa-arrow-alt-right"></i></button>
                      </div>
                    </div>
                  </div>
                </form>

              </div>
            </div>
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
    </>
  );
};

export default BlogDetails;
