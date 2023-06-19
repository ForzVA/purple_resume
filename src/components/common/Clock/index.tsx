import React, { useEffect, useState } from "react";
import addZeroForNumber from "../../../helpers/addZeroForNumber";

type ClockType = {
  className?: string;
};

const Clock: React.FC<ClockType> = ({ className }) => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <span className={className}>
      {addZeroForNumber(date.getHours())}:{addZeroForNumber(date.getMinutes())}
    </span>
  );
};

export default Clock;
