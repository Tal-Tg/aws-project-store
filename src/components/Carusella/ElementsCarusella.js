import styled from 'styled-components'



export const CarusellaContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;

`

export const CarusellaWrapper = styled.div`
display: flex;
width: 100%;
position: relative;

`

export const CarusellaContentWrapper = styled.div`
overflow: hidden;
width: 100%;
height: 100%;

`

export const CarusellaContent = styled.div`
display: flex;
transition: all 250ms linear;
scrollbar-width: none;  
`

export const LeftArrow = styled.button`
position: absolute;
z-index: 1;
top: 50%;
transform: translateY(-50%);
width: 48px;
height: 48px;
border-radius: 24px;
background-color: white;
border: 1px solid #ddd;
left:24px;
top:190px;
`

export const RightArrow = styled.button`
right:24px;
position: absolute;
z-index: 1;
top: 50%;
transform: translateY(-50%);
width: 48px;
height: 48px;
border-radius: 24px;
background-color: white;
border: 1px solid #ddd;
top:190px;
`