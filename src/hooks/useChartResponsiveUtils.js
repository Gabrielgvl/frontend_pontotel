import { useEffect, useState } from 'react';
import useMobile from './useMobile';

const useChartResponsiveUtils = () => {
  const [render, setRender] = useState(false);
  const isMobile = useMobile();

  // Workaround to chart re-render when screen width changes
  useEffect(() => {
    setRender(false);
    setTimeout(() => {
      setRender(true);
    }, 1000);
  }, [isMobile]);

  return { render, isMobile };
};

export default useChartResponsiveUtils;
