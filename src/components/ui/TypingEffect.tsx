import React, { useState, useEffect, useRef } from 'react';

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  eraseSpeed?: number;
  eraseDelay?: number;
  startDelay?: number;
  cursor?: boolean;
  className?: string;
  onComplete?: () => void;
  repeat?: boolean;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 80,
  eraseSpeed = 50,
  eraseDelay = 2000,
  startDelay = 200,
  cursor = true,
  className = '',
  onComplete,
  repeat = true
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  
  const timeoutRef = useRef<number | null>(null);

  const clearTimeoutRef = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    if (texts.length === 0) return;
    
    // Start typing after the start delay
    timeoutRef.current = window.setTimeout(() => {
      typeText();
    }, startDelay);
    
    return () => clearTimeoutRef();
  }, []);

  useEffect(() => {
    if (isComplete && onComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  const typeText = () => {
    clearTimeoutRef();
    
    if (currentIndex >= texts.length) {
      if (repeat) {
        setCurrentIndex(0);
        setDisplayText('');
        setIsTyping(true);
        timeoutRef.current = window.setTimeout(typeText, startDelay);
      } else {
        setIsComplete(true);
      }
      return;
    }
    
    const currentText = texts[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        timeoutRef.current = window.setTimeout(typeText, typingSpeed);
      } else {
        setIsTyping(false);
        timeoutRef.current = window.setTimeout(typeText, eraseDelay);
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(displayText.substring(0, displayText.length - 1));
        timeoutRef.current = window.setTimeout(typeText, eraseSpeed);
      } else {
        setIsTyping(true);
        setCurrentIndex(currentIndex + 1);
        timeoutRef.current = window.setTimeout(typeText, typingSpeed);
      }
    }
  };

  return (
    <div className={`${className} flex items-center`}>
      <span className="whitespace-pre-wrap">{displayText}</span>
      {cursor && <span className="w-2 h-5 ml-0.5 bg-[#2F81F7] opacity-75 inline-block animate-pulse"></span>}
    </div>
  );
};

export default TypingEffect;