import styled from 'styled-components/macro'

interface Props {
    onClick: () => void
    disabled?: boolean
    children: string
}

export const Button = ({onClick, disabled, children}: Props) => {
    let className = 'button'

    if (disabled) {
        className += ' button--disabled'
    }

    return (
        <StyledButton onClick={onClick} disabled={disabled} className={className}>
            {children}
        </StyledButton>
    )
}

export const ButtonWide = ({onClick, disabled, children}: Props) => {
    let className = 'buttonWide'

    if (disabled) {
        className += ' buttonWide--disabled'
    }

    return (
        <StyledButtonWide onClick={onClick} disabled={disabled} className={className}>
            {children}
        </StyledButtonWide>
    )
}


const StyledButton = styled.button`
 grid-column: 1 / -1;
 width: 100px;
 padding: 6px;
 border: 1px;
 background: rgba(100, 100, 100, 0.7);
 color: white;
 font-size: 25px;
 justify-self: center;
 border-radius: 2px;
 cursor:pointer;
 &:hover {
   background-color: rgba(100, 100, 100);
 }
`
const StyledButtonWide = styled(StyledButton)`
 width: 220px;
`

