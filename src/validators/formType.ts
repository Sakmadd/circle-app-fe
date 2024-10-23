export type ForgotDataType = {
  email: string;
};

export type LoginDataType = {
  username: string;
  password: string;
};

export type RegisterDataType = {
  username: string;
  name: string;
  email: string;
  password: string;
};

export type ResetDataType = {
  newPassword: string;
  confirmedPassword: string;
  general?: string;
};
