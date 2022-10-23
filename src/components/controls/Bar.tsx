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
  background: rgba(71, 71, 71);
  padding: 10px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items:center;
`
