import { useEffect, useState } from "react";

const ScrollProgressBar: React.FC = () => {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-accent z-50 transition-all duration-75"
      style={{ width: `${scroll}%` }}
    />
  );
};

export default ScrollProgressBar;
