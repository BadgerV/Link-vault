export interface InputPropTypes {
  label: string;
  name: string;
  value: string | number | undefined;
  placeholder: string;
  onChange: () => any;
  leftIcon: React.ReactElement;
  rightIcon: React.ReactElement;
  disabled: boolean;
  isPassword: boolean;
  error: string;
  type: string;
}

export interface ButtonPropType {
  title: string | React.ReactElement;
  color?: string;
  onClick?: () => void;
  border?: string;
  background?: string;
  className?: string;
}

export type TransactionType = {
  id: number;
  title: string;
  date: string;
  reason: string;
  price: string;
  status: string;
};

export interface WalletStatusType {
  address: string | undefined;
}
