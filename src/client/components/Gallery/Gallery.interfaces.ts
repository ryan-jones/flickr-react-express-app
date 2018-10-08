export interface IGalleryState {
  images: ImagesData;
  loading: boolean;
  user: IUser;
  modal: {
    modalActive: boolean;
  }
}

export interface IGalleryStateProps {
  images: ImagesData;
  user: IUser;
  loading: boolean;
  modalActive: boolean;
 }

export interface IGalleryDispatchProps {
  fetchPhotos: any;
  openModal: any;
  closeModal: any
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
  selectedPhoto?: IPhoto;
}

export interface IPhotoResponse {
  config: object;
  header: object;
  status: number;
  statusText: string;
  request: any;
  data: ImagesData
}