export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${wordCount} words (~${readingTimeMinutes} min read)`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  let startMonth;
  let startYear;

  if (startDate.getDate() === 1 && startDate.getMonth() === 0) {
    startMonth = "";
    startYear = startDate.getFullYear();
  } else {
    startMonth = startDate.toLocaleString("default", { month: "short" });
    startYear = startDate.getFullYear().toString();
  }

  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      endYear = endDate;
    } else {
      if (endDate.getDate() === 1 && endDate.getMonth() === 0) {
        endMonth = "";
        endYear = endDate.getFullYear();
      } else {
        endMonth = endDate.toLocaleString("default", { month: "short" });
        endYear = endDate.getFullYear().toString();
      }
    }
  }

  if (startMonth === "") {
    return `${startYear} - ${endMonth} ${endYear}`;
  } else {
    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  }
}
