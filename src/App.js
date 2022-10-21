import React from 'react'
import { Header } from './components/Header'
import { RoutesComponent } from './Routes'
import { ProjectProvider } from './context/ProjectsContext'

const App = () => {
  return (
    <ProjectProvider>
      <Header />
      <RoutesComponent />
    </ProjectProvider>
  )
}

export default App
