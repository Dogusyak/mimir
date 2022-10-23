import { Card } from '../../../models/CardModel'
import { Button } from '../../controls/Button'
import { Label } from '../../controls/Label'
import { FancyList } from '../../controls/FancyList'
import { FancyItem } from '../../controls/FancyItem'
import { Container } from '../../controls/Container'
import { QueryNavLink } from '../../../helpers/QueryNavLink'

interface Props {
    cards: Card[]
    remove: (card: Card) => void
}

export const CardList = ({ cards, remove }: Props) => {

    if (cards.length === 0) {
        return <div>Keine Cards gefunden.</div>
    }

    return (
        <>
            {cards.map(card => (
                <FancyList key={card.id}>
                    <FancyItem>
                        <Container>
                            <Label>{card.front}</Label>
                            <Label>{card.back}</Label>
                            <QueryNavLink
                                to={card.id}
                                key={card.id}
                            >
                                <Button onClick={() => null}>Edit</Button>
                            </QueryNavLink>
                            <Button onClick={() => remove(card)}>Delete</Button>
                        </Container>
                    </FancyItem>
                </FancyList>
            ))}
        </>
    )
}
