import * as actionTypes from '../actions/actionTypes';

const initialState = {
  modalActive: false
}

const modalReducer = (state = initialState, action: any) => {

  switch(action.type) {
    case actionTypes.MODAL_OPEN:
      return Object.assign({}, state, { modalActive: true });
    case actionTypes.MODAL_CLOSED:
      return Object.assign({}, state, { modalActive: false });
    default:
      return state
  }
}

export default modalReducer
