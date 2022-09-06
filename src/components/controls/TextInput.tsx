import styled, { css, createGlobalStyle } from 'styled-components/macro'

interface Props {
	onChange: (value: string) => void
	value: string
	placeholder?: string
}

const TextInputStyle = styled.input`
height: 40px;
border: 2px solid #3aafa9;
background: #feffff;
padding: 0 10px;
outline: none;
font-size: 18px;
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
