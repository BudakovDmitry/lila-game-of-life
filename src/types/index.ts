export type CardType = {
    id: number
    title: string
}

export type MoveType = {
    id: number
    fieldNumber: number
    fieldName: string
}

export type PlayerType = {
    id: number
    name: string
    moveList: MoveType[]
    active: boolean
}
