export interface IPhoto {
  farm: number;
  isFamily: number;
  isFriend: number;
  isPublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
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