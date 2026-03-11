'use client';

import { useEffect, useRef } from 'react';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  stackOffset = 40
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.scroll-stack-card'));
    
    // Set initial styles
    cards.forEach((card, index) => {
      card.style.position = 'sticky';
      card.style.top = `${stackOffset * index}px`;
      card.style.zIndex = `${cards.length - index}`;
      card.style.marginBottom = '2rem';
    });

    const handleScroll = () => {
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const nextCard = cards[index + 1];
        
        if (nextCard) {
          const nextRect = nextCard.getBoundingClientRect();
          const overlap = rect.bottom - nextRect.top;
          
          if (overlap > 0) {
            const scale = Math.max(0.95, 1 - (overlap / 500) * 0.05);
            card.style.transform = `scale(${scale})`;
            card.style.transformOrigin = 'top center';
          } else {
            card.style.transform = 'scale(1)';
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stackOffset]);

  return (
    <div ref={containerRef} className={`relative ${className}`.trim()}>
      {children}
    </div>
  );
};

export default ScrollStack;
