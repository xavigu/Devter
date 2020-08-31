import { useEffect, useState } from "react";

const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getDatesDiff = (timestamp) => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;

  // desestructuration of the array of arrays
  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) >= secondsInUnit || unit === "second") {
      const value = Math.round(elapsed / secondsInUnit);
      return { value, unit };
    }
  }
};

export default function useTimeAgo(timestamp) {
  // Init timeago value
  const [timeago, setTimeago] = useState(() => getDatesDiff(timestamp));
  // Refresh timeago data each hour
  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDatesDiff(timestamp);
      setTimeago(newTimeAgo);
      console.log(timeago);
    }, 3600000);
    return () => clearInterval(interval);
  }, [timestamp]);

  const rtf = new Intl.RelativeTimeFormat("es-ES", {
    style: "short",
  });

  const { value, unit } = timeago;
  return rtf.format(value, unit);
}
