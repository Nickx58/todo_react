/**
 * Formats date in `DD MMMM YYYY, h:mm a` format
 * @param {string|Date} dateString valid date string in ISO format
 */
export function formatDate(dateString) {
  const timestamp = Date.parse(dateString);

  if (!isNaN(timestamp)) {
    const date = new Date(dateString);
    return date.toLocaleString("en-IN", {
      hour12: true,
      month: "long",
      year: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  return "";
}
