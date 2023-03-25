import styled, { keyframes } from 'styled-components'
import {LoaderItemType} from 'src/components/Loader/types'

const keyframe = keyframes`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
`

export const LoaderGrid = styled.div`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
`

export const LoaderItem = styled.div<LoaderItemType>`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #000000;
    animation: ${keyframe} 1.2s linear infinite;
    top: ${props => props.positionTop}px;
    left: ${props => props.positionLeft}px;
    animation-delay: ${props => props.animationDelay}s;
`
