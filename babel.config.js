module.exports = function (api) {
  const presets = [
    '@babel/typescript',
    [
      '@babel/env',
      {
        'targets': {
          'node': 'current'
        }
      }
    ]
  ]
  const plugins = [
    ['module-resolver', {
      'root': ['.'],
      'alias': {
        'src/': './src',
        'jest/': './jest'
      },
      'extensions': ['.ts']
    }]
  ]
  const ignore = api.env('test')
  ? []
  : [
    /(__tests__.*|(\.|)(test|spec))\.[jt]sx?$/,
    /templates/
  ]

  return {
    presets,
    plugins,
    ignore
  }
}
