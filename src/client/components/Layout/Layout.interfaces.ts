import { ImagesData } from '../Gallery/Gallery.interfaces';

export interface ILayoutProps extends ILayoutStateProps {}

export interface ILayoutStateProps {
  page: number;
  pages: number;
}

export interface ILayoutDispatchProps {
  closeMenu: () => void;
}

export interface ILayoutState {
  isDesktop?: boolean;
  hideLayout?: boolean;
  images: ImagesData;
}