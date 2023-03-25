import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import { usePage } from "src/hooks/usePage"
import { addMove } from 'src/redux/actions'
import { nanoid } from 'nanoid'
import { CardType } from "src/types"
import { toast } from 'react-toastify';

export const useGame = () => {
    const [viewedList, setViewedList] = useState(false)
    const [card, setCard] = useState({} as CardType)
    const allCards = useSelector((state: any) => state.cards)
    const [isOpenCard, setIsOpenCard] = useState<boolean>(false)
    const isLogged = useSelector((state: any) => state.isLogged)
    const { dispatch, navigate } = usePage()

    const toggleViewList = () => setViewedList(prev => !prev)

    const handleViewCard = (card) => {
        allCards.map(item => {
            if((item.id + 1) === Number(card.cardNumber)) {
                setCard(item)
                dispatch(addMove({
                    id: nanoid(),
                    fieldNumber: item.id + 1,
                    fieldName: item.title
                }))
            }
        })

        setIsOpenCard(true)
    }

    const closeCard = () => setIsOpenCard(false);

    useEffect(() => {
        if (!isLogged) {
            navigate('/');
            toast.error('Потрібно залогінитись!')
        }
    }, [])

    return {
        viewedList,
        toggleViewList,
        handleViewCard,
        card,
        isOpenCard,
        closeCard
    }
}