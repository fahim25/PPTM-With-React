import axios from "axios";
import { GET_ERRORS, GET_BACKLOG } from "./Types";

export const addProjectTask =
  (backlogId, projectTask, history) => async (dispatch) => {
    try {
      await axios.post(`/api/backlog/${backlogId}`, projectTask);
      history.push(`/projectBoard/${backlogId}`);

      dispatch({
        type: GET_ERRORS,
        payload: {},
      });
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      });
    }
  };

export const getBacklog = (backlogId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/backlog/${backlogId}`);

    // console.log(res);

    dispatch({
      type: GET_BACKLOG,
      payload: res.data,
    });

    // console.log("dispatch");
    // console.log(dispatch);
  } catch (error) {}
};
