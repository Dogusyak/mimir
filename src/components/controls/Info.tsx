import styled from 'styled-components/macro'

interface Props {
    children: React.ReactNode
}

export const Info = ({ children }: Props) => {
    return (
        <Message>{children}</Message>
    )
}

const Color = {
    Blue: 'blue'
}

const Message = styled.div`
  grid-column: 1 / -1;
  justify-self: center;
  font-size: 35px;
  color: ${Color.Blue};
  opacity: 0.6;
`
