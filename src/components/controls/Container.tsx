import styled from 'styled-components/macro'

interface Props {
  children: React.ReactNode
}

export const Container = ({ children }: Props) => {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}

const StyledContainer = styled.div`
justify-content: space-between;
margin-top:20px;
margin-bottom:20px;
padding: 0 16px;
display: flex;
flex-wrap: wrap;
gap: 20px;
`
