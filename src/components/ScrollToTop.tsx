import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Temporarily disable smooth scrolling
    const htmlElement = document.documentElement;
    const previousScrollBehavior = htmlElement.style.scrollBehavior;

    // Disable smooth scroll for navigation
    htmlElement.style.scrollBehavior = "auto";

    // Scroll to top
    window.scrollTo(0, 0);

    // Restore smooth scroll
    setTimeout(() => {
      htmlElement.style.scrollBehavior = previousScrollBehavior || "smooth";
    }, 0); 
  }, [pathname]);

  return null;
};

export default ScrollToTop;
