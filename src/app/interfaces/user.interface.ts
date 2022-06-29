export interface IAuthForm {
  email: string;
  password: string;
}
export interface IUser extends IAuthForm {
  id: string;
}
