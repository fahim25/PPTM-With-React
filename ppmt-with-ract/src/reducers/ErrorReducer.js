import { GET_ERRORS } from "../actions/Types";

const initialState = {};

export default function ErrorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      const { payload } = action;
      return payload;

    default:
      return state;
  }
}

/* export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;

    default:
      return state;
  }
} */
