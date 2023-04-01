import { useDice } from 'src/components/Dice/useDice'
import * as Styled from 'src/components/Dice/styles'
import Loader from 'src/components/Loader'
import Form from 'src/components/Form'

type DiceProps = {
  handleViewCard: (card: any) => void
  viewedForm: boolean
  setViewedForm: () => void
}

const Dice = ({ handleViewCard, viewedForm, setViewedForm }: DiceProps) => {
  const { diceNumber, getNumber } = useDice({ setViewedForm })

  return (
    <Styled.DiceContainer>
      <Styled.Card>
        {diceNumber ? <Styled.Number>{diceNumber}</Styled.Number> : <Loader />}
      </Styled.Card>
      <Styled.Button onClick={getNumber}>Кидай</Styled.Button>
      <Form viewed={viewedForm} handleViewCard={handleViewCard} />
    </Styled.DiceContainer>
  )
}

export default Dice
