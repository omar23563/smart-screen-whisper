
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Clock as ClockIcon } from "lucide-react";

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
    <div className="my-4 text-gray-600">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-3xl font-bold text-teal-700">
          <ClockIcon className="h-8 w-8" />
          <time className="font-digital" dateTime={date.toISOString()}>
            {formattedTime}
          </time>
        </div>
        <time className="text-xl" dateTime={date.toISOString()}>
          {formattedDate}
        </time>
      </div>
    </div>
  );
};
