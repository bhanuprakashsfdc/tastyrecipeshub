import React from 'react';
import { FaWhatsapp, FaFacebookF, FaPinterestP, FaXTwitter, FaPlus } from 'react-icons/fa';

{/* 
    Sample usage of component 
    import React from 'react';
import SocialShare from './components/SocialShare';

const BlogDetailsPage = () => {
  const currentUrl = window.location.href;

  return (
    <div>      
      <h2>Share this article:</h2>
      <SocialShare currentUrl={currentUrl} />
    </div>
  );
};

export default BlogDetailsPage;

    
*/}
const SocialShare = ({ currentUrl }) => {
  const encodedUrl = encodeURIComponent(currentUrl);

  const socialLinks = [
    {
      platform: 'WhatsApp',
      url: `https://wa.me/?text=${encodedUrl}`,
      icon: <FaWhatsapp />,
      color: '#25D366'
    },
    {
      platform: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <FaFacebookF />,
      color: '#1877F2'
    },
    {
      platform: 'Pinterest',
      url: `https://pinterest.com/pin/create/button/?url=${encodedUrl}`,
      icon: <FaPinterestP />,
      color: '#E60023'
    },
    {
      platform: 'Twitter',
      url: `https://twitter.com/share?url=${encodedUrl}`,
      icon: <FaXTwitter />,
      color: '#000000'
    },
    {
      platform: 'More',
      url: `mailto:?body=${encodedUrl}`,
      icon: <FaPlus />,
      color: '#FF4500'
    },
  ];

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {socialLinks.map((social, index) => (
        <a 
          key={index} 
          href={social.url} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 15px',
            backgroundColor: social.color,
            borderRadius: '5px',
            color: '#fff',
            textDecoration: 'none',
            transition: 'background-color 0.3s ease',
          }}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialShare;
