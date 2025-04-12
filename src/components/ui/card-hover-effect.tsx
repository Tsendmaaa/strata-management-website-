// src/components/ui/card-hover-effect.tsx
import React from "react";

const CardHoverEffect = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-all">
      <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-30 transition-all"></div>
      <div className="relative">{children}</div>
    </div>
  );
};

export default CardHoverEffect;
