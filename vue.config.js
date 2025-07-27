const { defineConfig } = require('@vue/cli-service')
const { quasar } = require('@quasar/extras')

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  }
}) 