import React from 'react'
import { Link, NavLink } from 'react-router-dom'
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
              <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? "8C80CE" : undefined})}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/project" end style={({ isActive }) => ({ color: isActive ? "8C80CE" : undefined })}>Projetos</NavLink>
            </li>
            <li>
              <NavLink to="/contact" end style={({ isActive }) => ({ color: isActive ? "8C80CE" : undefined})}>Contatos</NavLink>
            </li>
          </ul>
        </Nav>
      </section>
    </ContainerHeader>
  )
}
