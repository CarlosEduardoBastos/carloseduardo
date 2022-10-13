import React from 'react'
import { Container, Content, ContentImg } from './styled';
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/36121-developer-at-work.json"

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
          tenho 18 anos, comecei estudar
          programação aos meus 11 anos com a linguagem de programação
          python, e logo em seguida, passei para o desenvolvimento web com
          html, css e javascript, onde tenho mais de 5 anos estudando. No
          momento estou aprendendo react.js, react native, next.js, node.js, mysql,
          no qual estou me saindo muito bem.
          </p>
        </Content>
        <ContentImg>
        <Lottie
            options={defaultOptions}
            height={300}
            width={450}
            title="Emad Moradian"
          />
        </ContentImg>
      </section>
    </Container>
  )
}
