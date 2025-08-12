import { useEffect, useState, useRef, RefObject } from "react";

interface ObserverOptions {
  threshold?: number;
}

export const useInView = (
  options: ObserverOptions = { threshold: 0.1 }
): [RefObject<HTMLDivElement>, boolean] => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set state to true if intersecting, false if not.
        setIsInView(entry.isIntersecting);
      },
      { threshold: options.threshold }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold]);

  return [containerRef, isInView];
};
