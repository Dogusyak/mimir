import { Fragment, useState } from 'react'
import { Card } from '../../../models/CardModel'
import { Button } from '../../controls/Button'
import { Label } from '../../controls/Label'
import styled, { css, createGlobalStyle } from 'styled-components/macro'
import { QueryNavLink } from '../../../helpers/QueryNavLink'


const FancyList = styled.ul`
  border: 1px solid lightblue;
  border-radius: 5px;
`
const FancyItem = styled.li`
  font-family: sans-serif;
  margin: 5px 0;
`


interface Props {
    cards: Card[]
    remove: (card: Card) => void
}

const Container = styled.div`
  background: rgba(70, 47, 156, 0.1) ;
  padding: 10px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
`

export const CardList = ({ cards, remove }: Props) => {

    if (cards.length === 0) {
        return <div>Keine Cards gefunden.</div>
    }

    return (
        <div>
            {cards.map(card => (
                    <FancyList key={card.id}>
                        <FancyItem>
                            <Container>
                                <Label>{card.front}</Label>
                                <Label>{card.back}</Label>
                                <Container>
                                    <QueryNavLink
                                        to={card.id}
                                        key={card.id}
                                    >
                                        <Button onClick={() => null}>Edit</Button>
                                    </QueryNavLink>
                                    <Button onClick={() => remove(card)}>Delete</Button>
                                </Container>
                            </Container>
                        </FancyItem>
                    </FancyList>
            ))}
        </div>
    )
}
