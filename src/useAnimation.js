import { useState } from "react"
import styled, { keyframes } from "styled-components"

const FadeIn = keyframes`
    0%   { opacity: 0; }
    100% { opacity: 1; }
`

const FadeOut = keyframes`
    0%   { opacity: 1; }
    100% { opacity: 0; }
`

const Animation = styled.pre`
    animation-name: ${({anim}) => anim};
    animation-duration: ${({duration}) => duration || "2s"};
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: linear;  
    animation-delay: 0; 
    opacity: 0;
`



const useAnimation = () => {
    const [animation, setAnimation] = useState()

    function startFadeIn() {
        setAnimation(FadeIn)
    }

    function startFadeOut() {
        setAnimation(FadeOut)
    }

    return { Animation, animation, startFadeIn, startFadeOut }
}

export default useAnimation
