import { GET_BOOKS } from "../types";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
}
