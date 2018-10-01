import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import photoReducer from '../store/reducers/photos.reducer';
import loadingReducer from './reducers/loading.reducers';

export default function configureStore(preloadedState?: object) {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const rootReducer = combineReducers({ images: photoReducer, loading: loadingReducer });
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
}