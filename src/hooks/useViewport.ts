import { useEffect, useState } from 'react';

export const useViewport = () => {
  const { width: initialWidth, height: initialHeight } = getWindowDimensions();

  const [windowDimensions, setWindowDimensions] = useState({
    width: initialWidth,
    height: initialHeight,
  });

  useEffect(() => {
    function handleResize() {
      const { width: newWidth, height: newHeight } = getWindowDimensions();

      if (newWidth > initialWidth || newHeight > initialHeight) {
        setWindowDimensions({ width: newWidth, height: newHeight });
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [initialHeight, initialWidth]);

  return windowDimensions;
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
