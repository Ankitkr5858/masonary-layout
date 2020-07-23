import { combineReducers } from "redux";
import Reducer from "./department/reducer";
export default combineReducers({
  reducer: Reducer,
});
