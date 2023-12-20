import { useEffect, useState } from 'react';

function useWindowSize(initialSize = { width: 0, height: 0 }) {
  const [windowSize, setWindowSize] = useState(initialSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
