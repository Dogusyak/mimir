import styled from 'styled-components/macro'

interface Props {
    children: React.ReactNode
}

export const DownUnderContainer = ({ children }: Props) => {
    return (
        <StyledContainer>{children}</StyledContainer>
    )
}

const StyledContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 10px;
`
