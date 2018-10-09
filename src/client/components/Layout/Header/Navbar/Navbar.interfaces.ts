import { ImagesData } from '../../../Gallery/Gallery.interfaces';

export interface INavbarState {
  images: ImagesData;
}

export interface INavbarStateProps extends INavbarState {}

export interface INavBarDispatchProps {
  fetchPhotos: any
}

export interface INavbarProps extends INavBarDispatchProps, INavbarStateProps {}