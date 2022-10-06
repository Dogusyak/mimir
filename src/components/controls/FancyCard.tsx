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
background: rgba(70, 47, 156, 0.1) ;
border-radius: 5px;
font-weight: bold;
font-size: 3em;
`
