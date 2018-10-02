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

