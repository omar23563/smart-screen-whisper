
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Format: vendredi, 2 mai 2025
  const formattedDate = format(date, "EEEE, d MMMM yyyy", { locale: fr });
  // Format: 14:30:45
  const formattedTime = format(date, "HH:mm:ss");

  return (
    <div className="text-right">
      <div className="inline-block px-6 py-3 bg-gradient-to-r from-teal-700/90 to-teal-600/90 rounded-lg shadow-lg">
        <time 
          className="text-4xl font-bold tracking-wider text-white" 
          dateTime={date.toISOString()}
        >
          {formattedTime}
        </time>
      </div>
      <div className="mt-2">
        <time 
          className="text-xl font-medium text-teal-700 capitalize" 
          dateTime={date.toISOString()}
        >
          {formattedDate}
        </time>
      </div>
    </div>
  );
};
