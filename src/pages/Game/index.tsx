import Dice from 'src/components/Dice'
import * as Styled from 'src/pages/Game/styles'
import Card from 'src/components/Card'
import Field from 'src/components/Field'
import MoveList from 'src/components/MoveList'
import Chip from 'src/components/Chip'
import Modal from 'src/components/Modal'
import Players from 'src/components/Players'
import { useGame } from 'src/pages/Game/useGame'
import { PlayerType } from 'src/types'

const colors = {
  1: 'yellow',
  2: 'blue',
  3: 'red',
  4: 'green',
}

const Game = () => {
  const {
    viewedList,
    toggleViewList,
    handleViewCard,
    isOpenCard,
    cardNumber,
    closeCard,
    allPlayers,
    viewedForm,
    openForm,
  } = useGame()

  return (
    <Styled.AppContainer>
      <Field />
      <Styled.RightField>
        <Players />
        {allPlayers.map((player: PlayerType) => {
          return (
            <Chip
              key={player.id}
              color={colors[player.id]}
              bottom={30 + player.id * 70}
            />
          )
        })}
        {viewedList ? (
          <MoveList />
        ) : isOpenCard ? (
          <Card cardNumber={cardNumber} />
        ) : (
          <Dice
            handleViewCard={handleViewCard}
            viewedForm={viewedForm}
            setViewedForm={openForm}
          />
        )}
        <Styled.ContainerButtons>
          <Styled.ButtonCloseCard
            isShow={isOpenCard && !viewedList}
            onClick={closeCard}
          >
            Закрыть
          </Styled.ButtonCloseCard>
          <Styled.ButtonCard onClick={openForm}>
            Дополнительная карта
          </Styled.ButtonCard>
          <Styled.Button viewedList={viewedList} onClick={toggleViewList}>
            Путь
          </Styled.Button>
        </Styled.ContainerButtons>
      </Styled.RightField>
      <Modal />
    </Styled.AppContainer>
  )
}

export default Game
