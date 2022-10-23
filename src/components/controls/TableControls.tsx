import styled from 'styled-components/macro'

interface Props {
    id: string
    children: React.ReactNode
}
const StyledTable = styled.table`
 margin-top:20px;
 display: grid;
 gap: 20px;
 justify-content: center;
 vertical-align: middle;
`
const StyledTableHeader = styled.thead`
 font-size: 25px;
 width: 800px;
`

const StyledTableBody = styled.tbody`
 font-size: 25px;
`

const StyledTableRow = styled.tr`
 border: 1px solid black;
 border-radius: 5px;
`

const StyledRowCell = styled.td`
 width: 200px;
 text-align: left;
 padding-bottom: 15px;
`

const StyledHeaderCell = styled.th`
 width: 200px;
 text-align: left;
`

export const Table = ({ id, children }: Props) => {
    return (
        <StyledTable id={id}>
            {children}
        </StyledTable>
    )
}

export const TableHeader = ({ id, children }: Props) => {
    return (
        <StyledTableHeader id={id}>
            {children}
        </StyledTableHeader>
    )
}

export const TableBody = ({ id, children }: Props) => {
    return (
        <StyledTableBody id={id}>
            {children}
        </StyledTableBody>
    )
}

export const TableRow = ({ id, children }: Props) => {
    return (
        <StyledTableRow id={id}>
            {children}
        </StyledTableRow>
    )
}

export const RowCell = ({ id, children }: Props) => {
    return (
        <StyledRowCell id={id}>
            {children}
        </StyledRowCell>
    )
}

export const HeaderCell = ({ id, children }: Props) => {
    return (
        <StyledHeaderCell id={id}>
            {children}
        </StyledHeaderCell>
    )
}