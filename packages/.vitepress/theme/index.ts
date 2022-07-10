import DefaultTheme from 'vitepress/theme'
import { handleRedirects } from './redirects'

import './styles/code.css'
import './styles/demo.css'
import './styles/utils.css'
import 'uno.css'
import './styles/overrides.css'

const theme: any = {
  ...DefaultTheme,
  enhanceApp(ctx: any) {
    if (typeof window !== 'undefined')
      handleRedirects(ctx.router)
  },
}

export default theme
