import * as actionTypes from './actionTypes';
import createAction from './create-action';

export const activateModal = () => (dispatch: any) => {
  dispatch(createAction(actionTypes.MODAL_OPEN));
}

export const closeModal = () => (dispatch: any) => {
  dispatch(createAction(actionTypes.MODAL_CLOSED));
}
