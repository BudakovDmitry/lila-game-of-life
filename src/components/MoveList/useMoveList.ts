import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { MoveType, PlayerType } from "src/types"

export const useMoveList = () => {
    const allMoves = useSelector((state: any) => state.allMoves)
    const players = useSelector((state: any) => state.players)
    const [moves, setMoves] = useState<MoveType[]>({} as MoveType[])

    const updateMoves = () => {
        players.map((player: PlayerType) => {
            if (player.active) {
                setMoves(player.moveList)
            }
        })
    }

    useEffect(() => {
        updateMoves()
    }, [players])

    return {
        allMoves,
        moves
    }
}