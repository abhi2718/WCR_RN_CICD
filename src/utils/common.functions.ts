import moment from 'moment';
import { CheckBoxDataType } from '../types/components/checkbox.type';
import { preferNotToSay } from './constanst';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../navigation';

export const calculateDateLessThan18YearsAgo = (inputDate: Date): Date => {
  const eighteenYearsAgo = new Date(inputDate);
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
  return eighteenYearsAgo;
};
export function isDate18YearsOrAbove(date: string): boolean {
  const [month, day, year] = date.split('-').map(Number);
  const dateObj = new Date(year, month - 1, day);
  const currentDate = moment();
  const inputDate = moment(dateObj);
  const ageInYears = currentDate.diff(inputDate, 'years');
  return ageInYears >= 18;
}

export const goBack = (navigation: any) => {
  navigation.goBack();
};
export const unixToDate = (unix: string) => {
  const date = `${moment(unix).format('l')} ${moment(unix).format('LT')}  `;
  return date;
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
export function calculateAge(dob: string) {
  const age = Math.floor(
    (Number(new Date()) - Number(new Date(dob))) / 1000 / 60 / 60 / 24 / 365.25,
  );
  return age;
}
export function formatNumber(inputNumber: number) {
  const numberString = inputNumber.toString();
  const [wholePart, decimalPart] = numberString.split('.');
  if (!decimalPart) {
    return wholePart;
  }
  return `${wholePart}'${decimalPart}`;
}

export const useNavigateToScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen = (user: any) => {
    if (user.verification.status === 'Verified') {
      navigation.navigate(ROUTES.Tab);
    } else {
      if (user.verificationId.submitted) {
        navigation.navigate(ROUTES.VerificationPending);
      } else {
        switch (user.steps) {
          case 1:
            user.steps = 1;
            navigation.navigate(ROUTES.GenderPronoun);
            break;
          case 2:
            user.steps = 2;
            navigation.navigate(ROUTES.SexualOrientation);
            break;
          case 3:
            user.steps = 3;
            navigation.navigate(ROUTES.Location);
            break;
          case 4:
            user.steps = 4;
            navigation.navigate(ROUTES.Profession);
            break;
          case 5:
            user.steps = 5;
            navigation.navigate(ROUTES.ProfilePic);

            break;
          case 6:
            user.steps = 6;
            navigation.navigate(ROUTES.Height);

            break;
          case 7:
            user.steps = 7;
            navigation.navigate(ROUTES.AddEthnicity);
            break;
          case 8:
            user.steps = 8;
            navigation.navigate(ROUTES.LookingFor);
            break;
          case 9:
            user.steps = 9;
            navigation.navigate(ROUTES.MaritalStatus);
            break;
          case 10:
            user.steps = 10;
            navigation.navigate(ROUTES.Kids);
            break;
          case 11:
            user.steps = 11;
            navigation.navigate(ROUTES.Habits);
            break;
          case 12:
            user.steps = 12;
            navigation.navigate(ROUTES.About);
            break;
          case 13:
            user.steps = 13;
            navigation.navigate(ROUTES.Hobbies);

          case 14:
            user.steps = 14;
            navigation.navigate(ROUTES.VerificationStepOne);
            break;
          default:
            navigation.navigate(ROUTES.Gender);
        }
      }
    }
  };
  return { navigateToScreen };
};

export const createNotifications = (
  type: string,
  userId: string,
  name: string,
) => {
  switch (type) {
    case 'like':
      return {
        document: {
          userId: userId,
          message: `You have received a like from ${name}!`,
          type: 'Like',
        },
      };
    case 'match':
      return {
        document: {
          userId: userId,
          message: `You got a match with ${name}, start chatting now!`,
          type: 'Match',
        },
      };
  }
};
