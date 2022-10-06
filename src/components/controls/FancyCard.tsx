import styled from 'styled-components/macro'

interface Props {
    children: string
}

export const FancyCard = ({ children }: Props) => {

    return (
        <StyledCard>{children}</StyledCard>
    )
}

const StyledCard = styled.div`
background: #ff0000;
border-radius: 5px;
`
