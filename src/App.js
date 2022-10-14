import React from 'react'
import { Header } from './components/Header'
import { ProjectProvider } from './context/ProjectContext'
import { RoutesComponent } from './Routes'

const App = () => {
  return (
    <ProjectProvider>
      <Header />
      <RoutesComponent />
    </ProjectProvider>
  )
}

export default App
