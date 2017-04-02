import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// import reducer from './reducers/index.reducer';
import rootReducer from './reducers/index.reducer';

// export default createStore(reducer, applyMiddleware(thunk));

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
    );