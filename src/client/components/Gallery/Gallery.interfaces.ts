export interface IGalleryState {
  images: ImagesData;
  loading: boolean;
}

export interface IGalleryStateProps extends IGalleryState { }

export interface IGalleryDispatchProps {
  fetchPhotos: any;
}

export interface IGalleryProps extends IGalleryStateProps, IGalleryDispatchProps { }

export interface IUserResponse {
  config: any;
  headers: any;
  request: any;
  status: number;
  statusText: string;
  data: IUser;
}

export interface IUser {
  description: string;
  location: string;
  realName: string;
  userName: string;
  profileUrl: string;
}

export interface IPhoto {
  owner: string;
  title: string;
  url: string;
}

export interface ImagesData {
  page: number;
  perPage: number;
  pages: number;
  total: string;
  photos: IPhoto[];
}

export interface IPhotoResponse {
  config: object;
  header: object;
  status: number;
  statusText: string;
  request: any;
  data: ImagesData
}