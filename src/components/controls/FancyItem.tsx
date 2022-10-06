import styled from 'styled-components/macro'

interface Props {
    children: React.ReactNode
}

export const FancyItem = ({children}:Props) => {
    return (
        <StyledFancyList>{children}</StyledFancyList>
    )
}

const StyledFancyList = styled.li`
font-family: sans-serif;
margin: 5px 20px;
padding:10px;
`
