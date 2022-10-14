import { render, screen } from "@testing-library/react"
import { ComponentAbount } from "."

describe("<ComponentAbount />", ()=>{
  it("should render h1 with text 'Olá, meu nome é Carlos Eduardo' and p with text 'desenvolvedor front-end'",()=>{
    render(<ComponentAbount />)

    expect(screen.getByRole("heading", {name: /Olá, meu nome é Carlos Eduardo/i})).toBeInTheDocument();
    expect(screen.getByText("desenvolvedor front-end")).toBeInTheDocument();
  })

  it("should render p with text 'tenho 18 anos, comecei estudar programação aos meus 11 anos com a linguagem de programação python, e logo em seguida, passei para o desenvolvimento web com html, css e javascript, onde tenho mais de 5 anos estudando. No momento estou aprendendo react.js, react native, next.js, node.js, mysql, no qual estou me saindo muito bem'", ()=>{
    render(<ComponentAbount />)

    const text = "tenho 18 anos, comecei estudar programação aos meus 11 anos com a linguagem de programação python, e logo em seguida, passei para o desenvolvimento web com html, css e javascript, onde tenho mais de 5 anos estudando. No momento estou aprendendo react.js, react native, next.js, node.js, mysql, no qual estou me saindo muito bem";

    expect(screen.getAllByText(text)).toBeInTheDocument()
  })

  
})