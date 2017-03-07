import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// import reducer from './reducers/index.reducer';
import rootReducer from './reducers/index.reducer';

// export default createStore(reducer, applyMiddleware(thunk));

export default createStore(rootReducer, applyMiddleware(thunk));