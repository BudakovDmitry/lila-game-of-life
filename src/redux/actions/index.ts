export const addPlayers = players => {
  return {
    type: 'ADD_PLAYERS',
    payload: players,
  }
}

export const addMove = move => {
    return {
      type: 'ADD_MOVE',
      payload: move,
    }
  }

export const login = value => {
  return {
    type: 'LOGIN',
    payload: value,
  }
}

export const updateActivePlayer = (playerId: number) => {
  return {
    type: 'UPDATE_ACTIVE_PLAYER',
    payload: playerId,
  }
}