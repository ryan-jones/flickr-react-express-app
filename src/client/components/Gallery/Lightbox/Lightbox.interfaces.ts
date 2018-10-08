import { IPhoto } from '../Gallery.interfaces';

export interface ILightboxProps {
  photo?: IPhoto;
  user: IUser;
}

export interface IUser {
  description: string;
  location: string;
  realName: string;
  userName: string;
  profileUrl: string;
}