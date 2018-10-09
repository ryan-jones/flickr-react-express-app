import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: false
}

const loadingReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case actionTypes.IS_LOADING:
      return { isLoading: true };
    case actionTypes.LOADED:
      return { isLoading: false };
    default:
      return state;
  }
}

export default loadingReducer;