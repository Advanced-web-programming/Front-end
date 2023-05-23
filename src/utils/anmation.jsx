import styled, { keyframes } from "styled-components"

export const rotate_image = keyframes`
  0% {
    transform: translateY(40px); 
    opacity: 0; 
  }
  100% {
    transform: translateY(0px);   
    opacity: 1; 
  }
`

export const appear = keyframes`
  0% {
    height: 90%;
    opacity: 08
  }
  100% {
    height: 100%;
    opacity: 1;
  }
`

export const appear_description = keyframes`
  0% {
    transform: translateY(20px); 
    opacity: 0; 
  }
  100% {
    transform: translateY(0px);   
    opacity: 1; 
  }
`