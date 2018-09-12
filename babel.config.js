module.exports = api => {
  api.cache(false);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          'targets': {
            'node': 6
          }
        }
      ],
      '@babel/preset-flow',
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      ['@babel/plugin-proposal-class-properties', { 'loose': false }],
      ['@babel/plugin-proposal-optional-chaining', { 'loose': false }],
      ['@babel/plugin-proposal-pipeline-operator', { 'proposal': 'minimal' }],
      ['@babel/plugin-proposal-nullish-coalescing-operator', { 'loose': false }],
      '@babel/plugin-proposal-do-expressions',
      '@babel/plugin-proposal-throw-expressions'
    ],
    sourceMaps: 'inline'
  }
}
