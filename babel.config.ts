module.exports = {
  /*
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  */
presets: [
  '@babel/preset-env',
  '@babel/preset-react',
  '@babel/preset-typescript'
],
plugins: [
  "@babel/plugin-transform-modules-commonjs"
]

 //npx cross-env BABEL_SHOW_CONFIG_FOR=C:\Users\wotbl\search-rs\src\components\List\list.test.tsx npm run build
  }
 