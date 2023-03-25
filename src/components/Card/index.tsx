import * as Styled from 'src/components/Card/styles'
import { CardType } from 'src/types'

type CardProps = {
  card: CardType
}

const Card = ({ card }: CardProps) => {
  return (
    <>
      <Styled.CardBackground>
        <Styled.Card>
          <Styled.CardTitle>{card.title}</Styled.CardTitle>
          <Styled.CardDescription>{card.description}</Styled.CardDescription>
        </Styled.Card>
      </Styled.CardBackground>
    </>
  )
}

export default Card
