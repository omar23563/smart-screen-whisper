
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

  return (
    <div className="my-2 text-gray-600">
      <time className="text-xl" dateTime={date.toISOString()}>
        {formattedDate}
      </time>
    </div>
  );
};
