import styled from 'styled-components/macro'

interface Props {
    children: React.ReactNode
}

export const Info = ({ children }: Props) => {
    return (
        <Message>{children}</Message>
    )
}

const Color = { // It is also possible to define color with a constant and use with string concatination.
    Black: 'black'
}

const Message = styled.div`
 grid-column: 1 / -1;
 padding-left: 25px;
 padding-top: 25px;
 padding-bottom: 20px;
 justify-self: center;
 font-size: 25px;
 color: ${Color.Black};
 opacity: 0.8;
`
