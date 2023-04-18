import { useEffect, useState } from 'react';

const TIME = new Date(
  'Tue Apr 18 2023 14:00:00 GMT-0400 (Eastern Daylight Time)',
);

export const useHomeLogic = () => {
  const [timeSince, setTimeSince] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Find time since TIME and update every second
  const getTimeSince = () => {
    const now = new Date();
    const diff = now.getTime() - TIME.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSince(getTimeSince());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return {
    timeSince,
  };
};

export type HomeComponentProps = ReturnType<typeof useHomeLogic>;
