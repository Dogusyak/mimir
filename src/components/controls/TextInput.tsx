import styled, { css, createGlobalStyle } from 'styled-components/macro'

interface Props {
	onChange: (value: string) => void
	value: string
	placeholder?: string
}

const TextInputStyle = styled.input`
flex: 1;
height: 40px;
border: 2px solid #3aafa9;
background: #feffff;
padding: 0 16px;
outline: none;
font-size: 25px;
:focus {
	border-color: #2b7a78;
}
`

export const TextInput = ({ onChange, value, placeholder }: Props) => (
	<TextInputStyle
		type="text"
		onChange={e => onChange(e.target.value)}
		value={value}
		placeholder={placeholder}
	/>
)
