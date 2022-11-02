import { useEffect, useState } from "react";

export default function useDocumentScrollY() {
  const [scrolledY, setScrolledY] = useState(window.scrollY);

  useEffect(() => {
    setScrolledY(window.scrollY);
    const handleWindowScroll = () => setScrolledY(window.scrollY);
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [scrolledY]);
  
  return scrolledY;
}