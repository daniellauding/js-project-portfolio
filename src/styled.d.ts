// TypeScript declaration for styled-components theme
// This tells TypeScript what props.theme looks like!

import 'styled-components'
import type { Theme } from './theme/theme'

// Extend styled-components DefaultTheme with our theme
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
