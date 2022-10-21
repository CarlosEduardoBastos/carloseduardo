
import * as types from './types';

export const loadProjects = async (dispatch) => {
  dispatch({type: types.PROJECTS_LOADING});
  const projectsRow = await fetch("https://api.github.com/users/CarlosEduardoBastos/repos");
  const projects = await projectsRow.json();
  dispatch({ type: types.PROJECTS_SUCCESS, payload: projects });
}