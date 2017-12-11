import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import reducer from './reducers';

// create the store passing the reducer and middleware

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );
// start the sagaMiddleware by calling the run function
  sagaMiddleware.run(rootSaga);

  return store;
}
export default configureStore;
