import { SelectChangeEvent } from '@mui/material/Select'
import { useEffect, useState } from "react"
import { PlayerType, MoveType } from 'src/types'
import { usePage } from "src/hooks/usePage"
import { addPlayers } from 'src/redux/actions'

export const useModal = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [numberPlayers, setNumberPlayers] = useState<string>('');
    const [errorSelect, setErrorSelect] = useState<boolean>(false);
    const [viewedNamesForm, setViewedNamesForm] = useState<boolean>(false);
    const { dispatch } = usePage()

    const handleChangePlayers = (event: SelectChangeEvent) => {
        setNumberPlayers(event.target.value as string);

        setViewedNamesForm(true)
    };

    const getPlayersArrayNumber = (): number[] => {
        let arrayPlayers = [] as number[];
        for(let i = 1; i <= Number(numberPlayers); i++) {
            arrayPlayers.push(i)
        }

        return arrayPlayers;
    }

    const getPlayers = (players) => {
        const allPlayers = [] as PlayerType[];

        for (let player in players) {
            allPlayers.push({
                id: Number(player),
                name: players[player],
                moveList: [] as MoveType[],
                active: Number(player) === 1
            })
        }

        dispatch(addPlayers(allPlayers))

        handleCloseModal()
    }
    
    const handleCloseModal = (reson = '') => {
        if (reson !== 'backdropClick' && numberPlayers) {
            setOpenModal(false);
        }

        if (reson === 'backdropClick' || !numberPlayers) {
            setErrorSelect(true)
        }
    };

    useEffect(() => {
        setOpenModal(true);
    }, [])
    
    return {
        openModal,
        handleChangePlayers,
        handleCloseModal,
        numberPlayers,
        errorSelect,
        viewedNamesForm,
        getPlayersArrayNumber,
        getPlayers
    }
}