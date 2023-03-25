import { useSelector } from "react-redux"

export const useMoveList = () => {
    const allMoves = useSelector((state: any) => state.allMoves)

    return {
        allMoves
    }
}