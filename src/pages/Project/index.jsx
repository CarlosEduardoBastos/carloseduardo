import React, { useContext } from 'react'
import { ComponentProject } from '../../components/ComponetProject'
import { ProjectContext } from '../../context/ProjectContext'
import { Container } from './styled'

export const Project = () => {
  const {loading,project} = useContext(ProjectContext);
  if(loading) return <p>Carregando</p>
  return (
    <Container>
      <section>
        {project && project.map(({name,html_url})=>(
          <ComponentProject 
            name={name}
            href={html_url} 
            key={name}
          />
        ))}
      </section>
    </Container>
  )
}
