import { ImagesData } from '../Gallery/Gallery.interfaces';

export interface ILayoutProps extends ILayoutStateProps {}

export interface ILayoutStateProps {
  images: ImagesData;
}

export interface ILayoutDispatchProps {
  closeMenu: () => void;
}

export interface ILayoutState {
  images: ImagesData;
}