import { Game, Solved } from "models/GameModel"
import { ButtonWide } from './../../controls/Button'
import { DownUnderContainerSummary } from '../../controls/DownUnderContainer'
import { Table, TableHeader, TableBody, TableRow, RowCell, HeaderCell } from '../../controls/TableControls'
import { Info } from "../../controls/Info";

interface Props {
    deleteCurrentGame: () => void
    startNewGame: () => void
    game: Game
}

const generateTable = (values: Solved[]) => {
    return <Table id="summaryTable">
        <TableHeader id="summaryTableHeader">
            {generateTableHeaders()}
        </TableHeader>
        <TableBody id="summaryTableBody">
            {generateTableBody(values)}
        </TableBody>
    </Table>
}

const generateTableHeaders = () => {
    return <TableRow id="headerRow">
        <HeaderCell id="frontHeader">Front</HeaderCell>
        <HeaderCell id="backHeader">Back</HeaderCell>
        <HeaderCell id="yourAnswerHeader">Your Answer</HeaderCell>
        <HeaderCell id="acceptedHeader">Accepted</HeaderCell>
    </TableRow>
}

function generateTableBody(values: Solved[]) {
    return values.map((value => (
        <TableRow id={value.id}>
            <RowCell id={value.id}>{value.front}</RowCell>
            <RowCell id={value.id}>{value.back}</RowCell>
            <RowCell
                id={value.id}>{value.answer.trim().length === 0 ? 'no answer' : value.answer}</RowCell>
            <RowCell id={value.id + value.accepted}>{value.accepted ? '✔️' : '❌'}</RowCell>
        </TableRow>
    )))
}

function determineCountOfCorrectAnswers(values: Solved[]) {
    let count = 0;
    values.forEach(value => (
        value.accepted ? count++ : count
    ))
    return count;
}

export function GameSummaryComponent(props: Props) {
    return (
        <>
            <DownUnderContainerSummary>
                <ButtonWide onClick={() => props.startNewGame()}>Start New Game</ButtonWide>
                <Info>Solved {determineCountOfCorrectAnswers(props.game.solved)} out of {props.game.solved ? props.game.solved.length : 3} correctly.</Info>
                {generateTable(props.game.solved)}
            </DownUnderContainerSummary>
        </>
    )
}
