import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false
}

const loadingReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case actionTypes.IS_LOADING:
      return Object.assign({}, state, { loading: true });
    case actionTypes.LOADED:
      return Object.assign({}, state, { loading: false })
    default:
      return state;
  }
}

export default loadingReducer;