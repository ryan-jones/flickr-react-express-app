import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import photoReducer from '../store/reducers/photos.reducer';
import loadingReducer from './reducers/loading.reducers';
import userReducer from './reducers/user.reducer';

export default function configureStore(preloadedState?: object) {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const reducers = { 
    images: photoReducer, 
    loading: loadingReducer, 
    user: userReducer 
  }
  
  const rootReducer = combineReducers(reducers);
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
}