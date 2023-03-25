import { useEffect, useState } from "react"
import { getRandomNumber } from 'src/helpers'

export const useDice = () => {
    const [diceNumber, setDiceNumber] = useState<number | null>(null)
    const [viewedForm, setViewedForm] = useState<boolean>(false)

    const getNumber = () => {
        diceNumber && setDiceNumber(null)
        setTimeout(() => {
            setDiceNumber(getRandomNumber(1, 7))
            getForm()
        }, 1000)
    }

    const getForm = () => {
        setViewedForm(true)
    }

    return {
        diceNumber,
        getNumber,
        viewedForm
    }
}