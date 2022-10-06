import styled from 'styled-components/macro'

interface Props {
    children: React.ReactNode
}

export const Header = ({ children }: Props) => {
    return (
        <StlyedHeader>{children}</StlyedHeader>
    )
}

const StlyedHeader = styled.div`
  font-family: sans-serif;
  font-weight: bold;
  color: #815eff;
  font-size: 40px;
  margin: 5px 0;
`
