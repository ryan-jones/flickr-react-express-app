import * as actionTypes from "../actions/actionTypes";
import { IUser } from "../../components/Gallery/Gallery.interfaces";

interface IUserState extends IUser {}

const initialState: IUserState = {
  userName: "",
  realName: "",
  location: "",
  description: "",
  profileUrl: ""
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.USER_FETCH_SUCCESS:
      return { ...state, ...action.payload };
    case actionTypes.RESET_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
