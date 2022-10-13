import { render, screen } from "@testing-library/react"
import { ComponentAbount } from "."

describe("<ComponentAbount />", ()=>{
  it("should render h1 with text 'Olá, meu nome é Carlos Eduardo' and p with text 'desenvolvedor front-end'",()=>{
    render(<ComponentAbount />)

    expect(screen.getByRole("heading", {name: /Olá, meu nome é Carlos Eduardo/i})).toBeInTheDocument();
    expect(screen.getByText("desenvolvedor front-end")).toBeInTheDocument();
  })
})