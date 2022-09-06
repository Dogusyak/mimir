import styled, { css, createGlobalStyle } from 'styled-components/macro'

interface Props {
	disabled?: boolean
	children: string
}

const StyledButton = styled.button`
  grid-column: 1 / -1;
  border: 2px;
  background: rgba(255, 255, 255, 0.5) ;
  color: black;
  font-size: 50px;
  justify-self: center;
  border-radius: 5px;
  cursor:pointer;
  &:hover {
    background-color: rgba(255, 255, 255);
    color: black;
}
`

export const AppBarButton = ({ disabled, children }: Props) => {
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
