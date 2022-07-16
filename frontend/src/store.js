import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  allDataReducer,
  getDataReducer,
  ModifyDataReducer,
  newDataReducer,
} from "./reducers/dataReducers";

const reducer = combineReducers({
  getData:getDataReducer,
  modifyData: ModifyDataReducer,
  alldata: allDataReducer,
  newDAta:newDataReducer,
});



const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;