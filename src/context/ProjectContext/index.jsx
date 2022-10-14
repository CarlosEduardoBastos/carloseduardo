import React, { createContext, useEffect, useState } from 'react'

export const ProjectContext = createContext()

export const  ProjectProvider = ({children}) => {
  const [project,setProject] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const apiFetch = async () => {
      try {
        setLoading(true)
        const data = await fetch("https://api.github.com/users/CarlosEduardoBastos/repos");
        const json = await data.json()
        setProject(json)
      } catch (error) {
        console.log(error)
      }finally {
        setLoading(false);
      }
    }
    apiFetch()
  },[])
  return (
    <ProjectContext.Provider value={{project, loading}}>
      {children}
    </ProjectContext.Provider>
  )
}
