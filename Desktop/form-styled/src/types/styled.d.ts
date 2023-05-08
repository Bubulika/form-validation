import 'styled-components'
import { Theme } from '../thems/DefaultThem'

declare module 'styled-components'{
    export interface DefaultTheme extends Theme{}
}