import styled, { css, createGlobalStyle } from 'styled-components/macro'

const StyledFancyList = styled.li`
font-family: sans-serif;
margin: 5px 0;
`

export const FancyItem = () => {
    return (
        <StyledFancyList />
    )
}
