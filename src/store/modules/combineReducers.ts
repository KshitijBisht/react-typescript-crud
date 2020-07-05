import { combineReducers } from 'redux';
 import customerReducer from './customer/reducer'

 const rootReducer = combineReducers({
    customer: customerReducer,
  });
  
  export type RootState = ReturnType<typeof rootReducer>;
  export default rootReducer;