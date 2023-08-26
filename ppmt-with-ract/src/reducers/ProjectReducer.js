import { GET_PROJECTS, GET_PROJECT, DEL_PROJECT } from "../actions/Types";

const initialState = {
  projects: [],
  project: {},
};

const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    case DEL_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (propject) => propject.projectIdentifier !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default ProjectReducer;
