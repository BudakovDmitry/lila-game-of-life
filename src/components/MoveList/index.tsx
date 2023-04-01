import MoveListItem from 'src/components/MoveListItem'
import * as Styled from 'src/components/MoveList/styles'
import { useMoveList } from 'src/components/MoveList/useMoveList'
import { MoveType } from 'src/types'

const MoveList = () => {
  const { moves } = useMoveList()

  return (
    <Styled.MoveList>
      {moves.length ? (
        <>
          <Styled.ListTitle>Путь</Styled.ListTitle>
          <Styled.ListContainer>
            {moves.map((move: MoveType) => {
              return (
                <MoveListItem
                  key={move.id}
                  fieldNumber={move.fieldNumber}
                  fieldName={move.fieldName}
                />
              )
            })}
          </Styled.ListContainer>
        </>
      ) : (
        <Styled.HelpText>
          Извините, но вы еще не начали свой путь!
        </Styled.HelpText>
      )}
    </Styled.MoveList>
  )
}

export default MoveList
