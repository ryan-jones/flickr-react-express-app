import { ImagesData } from "../../interfaces/photos.interface";

export interface IGalleryState {
  images: ImagesData;
  loading: boolean;
}

export interface IGalleryStateProps extends IGalleryState { }

export interface IGalleryDispatchProps {
  fetchPhotos: any;
}

export interface IGalleryProps extends IGalleryStateProps, IGalleryDispatchProps {}