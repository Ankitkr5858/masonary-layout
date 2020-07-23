import { actionType } from "./types";

// this is the reduc action wich allows us to save all cards that we have.
export const array = (item) => ({
  type: actionType.SELECT,
  payload: item,
});
