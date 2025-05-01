
import React from "react";
import { Clock } from "@/components/Clock";

interface HeaderProps {
  greeting?: string;
}

const Header: React.FC<HeaderProps> = ({ greeting = "Bienvenue !" }) => {
  return (
    <div className="text-center mb-10">
      <Clock />
      <h1 className="text-4xl font-bold text-teal-800 mb-2">Accueil</h1>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold text-teal-700">{greeting}</div>
      </div>
    </div>
  );
};

export default Header;
