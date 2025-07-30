import FloatingHearts from "@/components/FloatingHearts";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <FloatingHearts />
      
      {/* Main Content */}
      <div className="text-center z-10 animate-fade-in-up">
        {/* Main Love Text */}
        <h1 className="text-9xl md:text-[12rem] lg:text-[15rem] font-bold love-text mb-8 select-none">
          love
        </h1>
        
        {/* Decorative Hearts */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <Heart 
            className="text-love-primary love-glow animate-pulse" 
            size={32} 
            fill="currentColor" 
          />
          <div className="w-2 h-2 bg-love-accent rounded-full"></div>
          <Heart 
            className="text-love-secondary love-glow animate-pulse" 
            size={24} 
            fill="currentColor"
            style={{ animationDelay: '1s' }}
          />
          <div className="w-2 h-2 bg-love-accent rounded-full"></div>
          <Heart 
            className="text-love-primary love-glow animate-pulse" 
            size={32} 
            fill="currentColor" 
            style={{ animationDelay: '0.5s' }}
          />
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/80 font-light tracking-wide">
          is all you need
        </p>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-16 bg-gradient-to-b from-love-primary to-transparent rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

export default Index;
