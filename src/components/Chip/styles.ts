import styled from 'styled-components'
import { ChipPropsType } from 'src/components/Chip/types'

export const Chip = styled.div<ChipPropsType>`
    width: 64px;
    height: 64px;
    position: absolute;
    bottom: ${props => props.bottom ? props.bottom : '100px'};
    right: 20px;
`

export const ChipImage = styled.img``