
import React, { useEffect, useRef, useState } from "react";

interface ScrollingTickerProps {
  messages: string[];
  speed?: number; // pixels per second
}

const ScrollingTicker: React.FC<ScrollingTickerProps> = ({ 
  messages,
  speed = 50 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [combinedMessage, setCombinedMessage] = useState("");
  
  // Combine all messages with a separator
  useEffect(() => {
    if (messages.length === 0) {
      setCombinedMessage("Aucune annonce pour le moment");
    } else {
      setCombinedMessage(messages.join(" • "));
    }
  }, [messages]);

  // Setup scrolling animation
  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollElement = scrollRef.current;
    const scrollWidth = scrollElement.scrollWidth;
    const clientWidth = scrollElement.clientWidth;
    
    // Only animate if content is wider than container
    if (scrollWidth <= clientWidth) return;

    // Calculate animation duration based on content length and speed
    const duration = scrollWidth / speed;
    
    // Apply animation
    scrollElement.style.animationDuration = `${duration}s`;
    scrollElement.classList.add("animate-ticker");

    return () => {
      scrollElement.classList.remove("animate-ticker");
    };
  }, [combinedMessage, speed]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-teal-800 text-white py-3 overflow-hidden">
      <div 
        ref={scrollRef} 
        className="whitespace-nowrap px-4 text-xl font-medium"
        style={{
          paddingRight: "100vw" // Add padding to create space between repeated text
        }}
      >
        {combinedMessage}
      </div>
    </div>
  );
};

export default ScrollingTicker;
