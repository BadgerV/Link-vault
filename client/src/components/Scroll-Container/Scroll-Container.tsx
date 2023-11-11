import { useEffect, useState } from "react";
import { ScrollProgress, ScrollSection, ScrollContainerP } from "./Scroll-Container.styles";

const ScrollContainer = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrollPosition / totalHeight) * 100;
    setScrollPercentage(percentage);
  };

  console.log(scrollPercentage);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPercentage]);
  return (
    <ScrollContainerP>
      <ScrollSection visible={scrollPercentage >= 0 && scrollPercentage <= 25}>
        Section 1
      </ScrollSection>
      <ScrollSection visible={scrollPercentage > 25 && scrollPercentage <= 50}>
        Section 2
      </ScrollSection>
      <ScrollSection visible={scrollPercentage > 50 && scrollPercentage <= 75}>
        Section 3
      </ScrollSection>
      <ScrollProgress />
    </ScrollContainerP>
  );
};

export default ScrollContainer;
