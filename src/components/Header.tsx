
import React from "react";
import { Clock } from "@/components/Clock";

interface HeaderProps {
  greeting?: string;
}

const Header: React.FC<HeaderProps> = ({ greeting = "Bienvenue !" }) => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-start mb-6">
        <div className="text-left">
          <h1 className="text-5xl font-bold text-teal-800 mb-2">Accueil</h1>
          <div className="text-3xl font-semibold text-teal-700">{greeting}</div>
        </div>
        <Clock />
      </div>
    </div>
  );
};

export default Header;
