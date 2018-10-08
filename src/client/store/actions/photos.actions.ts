import axios, { AxiosResponse } from 'axios';
import createAction from './create-action';
import * as actionTypes from './actionTypes';
import { IPhotoResponse, IPhoto } from '../../components/Gallery/Gallery.interfaces';

export const fetchPhotos = (tags: string, perPage: number = 10, page: number = 1) => (dispatch: any) => {
  dispatch(createAction(actionTypes.FETCHING_PHOTOS));
  dispatch(createAction(actionTypes.IS_LOADING));

  return axios.get(`http://localhost:8080/api/photos?tags=${tags}&perPage=${perPage}&page=${page}`)
    .then((res: AxiosResponse<IPhotoResponse>) => {
      dispatch(createAction(actionTypes.PHOTOS_FETCHED, res.data));
      dispatch(createAction(actionTypes.LOADED));
    })
    .catch((err: Error) => {
      console.log('err', err);
      dispatch(createAction(actionTypes.PHOTOS_FETCH_ERROR, err.message));
      dispatch(createAction(actionTypes.LOADED));
    })
}

export const setSelectedPhoto = (photo: IPhoto)  => {
  return createAction(actionTypes.SET_SELECTED_PHOTO, photo);
}