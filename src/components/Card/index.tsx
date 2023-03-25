import * as Styled from 'src/components/Card/styles'
import { CardType } from 'src/types'

type CardProps = {
  cardNumber: number
}

const Card = ({ cardNumber }: CardProps) => {
  const Image = require(`src/images/cards/card-${cardNumber}.jpg`)

  return (
    <>
      <Styled.CardContainer>
        <Styled.Card src={Image} />
      </Styled.CardContainer>
    </>
  )
}

export default Card
