import {useReducer} from "react";
import {ProjectsContext} from "./context"
import { data } from "./data";
import { reducer } from "./reducer";

export const  ProjectProvider = ({children}) => {
  const [projectsState, projectsDispatch] = useReducer(reducer,data)
  return (
    <ProjectsContext.Provider value={{projectsState, projectsDispatch }}>
      {children}
    </ProjectsContext.Provider>
  )
}
