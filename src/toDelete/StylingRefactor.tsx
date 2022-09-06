import { useState } from 'react'
import styled from 'styled-components/macro'

export default function StylingRefactor() {
  const [text, setText] = useState('')

  return (
    <Container>
      <Input value={text} onChange={e => setText(e.target.value)} />
      <Output className="output">Upper Case: {text.toUpperCase()}</Output>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: sans-serif;
`

const Input = styled.input`
  padding: 5px 10px;
  border: 1px solid royalblue;
  border-radius: 5px;
`

const Output = styled.div`
  background: lightblue;
  padding: 5px;
`
