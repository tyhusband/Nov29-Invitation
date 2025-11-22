import imgBloodSplatter from "figma:asset/47608435f6c9c85ff49416d915065f76199259b0.png";
import { useState, useEffect } from "react";

interface BloodSpatter {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
}

export default function Component() {
  const [bloodSplatters, setBloodSplatters] = useState<BloodSpatter[]>([]);
  const [countdown, setCountdown] = useState<string>("00:00:00");

  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date("2025-11-27T00:00:00").getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        setCountdown("0d 00:00:00");
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      const formattedTime = `${days}d ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      setCountdown(formattedTime);
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleTap = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    const newSpatter: BloodSpatter = {
      id: Date.now(),
      x,
      y,
      rotation: Math.random() * 360,
      scale: 0.6 + Math.random() * 0.8,
      opacity: 0.4,
    };
    
    setBloodSplatters(prev => [...prev, newSpatter]);
    
    // Start fading out after 2 seconds
    setTimeout(() => {
      setBloodSplatters(prev => 
        prev.map(s => s.id === newSpatter.id ? { ...s, opacity: 0 } : s)
      );
    }, 2000);
    
    // Remove the splatter after fade out animation completes
    setTimeout(() => {
      setBloodSplatters(prev => prev.filter(s => s.id !== newSpatter.id));
    }, 5000); // 2s visible + 3s fade out
  };

  return (
    <div 
      className="bg-[#080b21] relative w-full min-h-screen overflow-hidden cursor-pointer select-none"
      onClick={handleTap}
      onTouchStart={handleTap}
      data-name="17"
    >
      {/* Blood splatters that appear on tap */}
      {bloodSplatters.map((spatter) => (
        <div
          key={spatter.id}
          className="absolute pointer-events-none transition-opacity duration-[3000ms]"
          style={{
            left: `${spatter.x}px`,
            top: `${spatter.y}px`,
            transform: `translate(-50%, -50%) rotate(${spatter.rotation}deg) scale(${spatter.scale})`,
            opacity: spatter.opacity,
          }}
        >
          <div className="relative size-[400px]">
            <img 
              alt="" 
              className="absolute inset-0 max-w-none mix-blend-hard-light object-cover pointer-events-none size-full" 
              src={imgBloodSplatter} 
            />
          </div>
        </div>
      ))}

      {/* Mobile-optimized content container */}
      <div className="relative mx-auto max-w-[402px] min-h-screen px-4">
        <p className="absolute font-['Mea_Culpa:Regular',sans-serif] leading-[normal] left-1/2 not-italic text-[#363d76] text-[84px] text-center top-[96px] translate-x-[-50%] w-[353px]">A Night of Murder!!!</p>
        <p className="absolute font-['Ledger:Regular',sans-serif] leading-[normal] left-1/2 not-italic text-[#363d76] text-[12px] text-center text-nowrap top-[78px] translate-x-[-50%] uppercase whitespace-pre">You're cordially invited to</p>
        <p className="absolute font-['Ledger:Regular',sans-serif] leading-[normal] left-1/2 not-italic text-[#363d76] text-[12px] text-center text-nowrap top-[333px] translate-x-[-50%] uppercase whitespace-pre">{`& BIRTHDAY CELEBRATIONs`}</p>
        <p className="absolute font-['Ledger:Regular',sans-serif] leading-[normal] left-[113px] not-italic text-[#363d76] text-[20px] text-center top-[571px] translate-x-[-50%] w-[172px]">NOV 29, 2025</p>
        <p className="absolute font-['Ledger:Regular',sans-serif] leading-[normal] left-[304px] not-italic text-[#363d76] text-[20px] text-center top-[571px] translate-x-[-50%] w-[142px]">6PM - 9PM</p>
        <p className="absolute font-['Ledger:Regular',sans-serif] leading-[normal] left-1/2 not-italic text-[#363d76] text-[56px] text-center text-nowrap top-[434px] translate-x-[-50%] whitespace-pre">{countdown}</p>
        <p className="absolute font-['Kapakana:Regular',sans-serif] font-normal leading-[normal] left-[200px] text-[#363d76] text-[32px] text-center text-nowrap top-[410px] translate-x-[-50%] whitespace-pre">Secret Location Revealed in</p>
        <p className="absolute font-['Kapakana:Regular',sans-serif] font-normal leading-[normal] left-[113.5px] text-[#363d76] text-[32px] text-center text-nowrap top-[532px] translate-x-[-50%] whitespace-pre">Date</p>
        <p className="absolute font-['Kapakana:Regular',sans-serif] font-normal leading-[normal] left-[303px] text-[#363d76] text-[32px] text-center text-nowrap top-[532px] translate-x-[-50%] whitespace-pre">Time</p>
        <div className="absolute font-['Ledger:Regular',sans-serif] leading-[normal] left-[201px] not-italic text-[#363d76] text-[12px] text-center top-[649px] translate-x-[-50%] uppercase w-[342px]">
          <p className="mb-0">Join Haley for a peculiar gathering, SOMEWHERE IN THE TRI-CTY AREA, where secrets simmer beneath the clink of wine glasses and every guest hides a story. Help her solve the murder, or you may both become the next victim.</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Drinks and snacks will be provided (probably not poisonous)</p>
          <p className="mb-0">&nbsp;</p>
          <p>ALL SURVIVORS ARE WELCOME TO JOIN US FOR BAR HOPPING AFTERWARDS.</p>
        </div>
      </div>
    </div>
  );
}
