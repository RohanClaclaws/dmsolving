
"use client";

import { useEffect, useState } from "react";

const useWindowWidth = (): any => {
//   const [width, setWidth] =  useState(()=> typeof window !== 'undefined' && 0);
// const [width, setWidth] = useState(() => { return typeof window !== 'undefined' && (window.innerWidth)});
const [width, setWidth] = useState(typeof window !== 'undefined' && (window.innerWidth));


  useEffect(() => {
    const isBrowser = () => typeof window !== 'undefined'; 
    if (isBrowser()) {

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    }

  }, []);

  return width;
};

export default useWindowWidth;