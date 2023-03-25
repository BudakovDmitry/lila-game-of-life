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