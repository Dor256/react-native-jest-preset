const reactNativePreset = require('react-native/jest-preset');

module.exports = Object.assign({}, reactNativePreset, {
  setupFiles: [require.resolve('./save-promise')]
    .concat(reactNativePreset.setupFiles)
    .concat([require.resolve('./restore-promise')])
});
