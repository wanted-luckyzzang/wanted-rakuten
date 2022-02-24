import React from "react";
import { useEffect, useState } from "react";
import { milliToTimeForm } from "utils/formatData";

interface TimeParams {
  expiration: number;
  baseDate: number;
}
const TimeCell = (props: TimeParams) => {
  const [nowDate, setNowDate] = useState<string>();
  useEffect(() => {
    const timer = setInterval(() => {
      const restExpiration =
        props.expiration * 1000 - (new Date().getTime() - props.baseDate);
      const timeForm = milliToTimeForm(restExpiration);
      if (nowDate !== timeForm)
        setNowDate(milliToTimeForm(restExpiration)), 1000;
    });
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <span>{nowDate}</span>
    </>
  );
};

export default TimeCell;
