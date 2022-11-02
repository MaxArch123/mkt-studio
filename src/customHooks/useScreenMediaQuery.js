import { useEffect, useState } from "react";

export default function useScreenMediaQuery() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("orientationchange", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("orientationchange", handleWindowResize);
    };
  }, [setWidth]);

  return {
    // isLessThan360: width < 360 && width !== 0,
    // isLessThan567: width < 567 && width !== 0,
    isLessThan768: width <= 768 && width !== 0,
    // isLessThan991: width < 991 && width !== 0,
    // isLessThan1024: width < 1024 && width !== 0,
    // isLessThan1200: width < 1200 && width !== 0,
    // isLessThan1280: width < 1280 && width !== 0,
    // isMoreThan568: width > 568,
    // isMoreThan768: width > 768,
    // isMoreThan1024: width > 1024,
    isMoreThan1200: width >= 1200,
    isLessThan1200MoreThan768: width < 1200 && width > 768,
  };
}
