import { createGlobalStyle } from 'styled-components'


const GlobalStyles=createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
}
 body{
    background-color:${props=>props.theme.colors.Background}
 }
`
export default GlobalStyles