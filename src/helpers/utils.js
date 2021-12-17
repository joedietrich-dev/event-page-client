const formatDateToTime = (date) => {
  const d = new Date(date);
  return `${d.toLocaleTimeString("en-us")}`;
};

export { formatDateToTime };
