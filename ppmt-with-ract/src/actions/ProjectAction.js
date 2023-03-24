import axios from "axios";
import { GET_ERRORS } from "./Types";
import { Navigate } from "react-router-dom";

export const CreatePeoject = (project) => async (dispatch) => {
  try {
    const res = await axios.post(`http://localhost:8080/api/project`, project);
    <Navigate to="/dashboard" />;
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
