export type SimpleItem = {
  name: string;
  description: string;
};

//Item is From API
export type Item = {
  id: number;
  name: string;
  description: string;
};

export type State = {
  status: string;
  items: Array<Item>;
  popupState: boolean;
};
