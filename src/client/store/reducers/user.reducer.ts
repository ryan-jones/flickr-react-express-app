import * as actionTypes from '../actions/actionTypes';
import { IUser } from '../../components/Gallery/Gallery.interfaces';

interface IUserState extends IUser { }

const initialState: IUserState = {
  userName: '',
  realName: '',
  location: '',
  description: '',
  profileUrl: ''
}

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.USER_FETCH_SUCCESS:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

export default userReducer;