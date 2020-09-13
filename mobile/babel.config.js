const prodPlugin = []
if(process.env.NODE_ENV === 'production') {
  prodPlugin.push('transform-remove-console')
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ...prodPlugin
  ]
}
