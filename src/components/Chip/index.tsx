import Draggable from 'react-draggable'
import * as Styled from 'src/components/Chip/styles'
const ChipImage = require('src/images/location.png')

const Chip = () => {
  return (
    <Draggable>
      <Styled.Chip>
        <Styled.ChipImage src={ChipImage} draggable="false" />
      </Styled.Chip>
    </Draggable>
  )
}

export default Chip
