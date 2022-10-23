import styled from 'styled-components/macro'

interface Props {
    children: React.ReactNode
}

export const FancyItem = ({children}: Props) => {
    return (
        <StyledFancyItem>{children}</StyledFancyItem>
    )
}

const StyledFancyItem = styled.div`

`
