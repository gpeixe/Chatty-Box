module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@components': './src/components',
          '@services': './src/services',
          '@library': './src/library',
          '@hooks': './src/hooks',
          '@configs': './src/configs',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@pages': './src/pages',
          '@api': './src/api',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
