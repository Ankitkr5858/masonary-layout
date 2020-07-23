import { actionType } from "./types";

const INITIAL_STATE = {
  arrays: [],
};

const Reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.SELECT:
      return {
        ...state,
        arrays: payload,
      };
    default:
      return state;
  }
};

export default Reducer;
