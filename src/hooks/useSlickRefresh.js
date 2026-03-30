import { useEffect } from "react";

function useSlickRefresh(sliderRef, dependency) {
  useEffect(() => {
    if (!sliderRef.current) return;

    const timeout = setTimeout(() => {
      sliderRef.current?.slickGoTo?.(0);
      sliderRef.current?.innerSlider?.onWindowResized?.();
    }, 100);

    return () => clearTimeout(timeout);
  }, [sliderRef, dependency]);
}

export default useSlickRefresh;