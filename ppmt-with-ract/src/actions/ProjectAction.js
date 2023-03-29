import axios from "axios";
import { GET_ERRORS, GET_PROJECTS } from "./Types";
import { Navigate, useNavigate } from "react-router-dom";

export const CreatePeoject = (project, history) => async (dispatch) => {
  // const navigate = useNavigate();

  try {
    const res = await axios.post(`http://localhost:8080/api/project`, project);
    // .then(() => navigate("/dashboard"));
    history.push("/dashboard");
    // navigate("/dashboard");
    // <Navigate to="/dashboard" />;
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ERRORS,
      payload: err.res.data,
    });
  }
};

/* export const GetProjects = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/api/project/allProject");
  dispatch({
    type: GET_PROJECTS,
    payload: res.data,
  });
}; */

export const getProjects = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/api/project/allProject");
  dispatch({
    type: GET_PROJECTS,
    payload: res.data,
  });
};

/* export const GetProjects = () => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/api/project/allProject`);
  dispatch({
    type: GET_PROJECTS,
    payload: res.data,
  });
}; */
