export type CheckBoxProps = {
  data: CheckBoxDataType[];
  preferNotTosayflag: any;
  onChangeValue: any;
  onChangeListValue: any;
};

export type CheckBoxDataType = {
  id: number;
  text: string;
  isChecked: boolean;
};
