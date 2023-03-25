import axios from "axios";
import { GET_ERRORS, GET_PROJECTS } from "./Types";
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

const GetProjects = () => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/api/project/allProject`);
  dispatch({
    type: GET_PROJECTS,
    payload: res.data,
  });
};

export default GetProjects;