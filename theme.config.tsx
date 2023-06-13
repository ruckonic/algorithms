import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <div>ruckonic.dev</div>,
  project: {
    link: 'https://github.com/ruckonic/algorithms',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s | ruckonic.dev',
      defaultTitle: 'ruckonic.dev',
    }
  },
  docsRepositoryBase: 'https://github.com/ruckonic/algorithms',
  logoLink: 'https://ruckonic.dev'
}

export default config
