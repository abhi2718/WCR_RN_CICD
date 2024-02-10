export type MultipleCheckBoxListProps = {
  data: MultipleCheckBoxListDataType[];
  handleListChange: (data: MultipleCheckBoxListDataType[]) => void
};

export type MultipleCheckBoxListDataType = {
  id: number;
  text: string;
  isChecked: boolean;
};

export type CheckBoxProps = {
  isChecked: boolean;
  label: string;
  id: number;
  handleChange: (id: number) => void;
};
