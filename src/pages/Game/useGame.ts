import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import { usePage } from "src/hooks/usePage"
import { addMove } from 'src/redux/actions'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify';

export const useGame = () => {
    const [viewedList, setViewedList] = useState(false)
    const [cardNumber, setCardNumber] = useState<number>(0)
    const allCards = useSelector((state: any) => state.cards)
    const [isOpenCard, setIsOpenCard] = useState<boolean>(false)
    const isLogged = useSelector((state: any) => state.isLogged)
    const { dispatch, navigate } = usePage()
    const allPlayers = useSelector((state: any) => state.players)
    const [viewedForm, setViewedForm] = useState<boolean>(false)

    const toggleViewList = () => setViewedList(prev => !prev)

    const handleViewCard = (card) => {
        allCards.map(item => {
            if((item.id + 1) === Number(card.cardNumber)) {
                setCardNumber(Number(card.cardNumber))
                dispatch(addMove({
                    id: nanoid(),
                    fieldNumber: item.id + 1,
                    fieldName: item.title
                }))
            }
        })

        setIsOpenCard(true)
    }

    const openForm = () => {
        setViewedForm(true)
    }

    const closeForm = () => {
        setViewedForm(false)
    }

    const closeCard = () => {
        closeForm();
        setIsOpenCard(false);
    }

    useEffect(() => {
        if (!isLogged) {
            navigate('/');
            toast.error('Потрібно залогінитись!')
        }

        window.onbeforeunload = () => true;
    }, [])

    return {
        viewedList,
        toggleViewList,
        handleViewCard,
        cardNumber,
        isOpenCard,
        closeCard,
        allPlayers,
        viewedForm,
        setViewedForm,
        openForm
    }
}