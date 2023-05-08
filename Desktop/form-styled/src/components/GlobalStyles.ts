import { createGlobalStyle } from "styled-components";
import imgMob from '../assets/images/bg-intro-mobile.png'


const GlobalStyles=createGlobalStyle`
*{
    padding: 0;
    margin:0;
    box-sizing:border-box
}
body{
    width:100%;
    background-image: url(${imgMob});
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.Red}
}
`

export default GlobalStyles