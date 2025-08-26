/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const { withRozenite } = require('@rozenite/metro');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

module.exports = withRozenite(wrapWithReanimatedMetroConfig(
  withNativeWind(
    mergeConfig(defaultConfig, {
      transformer: {
        getTransformOptions: async () => ({
          transform: {
            experimentalImportSupport: false,
            inlineRequires: true,
          },
        }),
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
      },
      resolver: {
        assetExts: assetExts.filter(ext => ext !== 'svg'),
        sourceExts: [
          ...sourceExts,
          'js',
          'json',
          'ts',
          'tsx',
          'cjs',
          'svg',
          'css',
        ],
        alias: {
          '@': './src',
        },
      },
    }),
    {
      input: './src/styles/global.css',
      inlineRem: 16,
    },
  ),
));