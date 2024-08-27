import React from 'react';

const RecentNewsWidget = () => {
  return (
    <div className="widget widget-recent-news" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
      <h4 className="widget-title">Recent news</h4>
      <ul>
        <li>
          <div className="image">
            <img src="assets/images/widgets/news1.jpg" alt="News" />
          </div>
          <div className="content">
            <span className="date">April 25, 2024</span>
            <h6><a href="blog-details.html">Savor & Share Culinary Chronicles Gastronomic Gazette Tales from the Table</a></h6>
          </div>
        </li>
        <li>
          <div className="image">
            <img src="assets/images/widgets/news2.jpg" alt="News" />
          </div>
          <div className="content">
            <span className="date">April 25, 2024</span>
            <h6><a href="blog-details.html">Savor & Share Culinary Chronicles Gastronomic Gazette Tales from the Table</a></h6>
          </div>
        </li>
        <li>
          <div className="image">
            <img src="assets/images/widgets/news3.jpg" alt="News" />
          </div>
          <div className="content">
            <span className="date">April 25, 2024</span>
            <h6><a href="blog-details.html">Savor & Share Culinary Chronicles Gastronomic Gazette Tales from the Table</a></h6>
          </div>
        </li>
        <li>
          <div className="image">
            <img src="assets/images/widgets/news4.jpg" alt="News" />
          </div>
          <div className="content">
            <span className="date">April 25, 2024</span>
            <h6><a href="blog-details.html">Savor & Share Culinary Chronicles Gastronomic Gazette Tales from the Table</a></h6>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RecentNewsWidget;
