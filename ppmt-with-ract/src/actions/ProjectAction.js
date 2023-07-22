import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT } from "./Types";

export const CreatePeoject = (project, history) => async (dispatch) => {
  try {
    const res = await axios.post(`http://localhost:8080/api/project`, project);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.res.data,
    });
  }
};

export const GetProjects = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/api/project/allProject");
  dispatch({
    type: GET_PROJECTS,
    payload: res.data,
  });
};

export const GetProject = (id, history) => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/api/project/${id}`);
  dispatch({
    type: GET_PROJECT,
    payload: res.data,
  });
};
