import styled from 'styled-components/macro'

interface Props {
    id: string
    children: React.ReactNode
}
const StyledTable = styled.table`
margin-top:20px;
border: 1px solid lightblue;
border-radius: 10px;
display: grid;
gap: 1px;
background: rgba(70, 47, 156, 0.1) ;
justify-content: center;
vertical-align: middle;
`
const StyledTableHeader = styled.thead`
border: 1px solid red;
border-radius: 5px;
font-size: 30px;
`

const StyledTableBody = styled.tbody`
border: 1px solid red;
border-radius: 5px;
font-size: 30px;
`

const StyledTableRow = styled.tr`
border: 1px solid black;
border-radius: 5px;
`

const StyledRowCell = styled.td`
border: 2px solid grey;
border-radius: 5px;
`

const StyledHeaderCell = styled.th`
border: 2px solid grey;
border-radius: 5px;
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