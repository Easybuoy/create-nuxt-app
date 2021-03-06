module.exports = [
  {
    name: 'name',
    message: 'Project name:',
    default: '{outFolder}'
  },
  {
    name: 'language',
    message: 'Programming language:',
    choices: [
      { name: 'JavaScript', value: 'js' },
      { name: 'TypeScript', value: 'ts' }
    ],
    type: 'list',
    default: 'js'
  },
  {
    name: 'pm',
    message: 'Package manager:',
    choices: [
      { name: 'Yarn', value: 'yarn' },
      { name: 'Npm', value: 'npm' }
    ],
    type: 'list',
    default: 'yarn'
  },
  {
    name: 'ui',
    message: 'UI framework:',
    type: 'list',
    pageSize: 15,
    choices: [
      { name: 'None', value: 'none' },
      { name: 'Ant Design Vue', value: 'ant-design-vue' },
      { name: 'Bootstrap Vue', value: 'bootstrap' },
      { name: 'Buefy', value: 'buefy' },
      { name: 'Bulma', value: 'bulma' },
      { name: 'Element', value: 'element-ui' },
      { name: 'Framevuerk', value: 'framevuerk' },
      { name: 'iView', value: 'iview' },
      { name: 'Tachyons', value: 'tachyons' },
      { name: 'Tailwind CSS', value: 'tailwind' },
      { name: 'Vuesax', value: 'vuesax' },
      { name: 'Vuetify.js', value: 'vuetify' }
    ],
    default: 'none'
  },
  {
    name: 'features',
    message: 'Nuxt.js modules:',
    type: 'checkbox',
    pageSize: 10,
    choices: [
      { name: 'Axios', value: 'axios' },
      { name: 'Progressive Web App (PWA)', value: 'pwa' },
      { name: 'Content', value: 'content' }
    ],
    default: []
  },
  {
    name: 'linter',
    message: 'Linting tools:',
    type: 'checkbox',
    pageSize: 10,
    choices: [
      { name: 'ESLint', value: 'eslint' },
      { name: 'Prettier', value: 'prettier' },
      { name: 'Lint staged files', value: 'lintStaged' },
      { name: 'StyleLint', value: 'stylelint' }
    ],
    default: []
  },
  {
    name: 'test',
    message: 'Testing framework:',
    type: 'list',
    choices: [
      { name: 'None', value: 'none' },
      { name: 'Jest', value: 'jest' },
      { name: 'AVA', value: 'ava' },
      { name: 'WebdriverIO', value: 'webdriverio' }
    ],
    default: 'none'
  },
  {
    name: 'mode',
    message: 'Rendering mode:',
    type: 'list',
    choices: [
      { name: 'Universal (SSR / SSG)', value: 'universal' },
      { name: 'Single Page App', value: 'spa' }
    ],
    default: 'universal'
  },
  {
    name: 'target',
    message: 'Deployment target:',
    type: 'list',
    choices: [
      { name: 'Server (Node.js hosting)', value: 'server' },
      { name: 'Static (Static/JAMStack hosting)', value: 'static' }
    ],
    default: 'server'
  },
  {
    name: 'devTools',
    message: 'Development tools:',
    type: 'checkbox',
    choices: [
      { name: 'jsconfig.json (Recommended for VS Code if you\'re not using typescript)', value: 'jsconfig.json' },
      { name: 'Semantic Pull Requests', value: 'semantic-pull-requests' }
    ],
    default: []
  }
]
