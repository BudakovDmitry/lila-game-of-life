import styled from 'styled-components'

export const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 350px;
`

export const Card = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 30px;
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe,
            -15px -15px 30px #ffffff;
    margin: 0 auto;
    position: relative;
`

export const Number = styled.h2`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 70px;
    font-family: 'Unbounded', sans-serif;
`

export const Button = styled.button`
    position: relative;
    width: 70px;
    height: 70px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 1;
    transform: 0.5s;
    color: #000000;
    text-align: center;
    border: none;
    font-size: 18px;
    cursor: pointer;
    margin: 0 auto;
    &:hover {
        color: #ffffff;
    }
    &::before {
        content: '';
        width: 0;
        height: 100%;
        border-radius: 8px;
        position: absolute;
        top: 0;
        left: 0;
        background-image: linear-gradient(to right, #473186 0%, #ffbc00 100%);
        transition: .5s ease;
        display: block;
        opacity: 0.3;
        z-index: -1;
        filter: blur(15px);
    }
    &:hover::before {
        width: 100%;
    }
`