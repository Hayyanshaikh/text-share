import React, { useEffect, useState } from 'react';

const TextTypingAnimation = ({ text, typingSpeed = 100, delay = 1000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldReset, setShouldReset] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (shouldReset) {
        setDisplayText('');
        setCurrentIndex(0);
        setShouldReset(false);
      } else if (currentIndex === text.length) {
        setTimeout(() => {
          setShouldReset(true);
        }, 100);
      } else {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentIndex, text, typingSpeed, delay, shouldReset]);

  return (
    <p>
      {displayText}
      <span className="cursor"></span>
    </p>
  );
};

export default TextTypingAnimation;
