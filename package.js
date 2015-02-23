Package.describe({
  name: 'boxxxie:babel',
  summary: 'Turn ES6+ code into vanilla ES5 so you can use next generation features in Meteor',
  version: '1.0.0',
  git: 'https://github.com/boxxxie/meteor-6to5.git'
});

Package.registerBuildPlugin({
  name: 'compile6to5',
  use: [],
  sources: [
    'plugin/compile-6to5.js'
  ],
  npmDependencies: {'babel':'4.4.5'}
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('sharlon:6to5.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('boxxxie:babel');
  api.addFiles('sharlon:6to5-tests.js');
});
