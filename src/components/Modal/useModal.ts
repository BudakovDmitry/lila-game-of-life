import { SelectChangeEvent } from '@mui/material/Select'
import { useEffect, useState } from "react"

export const useModal = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [numberPlayers, setNumberPlayers] = useState<string>('');
    const [errorSelect, setErrorSelect] = useState<boolean>(false)

    const handleChangePlayers = (event: SelectChangeEvent) => {
        setNumberPlayers(event.target.value as string);
    };

    
    const handleCloseModal = (event, reson = '') => {
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
        errorSelect
    }
}