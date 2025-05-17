// components/FadeInOnScroll.js
import { useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';
import classNames from 'classnames';
import { useMediaQuery } from '@react-hook/media-query';

const FadeInOnScroll = ({ children }) => {
  const elementRef = useRef(null);
  const { y } = useWindowScroll();
  const isSmallViewport = useMediaQuery('(max-width: 640px)');
  const [hasAnimated, setHasAnimated] = useState(isSmallViewport);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element && !hasAnimated) {
        const elementTop = element.getBoundingClientRect().top;
        const viewportHeight = document.documentElement.clientHeight;
        if (elementTop < viewportHeight) {
          element.classList.add('opacity-100');
          setHasAnimated(true);
          // window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    // if (!isSmallViewport) {
    //   // Check if element is initially in view
    //   handleScroll();
  
    //   window.addEventListener('scroll', handleScroll, false);
    // }
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, [hasAnimated]);

  const classes = classNames('opacity-0 transition-opacity duration-500', {
    'opacity-100': hasAnimated,
  });

  return <div ref={elementRef}>{children}</div>;
};

export default FadeInOnScroll;
