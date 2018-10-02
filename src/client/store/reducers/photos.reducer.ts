import * as actionTypes from '../actions/actionTypes';
import { ImagesData } from '../../components/Gallery/Gallery.interfaces';

interface IState extends ImagesData {}

const InitialState: IState = {
  photos: [],
  perPage: 10,
  pages: 0,
  total: '',
  page: 1
}

const photoReducer = (state = InitialState, action: any) => {
  switch(action.type) {
    case actionTypes.FETCHING_PHOTOS:
      return Object.assign({}, state, { photos: [] });
    case actionTypes.PHOTOS_FETCHED:
      const { photos, page, pages, perPage, total } = action.payload
      return Object.assign({}, state, { photos, page, pages, perPage, total });
    default:
      return state;
  }
}

export default photoReducer;