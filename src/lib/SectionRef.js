import { useRef } from "react";
const useSmoothScroll = (ref) => {
  const scrollToRef = () => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return { scrollToRef };
};
export default useSmoothScroll;