export type ProfileModalSheetProps = {
    visible: boolean;
    name: string;
    image: {uri:string};
    senderId: string;
    toggleVisiblity: () => void;
  };