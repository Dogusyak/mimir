import styled from 'styled-components/macro'


interface Props {
    children: React.ReactNode
}

export const DownUnderContainer = ({ children }: Props) => {
    return (
        <StyledContainer>{children}</StyledContainer>
    )
}

export const DownUnderContainerNewGame = ({ children }: Props) => {
    return (
        <StyledContainerNewGame>{children}</StyledContainerNewGame>
    )
}

export const DownUnderContainerSummary = ({ children }: Props) => {
    return (
        <StyledContainerSummary>{children}</StyledContainerSummary>
    )
}

const StyledContainer = styled.div`
 margin-left: auto;
 margin-right: auto;
 width: 414px;
`
const StyledContainerNewGame = styled(StyledContainer)`
 justify-self: center;
 width: 220px;
`
const StyledContainerSummary = styled(StyledContainer)`
 text-align: center;
 width: 800px;
`