import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const baseStyles: React.CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: "0.7s",
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delay}s`,
  };

  const hiddenStyles: Record<string, React.CSSProperties> = {
    up: { opacity: 0, transform: "translateY(40px)" },
    left: { opacity: 0, transform: "translateX(-40px)" },
    right: { opacity: 0, transform: "translateX(40px)" },
    scale: { opacity: 0, transform: "scale(0.92)" },
  };

  const visibleStyle: React.CSSProperties = { opacity: 1, transform: "translateY(0) translateX(0) scale(1)" };

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...baseStyles, ...(isVisible ? visibleStyle : hiddenStyles[direction]) }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
