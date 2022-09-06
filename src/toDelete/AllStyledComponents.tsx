import styled, { css, createGlobalStyle } from 'styled-components/macro'
import  StylingRefactor  from './StylingRefactor'
import { Input } from './Input'

const FancyList = styled.ul`
  border: 1px solid lightblue;
  border-radius: 5px;
`
const FancyItem = styled.li`
  font-family: sans-serif;
  margin: 5px 0;
`
const Header = styled.div`
  margin: 5px 0;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`
const Button = styled.button`
  background: #ff0000;
`
const Card = styled.div`
  background: #ff0000;
  border-radius: 5px;
`

//String Interpolation
const name = 'Tobi'
const donutCount = 5
const concat = 'Hi ' + name + '! Do you want ' + donutCount + ' donuts?'
const interp = `Hi ${name}! Do you want ${donutCount} donuts?`
const double = `Hi ${name}!
Do you want ${donutCount * 2} donuts?`
//

//Tagged Template
const Color = {
  Blue: 'blue'
}

const Message = styled.div`
  grid-column: 1 / -1;
  justify-self: center;
  font-size: 18px;
  color: ${Color.Blue};
  opacity: 0.6;
`
//

function greet(strings: TemplateStringsArray, name: string, age: number) {
  return strings[0] + name.toUpperCase() + strings[1] + age + strings[2]
}

//Tagged Template in styled components
interface LabelProps {
  warning?: Boolean
}
const Label = styled.div<LabelProps>`
  border: 2px solid ${p => (p.warning ? 'red' : 'green')};
`
//

//Snippets mit Css
const Box = css`
  border: 5px solid black;
  width: 100px;
  height: 80px;
`
const RedBox = styled.div`
  ${Box};
  border-color: red;
`
const BlueBox = styled.div`
  ${Box};
  border-color: blue;
`
//

//Props && css
const round = css`
  border-radius: 50%;
`

interface BoxProps {
  color: string
  round?: boolean
}

const Box2 = styled.div<BoxProps>`
  border: 5px solid ${p => p.color};
  width: 100px;
  height: 100px;
  ${p => p.round && round}
`
//

//Extending Styles
const Button2 = styled.button`
  border: none;
  background: darkcyan;
  color: white;
`
const MegaButton = styled(Button2)`
  font-size: 50px;
`
//Extending Styles && Unterschütützung
const Form = styled.form`
  display: flex;
`

const FormInput = styled(Input)`
  flex: 1;
  `
//

//Global styles
const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
}
body {
background: lightsalmon;
font-family: Verdana, Geneva, Tahoma, sans-serif;
}
`

//

export function AllStyledComponents() {
  const name = 'Tobi'
  const age = 35

  const greetings = greet`Hi, my name is ${name} and I am ${age} years old.`

  const sayHello = () => alert('Hello')

  return (
    <>
      <Container>
        <Header>{concat}</Header>
        <Header>{interp}</Header>
        <div>{double}</div>
        {/* ...more tsx */}
        <Card>I'm a fancy Card!</Card>
        <Button>Click me</Button>
        <FancyList>
          <FancyItem>styled-components</FancyItem>
          <FancyItem>react-router</FancyItem>
          <FancyItem>hooks</FancyItem>
        </FancyList>
        <div>{greetings}</div>
        <Message>I am a message</Message>
        <Label>Everything's fiiiiine</Label>
        <Label warning>I did an oopsie!</Label>
        <RedBox />
        <BlueBox />
        <Box2 color="red" />
        <Box2 color="blue" round />
        <MegaButton onClick={sayHello}>Click Me!</MegaButton>

        <Form>
          <FormInput label="Name" />
          <FormInput label="Email" />
        </Form>

        <div>
          <GlobalStyle />
          Welcome to my page!
        </div>

      </Container>
      <StylingRefactor/>
    </>
  )
}