import styled, { css, createGlobalStyle } from 'styled-components/macro'

interface Props {
	onClick: () => void
	disabled?: boolean
	children: string
}

const StyledButton = styled.button`
grid-column: 1 / -1;
  border: 1px;
  background: darkcyan;
  color: white;
  font-size: 50px;
  justify-self: center;
  border-radius: 10px;
`

export const Button = ({ onClick, disabled, children }: Props) => {
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
