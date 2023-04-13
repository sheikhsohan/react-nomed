import { IoLogoFacebook } from 'react-icons/io5';
import { useState, useEffect } from 'react';

const PersonalWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.location.href = 'https://facebook.com/s.s0han';
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
	transform: 'translateY(-130%)',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    display: isVisible ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <button className="floating-button" style={buttonStyle} onClick={handleClick}>
      <IoLogoFacebook size={32} />
    </button>
  );
};

export default PersonalWebsite;
