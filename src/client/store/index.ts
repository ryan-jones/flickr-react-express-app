import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import photoReducer from './reducers/photos.reducers';
import loadingReducer from './reducers/loading.reducers';
import userReducer from './reducers/user.reducers';
import modalReducer from './reducers/modal.reducers';

export default function configureStore(preloadedState?: object) {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const reducers = { 
    images: photoReducer, 
    loading: loadingReducer, 
    user: userReducer,
    modal: modalReducer 
  }

  const rootReducer = combineReducers(reducers);
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
}