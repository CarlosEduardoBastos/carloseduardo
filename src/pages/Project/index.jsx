import React, { useContext, useEffect, useRef } from 'react'
import { ButtonProject } from '../../components/ButtonProject'
import { Loading } from '../../components/Loading'
import { loadProjects } from '../../context/ProjectsContext/actions'
import { ProjectsContext } from '../../context/ProjectsContext/context'
import { Container } from './styled'

export const Project = () => {
  const isMounted = useRef(true);
  const {projectsState: {projects,loading}, projectsDispatch} = useContext(ProjectsContext);

  useEffect(()=>{
    loadProjects(projectsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => (isMounted.current = false);
  },[projectsDispatch])


  if(loading) return <Loading />
  return (
    <Container>
      <section>
        {projects.map(({name,html_url})=>(
          <ButtonProject 
            name={name}
            href={html_url} 
            key={name}
          />
        ))}
      </section>
    </Container>
  )
}
