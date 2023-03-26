import Draggable from 'react-draggable'
import * as Styled from 'src/components/Chip/styles'

type ChipProps = {
  color: string
  bottom: number
}

const Chip = ({ color, bottom }: ChipProps) => {
  const ChipImage = require(`src/images/location-${color}.png`)

  return (
    <Draggable>
      <Styled.Chip bottom={`${bottom}px`}>
        <Styled.ChipImage src={ChipImage} draggable="false" />
      </Styled.Chip>
    </Draggable>
  )
}

export default Chip
