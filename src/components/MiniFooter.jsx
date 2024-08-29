import React from 'react'
import ResponsiveList from '../utils/ResponsiveList';
import { NAME } from '../constants/constants';

const MiniFooter = () => {
    /* Footer Links */
    const links = [
        { text: 'Privacy Policy', url: '/privacy-policy.html' },
        { text: 'Terms & Condition', url: '/terms-and-conditions.html' },
      ];
      
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  Copyright 2024 <a href="/"> <span className="minfmenu"> { NAME } </span></a>. All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <ResponsiveList links={links} />
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MiniFooter
