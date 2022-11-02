import { useEffect, useState } from "react";

export default function useISHeightSmall() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowHeight(window.innerHeight);

      // document.querySelector('.App')
      if (windowHeight >= document.querySelector(".App").offsetHeight) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    }

    // Add event listener
    handleResize();
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowHeight]); // Empty array ensures that effect is only run on mount

  return isSmall;
}
