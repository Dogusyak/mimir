import styled from 'styled-components/macro'

interface Props {
    children: React.ReactNode
}

export const Bar = ({ children }: Props) => {
    return (
        <StyledBar>{children}</StyledBar>
    )
}

const StyledBar = styled.div`
  background: lightblue;
  padding: 10px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
`
