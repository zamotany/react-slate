module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 10,
        },
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
  compact: false,
};
