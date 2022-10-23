import styled from 'styled-components/macro'

interface Props {
    disabled?: boolean
    children: string
}

export const AppBarButton = ({disabled, children}: Props) => {
    let className = 'button'

    if (disabled) {
        className += ' button--disabled'
    }

    return (
        <StyledButton disabled={disabled} className={className}>
            {children}
        </StyledButton>
    )
}

export const AppBarButtonNoBorder = ({disabled, children}: Props) => {
    let className = 'buttonNoBorder'

    if (disabled) {
        className += ' buttonNoBorder--disabled'
    }

    return (
        <StyledButtonNoBorder disabled={disabled} className={className}>
            {children}
        </StyledButtonNoBorder>
    )
}

const StyledButton = styled.button`
  grid-column: 1 / -1;
  border: 2px;
  padding: 15px;
  background: rgba(100, 100, 100, 0.7) ;
  color: white;
  font-size: 25px;
  justify-self: center;
  border-radius: 2px;
  cursor:pointer;
  &:hover {
    background-color: rgba(100, 100, 100);
    color: white;
}
`

const StyledButtonNoBorder = styled(StyledButton)`
  background: rgba(71, 71, 71);
  border: 0px;
  padding: 0px;
   &:hover {
    background-color: rgba(71, 71, 71);
    color: rgba(230, 230, 230);
}
`
