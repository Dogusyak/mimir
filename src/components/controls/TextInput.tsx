import styled, {css, createGlobalStyle} from 'styled-components/macro'

interface Props {
    onChange: (value: string) => void
    value: string
    placeholder?: string
}

export const TextInput = ({onChange, value, placeholder}: Props) => (
    <TextInputStyle
        type="text"
        onChange={e => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
    />
)

const TextInputStyle = styled.input`
 flex: 1;
 height: 60px;
 border-top-style: none;
 border-right-style: none;
 border-left-style: none;
 border-bottom-color: rgba(100, 100, 100, 0.7);
 border-bottom-width: 2px;
 background: #feffff;
 padding: 0 0px;
 outline: none;
 font-size: 25px;
 :focus {
	border-bottom-color: rgba(100, 100, 100);
	border-bottom-width: 3px;
}
`

