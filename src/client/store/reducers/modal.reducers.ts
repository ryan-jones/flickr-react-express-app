import * as actionTypes from '../actions/actionTypes';

const initialState = {
  modalActive: false
}

const modalReducer = (state = initialState, action: any) => {

  switch(action.type) {
    case actionTypes.MODAL_OPEN:
      return { modalActive: true };
    case actionTypes.MODAL_CLOSED:
      return { modalActive: false };
    default:
      return state
  }
}

export default modalReducer
