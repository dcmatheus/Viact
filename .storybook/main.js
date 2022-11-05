const { join, resolve } = require('path')
const WindiCSS = require('vite-plugin-windicss').default

module.exports = {
  async viteFinal(config) {
    config.plugins = config.plugins ?? []
    config.plugins.push([
      WindiCSS({
        config: join(__dirname, '..', 'windi.config.ts')
      })
    ])
    return config
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  }
}
