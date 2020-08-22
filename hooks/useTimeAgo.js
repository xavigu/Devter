const DATE_UNITS = [
  ["day", 86400],
  ["hour", 2600],
  ["minute", 60],
  ["hour", 1],
];

const getDatesDiff = (timestamp) => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;

  // desestructuration of the array of arrays
  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) >= secondsInUnit || unit === "second") {
      const value = Math.floor(elapsed / secondsInUnit);
      return { value, unit };
    }
  }
};

export default function useTimeAgo(timestamp) {
  const { value, unit } = getDatesDiff(timestamp);
  // relative time format with the API
  const rtf = new Intl.RelativeTimeFormat(navigator.language, {
    style: "short",
  });
  console.log(value, unit);
  return rtf.format(value, unit);
}
