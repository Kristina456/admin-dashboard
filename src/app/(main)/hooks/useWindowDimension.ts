import { useEffect, useState } from 'react';

type WindowDimensions = {
  width: number | undefined;
};

export function useWindowDimension() {
  const [windowDimension, setWindowDimension] = useState<WindowDimensions>({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimension({
        width: window.innerWidth,
      });
    }
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimension;
}
