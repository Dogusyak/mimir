import styled from 'styled-components/macro'

interface Props {
    id: string
    children: React.ReactNode
}
const StyledTable = styled.table`
border: 1px solid lightblue;
border-radius: 5px;
`
const StyledTableHeader = styled.thead`
border: 1px solid lightblue;
border-radius: 5px;
`

const StyledTableBody = styled.tbody`
border: 1px solid lightblue;
border-radius: 5px;
`

export const Table = ({ id, children }: Props) => {
    return (
        <StyledTable id={id}>
            <StyledTableHeader>
                {children}
            </StyledTableHeader>
            <StyledTableBody>
                {children}
            </StyledTableBody>
        </StyledTable>
    )
}