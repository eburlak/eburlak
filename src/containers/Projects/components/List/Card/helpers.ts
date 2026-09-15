const numberFormat = new Intl.NumberFormat('en-US');
const dateFormat = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export function getFormattedDownloads(weeklyDownloads: number) {
  return numberFormat.format(weeklyDownloads);
}

export function getFormattedDate(updatedAt: string) {
  return dateFormat.format(new Date(updatedAt));
}
