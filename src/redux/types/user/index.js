// @flow
export type User = {
  name: string,
  mail: string,
  phone: string,
  username: string,
  password: string,
};

export type UserState = {
  data: User[],
  loading: boolean,
  error: boolean,
};
