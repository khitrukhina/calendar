export const DAYS_IN_WEEK = 7;

export function createDayOfWeekNames() {
  const zeroDay = new Date();
  const firstDayOfWeekDate = zeroDay.getDate() - zeroDay.getDay();
  zeroDay.setDate(firstDayOfWeekDate);

  const daysOfWeek = [];
  for (let i = 0; i < DAYS_IN_WEEK; i = i + 1) {
    const dayText = zeroDay.toLocaleDateString('default', { weekday: 'short' });
    daysOfWeek.push({ label: dayText });
    zeroDay.setDate(zeroDay.getDate() + 1);
  }

  return daysOfWeek;
}
