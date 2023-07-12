import { useEffect, useState } from 'react';
import { TimeSince } from 'types';

const TIMES = [
  new Date('Tue May 30 2023 00:00:00 GMT-0400 (Eastern Daylight Time)'),
  new Date('Wed Jul 12 2023 17:37:00 GMT-0400 (Eastern Daylight Time)'),
];

const getPercentageOfAMonth = (date: Date) => {
  const currentDate = new Date();
  const ms = currentDate.getTime() - date.getTime();
  const month = 1000 * 60 * 60 * 24 * 30;
  const percentage = (ms / month) * 100;
  return Math.round(percentage * 100) / 100;
};

export const useHomeLogic = () => {
  const [timeSince, setTimeSince] = useState<TimeSince[]>();

  // Find time since TIME and update every second
  const getTimeSince = (time: Date) => {
    const now = new Date();
    const diff = now.getTime() - time.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSince(TIMES.map((time) => getTimeSince(time)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return {
    percentOfAMonth: getPercentageOfAMonth(TIMES[1]),
    timeSince,
  };
};

export type HomeComponentProps = ReturnType<typeof useHomeLogic>;
