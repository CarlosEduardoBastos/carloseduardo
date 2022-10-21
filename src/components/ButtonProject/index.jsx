import React from 'react'
import { Container } from './styled'

export const ButtonProject = ({name, href}) => {
  return (
    <Container>
      <a href={href} target="_blank" rel="noreferrer">{name}</a>
    </Container>
  )
}
