import styled from 'styled-components'

export const CardBackground = styled.div`
    position: relative;
    width: 380px;
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    z-index: 1;
    margin: 0 auto;

    &::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 75px;
        width: 60%;
        height: 100%;
        text-decoration: none;
        background: #fff;
        border-radius: 8px;
        transform: skewX(15deg);
        transition: 0.5s;
       }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 75px;
        width: 60%;
        height: 100%;
        background: #fff;
        border-radius: 8px;
        transform: skewX(15deg);
        transition: 0.5s;
        filter: blur(30px);
       }
    &:hover::before {
        transform: skewX(0deg) scaleX(1.3);
    }
    &:hover::after {
        transform: skewX(0deg) scaleX(1.3);
    }
    &:before {
        background: linear-gradient(315deg, #ffbc00, #473186)
    }
    &:after {
        background: linear-gradient(315deg, #ffbc00, #473186)
    }
`

// export const Card = styled.div`
//     position: relative;
//     width: 380px;
//     height: 450px;
//     padding: 20px 40px;
//     background: rgba(255, 255, 255, 0.05);
//     backdrop-filter: blur(10px);
//     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//     border-radius: 8px;
//     z-index: 1;
//     transform: 0.5s;
//     color: #fff;
//     text-align: center;
// `

export const CardTitle = styled.h2`
    margin-bottom: 20px;
    font-family: 'Unbounded', sans-serif;
`

export const CardDescription = styled.p`
    font-size: 14px;
`

export const CloseCardButton = styled.button`
    height: 80px;
`


export const CardContainer = styled.div`
    max-width: 300px;
`

export const Card = styled.img`
    max-width: 300px;
    box-shadow: 0px 5px 25px 0px rgba(0,0,0,0.75);
`