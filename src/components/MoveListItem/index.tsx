import * as Styled from 'src/components/MoveListItem/styles'

type MoveListItemProps = {
  fieldNumber: number
  fieldName: string
}

const MoveListItem = ({ fieldNumber, fieldName }: MoveListItemProps) => {
  return (
    <Styled.MoveListItem>
      <Styled.Marker></Styled.Marker>
      <Styled.ItemNumber>{fieldNumber}</Styled.ItemNumber>
      <Styled.ItemText>{fieldName}</Styled.ItemText>
    </Styled.MoveListItem>
  )
}

export default MoveListItem
