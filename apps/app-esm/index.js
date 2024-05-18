import { say as sayFromEsm } from 'package-esm';
import { say as sayFromDual } from 'package-dual';

console.log('This is app-esm!');
sayFromEsm();
sayFromDual();
