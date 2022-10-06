import styled from 'styled-components/macro'

interface Props {
    children: React.ReactNode
    id?: string
}

export const FancyList = ({ children, id }: Props) => {

    return (
        <StyledFancyList key={id}>{children}</StyledFancyList>
    )
}

const StyledFancyList = styled.ul`
border: 1px solid lightblue;
border-radius: 5px;
background: rgba(70, 47, 156, 0.1) ;
padding: 10px;
display: flex;
gap: 10px;
`
