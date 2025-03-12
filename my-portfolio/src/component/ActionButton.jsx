import React, { useState } from 'react';

const ActionButton = ({ url, icon, alt, color }) => {
  const [clicked, setClicked] = useState(false);

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleClick = () => {
    setClicked(true);
    openLink(url);
    setTimeout(() => {
      setClicked(false);
    }, 200); // Reset after 200 milliseconds
  };

  return (
    <button
      className={`border-2 justify-items-center [box-shadow:4px_4px_0px_black] w-[3em] h-[3em] p-1 
                  hover:translate-2 duration-300 ease-in-out transform 
                  hover:scale-105 hover:[box-shadow:0px_0px_0px_black] 
                  focus:border-[#000000] focus:outline-none 
                  active:[box-shadow:0px_0px_0px_black] active:scale-95 
                  ${clicked ? 'active:scale-90' : ''}`} 
      style={{ backgroundColor: color }} // Set the button color
      onClick={handleClick}
    >
      <img src={icon} alt={alt} />
    </button>
  );
};

export default ActionButton;
