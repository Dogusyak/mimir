import styled from 'styled-components/macro'

interface Props {
    children: React.ReactNode
    id?: string
}

export const FancyList = ({children, id}: Props) => {

    return (
        <StyledFancyList key={id}>{children}</StyledFancyList>
    )
}

const StyledFancyList = styled.div`
padding-left: 50px;
padding-right: 50px;
`
