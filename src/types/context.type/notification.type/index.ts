export type NotificationCountContextType = {
    _setCount: (countNumber: number) => void;
    count: number;
  };
  export type NotificationCountContextProviderProps={
    children?: React.ReactNode;
  }