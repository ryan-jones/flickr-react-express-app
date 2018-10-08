import axios, { AxiosResponse } from 'axios';
import createAction from './create-action';
import * as actionTypes from './actionTypes';
import { IUserResponse } from '../../components/Gallery/Gallery.interfaces';

export const fetchUser = (userId: string) => (dispatch: any) => {
  dispatch(createAction(actionTypes.FETCHING_USER));
  return axios.get(`http://localhost:8080/api/user?userId=${userId}`)
    .then((res: AxiosResponse<IUserResponse>) => {
      dispatch(createAction(actionTypes.USER_FETCH_SUCCESS, res.data));
    })
    .catch((err: Error) => {
      dispatch(createAction(actionTypes.USER_FETCH_FAILED, err));
    });
}