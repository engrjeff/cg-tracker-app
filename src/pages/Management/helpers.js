export function getDateTime(createdAt) {
  const d = new Date(createdAt);
  return d.toDateString() + " " + d.toLocaleTimeString();
}
