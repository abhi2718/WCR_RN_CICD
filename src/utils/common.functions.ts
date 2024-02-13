import moment from 'moment';
import { MultipleCheckBoxListDataType } from '../types/components/checkbox.type';
import { preferNotToSay } from './constanst';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ROUTES } from '../navigation';
import { User } from '../types/screen.type/profile.type';
import { Measurement } from '../types/commonFunction.type';

export const calculateDateLessThan18YearsAgo = (inputDate: Date): Date => {
  const eighteenYearsAgo = new Date(inputDate);
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
  return eighteenYearsAgo;
};
export function isDate18YearsOrAbove(date: string): boolean {
  const [year, month, day] = date.split('-').map(Number);
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
): MultipleCheckBoxListDataType[] => {
  const defaultData: MultipleCheckBoxListDataType[] = ethnicityConstantData.map(
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
): MultipleCheckBoxListDataType[] => {
  const defaultData: MultipleCheckBoxListDataType[] = ethnicityConstantData.map(
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
  const resetState = (route: string) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: route }],
      }),
    );
  };
  const navigateToScreen = (user: User) => {
    if (user.verification.status === 'Verified') {
      resetState(ROUTES.Tab);
    } else {
      if (user.verificationId.submitted) {
        resetState(ROUTES.VerificationPending);
      } else {
        switch (user.steps) {
          case 1:
            user.steps = 1;
            resetState(ROUTES.GenderPronoun);
            break;
          case 2:
            user.steps = 2;
            resetState(ROUTES.SexualOrientation);
            break;
          case 3:
            user.steps = 3;
            resetState(ROUTES.Location);
            break;
          case 4:
            user.steps = 4;
            resetState(ROUTES.Profession);
            break;
          case 5:
            user.steps = 5;
            resetState(ROUTES.ProfilePic);
            break;
          case 6:
            user.steps = 6;
            resetState(ROUTES.Height);
            break;
          case 7:
            user.steps = 7;
            resetState(ROUTES.AddEthnicity);
            break;
          case 8:
            user.steps = 8;
            resetState(ROUTES.LookingFor);
            break;
          case 9:
            user.steps = 9;
            resetState(ROUTES.MaritalStatus);
            break;
          case 10:
            user.steps = 10;
            resetState(ROUTES.Kids);
            break;
          case 11:
            user.steps = 11;
            resetState(ROUTES.Habits);
            break;
          case 12:
            user.steps = 12;
            resetState(ROUTES.About);
            break;
          case 13:
            user.steps = 13;
            resetState(ROUTES.Hobbies);
          case 14:
            user.steps = 14;
            resetState(ROUTES.VerificationStepOne);
            break;
          default:
            resetState(ROUTES.Gender);
        }
      }
    }
  };
  return { navigateToScreen, resetState };
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

export function separateWords(inputString: string) {
  const hyphenIndex: number = inputString.indexOf('(');

  if (hyphenIndex !== -1) {
    let afterHyphen = inputString.slice(hyphenIndex).trim();

    return afterHyphen;
  } else {
    return inputString.trim();
  }
}

const provinces = [
  { name: 'Alberta', initials: 'AB' },
  { name: 'British Columbia', initials: 'BC' },
  { name: 'Manitoba', initials: 'MB' },
  { name: 'New Brunswick', initials: 'NB' },
  { name: 'Newfoundland and Labrador', initials: 'NL' },
  { name: 'Northwest Territories', initials: 'NT' },
  { name: 'Nova Scotia', initials: 'NS' },
  { name: 'Nunavut', initials: 'NU' },
  { name: 'Ontario', initials: 'ON' },
  { name: 'Prince Edward Island', initials: 'PE' },
  { name: 'Quebec', initials: 'QB' },
  { name: 'Saskatchewan', initials: 'SK' },
  { name: 'Yukon', initials: 'YT' },
];

const convertedArray = [
  { name: 'PhD Audiology', initials: '(AuD)' },
  { name: 'PhD Biochemistry', initials: '(PhD Biochem)' },
  { name: 'PhD Biochemical Engineering', initials: '(PhD BMEN)' },
  { name: 'PhD Biology', initials: '(PhD Biol)' },
  { name: 'PhD Biomedical Engineering', initials: '(PhD BME)' },
  { name: 'PhD Biomedical Science', initials: '(PhD BMS)' },
  { name: 'PhD Bioscience', initials: '(PhD Biosci)' },
  { name: 'PhD Chemical Engineering', initials: '(PhD ChemE)' },
  { name: 'PhD Chemistry', initials: '(PhD Chem)' },
  { name: 'PhD Genetics', initials: '(PhD Genet)' },
  { name: 'PhD Healthcare Administration', initials: '(PhD HA)' },
  { name: 'PhD Immunology', initials: '(PhD Immunol)' },
  { name: 'PhD Kinesiology', initials: '(PhD Kinesiol)' },
  { name: 'PhD Microbiology', initials: '(PhD Microbiol)' },
  { name: 'PhD Molecular Biology', initials: '(PhD Mol Biol)' },
  { name: 'PhD Neuroscience', initials: '(PhD Neurosci)' },
  { name: 'PhD Nursing Education', initials: '(PhD Nurs Ed)' },
  { name: 'PhD Nutrition', initials: '(PhD Nutr)' },
  { name: 'PhD Occupational and Environmental Health', initials: '(PhD OEH)' },
  { name: 'PhD Pharmacology', initials: '(PhD Pharmacol)' },
  { name: 'PhD Physiology', initials: '(PhD Physiol)' },
  { name: 'PhD Physics', initials: '(PhD Phys)' },
  { name: 'PhD Psychology', initials: '(PhD Psych)' },
  { name: 'PhD Public Health', initials: '(DrPH)' },
  { name: 'PhD degree with Health Focus', initials: '(PhD Health Focus)' },
];

const convertedArr = [
  { name: 'PhD Audiology', initials: '(AuD Student)' },
  { name: 'PhD Biochemistry', initials: '(PhD Biochem Student)' },
  { name: 'PhD Biochemical Engineering', initials: '(PhD BMEN Student)' },
  { name: 'PhD Biology', initials: '(PhD Biol Student)' },
  { name: 'PhD Biomedical Engineering', initials: '(PhD BME Student)' },
  { name: 'PhD Biomedical Science', initials: '(PhD BMS Student)' },
  { name: 'PhD Bioscience', initials: '(PhD Biosci Student)' },
  { name: 'PhD Chemical Engineering', initials: '(PhD ChemE Student)' },
  { name: 'PhD Chemistry', initials: '(PhD Chem Student)' },
  { name: 'PhD Genetics', initials: '(PhD Genet Student)' },
  { name: 'PhD Healthcare Administration', initials: '(PhD HA Student)' },
  { name: 'PhD Immunology', initials: '(PhD Immunol Student)' },
  { name: 'PhD Kinesiology', initials: '(PhD Kinesiol Student)' },
  { name: 'PhD Microbiology', initials: '(PhD Microbiol Student)' },
  { name: 'PhD Molecular Biology', initials: '(PhD Mol Biol Student)' },
  { name: 'PhD Neuroscience', initials: '(PhD Neurosci Student)' },
  { name: 'PhD Nursing Education', initials: '(PhD Nurs Ed Student)' },
  { name: 'PhD Nutrition', initials: '(PhD Nutr Student)' },
  {
    name: 'PhD Occupational and Environmental Health',
    initials: '(PhD OEH Student)',
  },
  { name: 'PhD Pharmacology', initials: '(PhD Pharmacol Student)' },
  { name: 'PhD Physiology', initials: '(PhD Physiol Student)' },
  { name: 'PhD Physics', initials: '(PhD Phys Student)' },
  { name: 'PhD Psychology', initials: '(PhD Psych Student)' },
  { name: 'PhD Public Health', initials: '(DrPH Student)' },
  {
    name: 'PhD degree with Health Focus',
    initials: '(PhD Health Focus Student)',
  },
];

export function addInitials(userDegree: string, primaryDegree: string) {
  if (userDegree === 'PhD in Health-Related Field') {
    for (let i = 0; i < convertedArray.length; i++) {
      if (primaryDegree.includes(convertedArray[i].name)) {
        return convertedArray[i].initials;
      }
    }
  } else if (userDegree === 'Doctoral Student in Health-Related Field') {
    for (let i = 0; i < convertedArr.length; i++) {
      if (primaryDegree.includes(convertedArr[i].name)) {
        return convertedArr[i].initials;
      }
    }
  } else if (userDegree === 'Canada') {
    for (let i = 0; i < convertedArr.length; i++) {
      if (primaryDegree.includes(provinces[i].name)) {
        return provinces[i].initials;
      }
    }
  } else {
    return separateWords(primaryDegree);
  }
}
export function parseMeasurement(
  measurementString: string,
): Measurement | null {
  const regex = /^(\d+)\'(\d+)\"$/;
  const match = measurementString.match(regex);
  if (match) {
    const feet = parseInt(match[1], 10);
    const inch = Math.floor(parseInt(match[2], 10));
    return { feet, inch };
  } else {
    return null;
  }
}

export function convertCmToFeetAndInches(cm: number): Measurement {
  const inches = cm / 2.54;
  const feet = Math.floor(inches / 12);
  const remainingInches = Math.floor(inches % 12);

  return {
    feet: feet,
    inch: remainingInches,
  };
}

export function formatNumberWithSingleQuote(num: number): string {
  if (Number.isInteger(num)) {
    // If the number is an integer, return it as is
    return num.toString();
  } else {
    // If the number has a decimal point, format it with a single quote
    const parts = num.toString().split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1];

    return `${integerPart}'${decimalPart}"`;
  }
}

export function feetAndInchesToCm(feet: number, inches: number): string {
  // 1 foot = 30.48 cm
  // 1 inch = 2.54 cm

  const feetInCm = feet * 30.48;
  const inchesInCm = inches * 2.54;

  // Total length in centimeters
  const totalCm = feetInCm + inchesInCm;
  return Math.floor(totalCm).toString();
}

export const validateEmail = (email: string) => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const showDisplayOrFirstName = (displayName:string,name: string) => {
   return displayName?.length?displayName:name
}