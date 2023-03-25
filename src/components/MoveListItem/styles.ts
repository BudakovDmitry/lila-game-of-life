import styled from 'styled-components'

export const MoveListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 30px;
`

export const Marker = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #e0e0e0;
    box-shadow: 5px 5px 10px #bebebe,
            -5px -5px 10px #ffffff;
`

export const ItemNumber = styled.p`
    font-weight: 700;
    padding-right: 30px;
    min-width: 50px;
    border-right: 1px solid #8f8f8f;
`

export const ItemText = styled.p`
    font-weight: 700;
`