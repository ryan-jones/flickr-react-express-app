import { IUser, IPhoto } from '../Gallery.interfaces';

export interface IPhotoDispatchProps {
  fetchUser: (id: string) => void;
}

export interface ImageProps extends IPhotoDispatchProps, ImageStateProps {
  photo: IPhoto;
}

export interface ImageStateProps extends ImageState {};

export interface ImageState {
  user: IUser;
}