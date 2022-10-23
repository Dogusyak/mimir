import styled from 'styled-components/macro'

interface Props {
    children: React.ReactNode
}

export const Container = ({children}: Props) => {
    return (
        <StyledContainer>{children}</StyledContainer>
    )
}

export const ContainerAddCard = ({children}: Props) => {
    return (
        <StyledContainerAddCard>{children}</StyledContainerAddCard>
    )
}

const StyledContainer = styled.div`
 justify-content: space-between;
 margin-top:20px;
 margin-bottom:20px;
 Padding-bottom: 15px;
 display: flex;
 flex-wrap: wrap;
 gap: 20px;
 border-bottom: 2px solid rgba(100, 100, 100, 0.3);
`

const StyledContainerAddCard = styled(StyledContainer)`
border-bottom-style: none;
padding-left: 50px;
padding-right: 50px;
`