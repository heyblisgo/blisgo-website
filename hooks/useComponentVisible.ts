import { useEffect, useRef, useState } from "react";

const useComponentVisible = (isvisible: any) => {
  const [isComponentVisible, setIsComponentVisible] = useState(isvisible);
  const ref = useRef<any>();
  const handler = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
};

export default useComponentVisible;
