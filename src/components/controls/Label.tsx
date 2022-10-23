import styled from 'styled-components/macro'

interface Props {
    children: string
}

export const Label = ({ children }: Props) => {
    let className = 'label'

    return (
        <StyledLabel className={className}>
            {children}
        </StyledLabel>
    )
}

const Color = {
    Black: 'black'
}

const StyledLabel = styled.label`
 grid-column: 1 / -1;
 justify-self: left;
 font-weight: bold;
 font-size: 25px;
 font-family: sans-serif;
 color: ${Color.Black};
 opacity: 0.6;
 flex: 1;
`
