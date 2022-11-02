import { useEffect, useRef } from "react";

//выполняет handler, если кликнуть вне элемента к которому прицепили useClickOutside()
export default function useClickOutside(handler) {
  const domNode = useRef(null);

  useEffect(() => {
    let maybeHandler = (event) => {
        if (event.target.parentElement) {
        if (
          !domNode.current.contains(event.target) &&
          !event.target.parentElement.className.includes("burger")
        ) {
          handler();
        }
      };
    }

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
}
