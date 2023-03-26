import { useSelector } from "react-redux"
import { usePage } from "src/hooks/usePage"
import { updateActivePlayer } from 'src/redux/actions'

export const usePlayers = () => {
    const allPlayers = useSelector((state: any) => state.players)
    const { dispatch } = usePage()
    console.log(allPlayers)

    const changeActivePlayer = (playerId: number) => {
        dispatch(updateActivePlayer(playerId))
    }

    return {
        allPlayers,
        changeActivePlayer
    }
}