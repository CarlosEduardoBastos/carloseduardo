import React from 'react'
import { Container, Content, ContentLink } from './styled';
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/71217-programador-web.json"
import { Link } from 'react-router-dom';

export const ComponentAbount = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container>
      <section>
        <Content>
          <div>
            <h1>Olá, meu nome é Carlos Eduardo</h1>
            <p>desenvolvedor front-end</p>
          </div>
          <p>
            Tenho 18 anos, comecei estudar
            programação aos meus 11 anos com a linguagem de programação
            python, e logo em seguida, passei para o desenvolvimento web com
            html, css e javascript. No
            momento estou aprendendo react.js, react native, next.js, node.js, mysql,
            no qual estou me saindo muito bem.
          </p>

          <ContentLink>
            <Link to="/project">Projetos</Link>
          </ContentLink>
        </Content>
        <div className='img'>
          <Lottie
              options={defaultOptions}
              height={300}
              max-width={450}
              title="Manuel Solis"
            />
        </div>
      </section>
    </Container>
  )
}
