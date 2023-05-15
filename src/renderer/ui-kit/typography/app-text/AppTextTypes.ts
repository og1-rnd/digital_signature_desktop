export type TAppText = {
  type?: 'secondary' | 'success' | 'warning' | 'danger';
  mark?: boolean;
  code?: boolean;
  italic?: boolean;
  disabled?: boolean;
  keyboard?: boolean;
  underline?: boolean;
  delete?: boolean;
  isAdaptive?: boolean;
  copyable?: boolean;
  ellipsis?: boolean;
  textStyle?: 'blue-mark' | 'default';
  fontStyle?:
    | 'fontbutton'
    | 'footnotes'
    | 'descriptor'
    | 'fontBody'
    | 'main'
    | 'H5'
    | 'H4'
    | 'H3'
    | 'H2'
    | 'H1'
    | 'Title';
  isBold?: boolean;
  isSecondary?: boolean;
  text: string | number;
  color?: string;
};
