export type CheckBoxProps = {
  data: CheckBoxDataType[];
  onChangeValue: any;
  onChangeListValue: any;
};

export type CheckBoxDataType = {
  id: number;
  text: string;
  isChecked: boolean;
};
