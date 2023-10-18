import moment from 'moment';

export const calculateDateLessThan18YearsAgo = (inputDate: Date): Date => {
  const eighteenYearsAgo = new Date(inputDate);
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
  return eighteenYearsAgo;
};
export function isDate18YearsOrAbove(date: string): boolean {
  const [month, day, year] = date.split('/').map(Number);
  const dateObj = new Date(year, month - 1, day);
  const currentDate = moment();
  const inputDate = moment(dateObj);
  const ageInYears = currentDate.diff(inputDate, 'years');
  return ageInYears >= 18;
}
