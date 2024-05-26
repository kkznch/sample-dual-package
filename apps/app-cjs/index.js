const packageCjs = require('package-cjs');
const packageDual = require('package-dual');

console.log('This is app-cjs!');
packageCjs.say();
packageDual.say();

(async () => {
  const packageEsm = await import('package-esm');
  packageEsm.say();
})();
