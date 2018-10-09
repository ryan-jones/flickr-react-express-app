import * as actionTypes from '../actions/actionTypes';
import { ImagesData } from '../../components/Gallery/Gallery.interfaces';

interface IState extends ImagesData {
  error: string;
}

const InitialState: IState = {
  tags: '',
  photos: [],
  perPage: 10,
  pages: 0,
  total: '',
  page: 1,
  selectedPhoto: {
    owner: '',
    title: '',
    url: ''
  },
  error: ''
}

const photoReducer = (state = InitialState, action: any) => {
  switch(action.type) {
    case actionTypes.FETCHING_PHOTOS:
      return { ...state, photos: [] };
    case actionTypes.PHOTOS_FETCHED:
      const { photos, page, pages, perPage, total, tags } = action.payload
      return { ...state, photos, page, pages, perPage, total, tags };
    case actionTypes.PHOTOS_FETCH_ERROR:
      return { ...state, error: action.payload }
    case actionTypes.SET_SELECTED_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    default:
      return state;
  }
}

export default photoReducer;