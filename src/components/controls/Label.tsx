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
    Blue: 'black'
}

const StyledLabel = styled.label`
grid-column: 1 / -1;
justify-self: left;
font-size: 35px;
color: ${Color.Blue};
opacity: 0.6;
`
