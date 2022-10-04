import styled from 'styled-components/macro'

interface Props {
    children: string
}

const StyledCard = styled.div`
background: #ff0000;
border-radius: 5px;
`

export const FancyCard = ({ children }: Props) => {

    return (
        <StyledCard>{children}</StyledCard>
    )
}
