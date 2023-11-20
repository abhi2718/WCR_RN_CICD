import moment from 'moment';
import { CheckBoxDataType } from '../types/components/checkbox.type';
import { preferNotToSay } from './constanst';

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

export const goBack = (navigation: any) => {
  navigation.goBack();
};

export const makeFalseDefaultValue = (
  ethnicityConstantData: string[],
): CheckBoxDataType[] => {
  const defaultData: CheckBoxDataType[] = ethnicityConstantData.map(
    (item, index) => {
      if (item == preferNotToSay) {
        return { id: index, text: item, isChecked: true };
      }
      return { id: index, text: item, isChecked: false };
    },
  );

  return defaultData;
};

export const transformArray = (
  userEthnicity: string[],
  ethnicityConstantData: string[],
): CheckBoxDataType[] => {
  const defaultData: CheckBoxDataType[] = ethnicityConstantData.map(
    (item, index) => {
      return { id: index, text: item, isChecked: false };
    },
  );
  if (!userEthnicity || userEthnicity?.length == 0) {
    return defaultData;
  }

  userEthnicity.forEach((item) => {
    const index: number = defaultData.findIndex(
      (element) => element.text === item,
    );
    if (index != -1) {
      defaultData[index].isChecked = true;
    }
  });
  return defaultData;
};
