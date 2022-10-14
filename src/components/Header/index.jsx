import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerHeader, ContainerLogo, Nav } from './styled'

export const Header = () => {
  return (
    <ContainerHeader>
      <section>
        <ContainerLogo>
          <Link to="/">Carlos Eduardo</Link>
        </ContainerLogo>
        <Nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/project">Projetos</Link>
            </li>
            <li>
              <Link to="/contact">Contatos</Link>
            </li>
          </ul>
        </Nav>
      </section>
    </ContainerHeader>
  )
}
