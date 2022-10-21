import * as types from "./types";

export const reducer = (state,action) => {
  switch(action.type){
    case types.PROJECTS_SUCCESS:
      return {...state, projects: action.payload, loading: false}
    case types.PROJECTS_LOADING:
      return {...state, loading: true}
  }

  return {...state}
}