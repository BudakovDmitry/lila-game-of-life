import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { usePlayers } from 'src/components/Players/usePlayers'
import { PlayerType } from 'src/types'

const Players = () => {
  const { allPlayers, changeActivePlayer } = usePlayers()

  return (
    <>
      <ButtonGroup
        size="small"
        sx={{ margin: '10px auto 20px' }}
        variant="text"
        aria-label="text button group"
      >
        {allPlayers.map((player: PlayerType) => (
          <Button
            color={player.active ? 'warning' : 'primary'}
            key={player.id}
            onClick={() => changeActivePlayer(player.id)}
          >
            {player.name}
          </Button>
        ))}
      </ButtonGroup>
    </>
  )
}

export default Players
