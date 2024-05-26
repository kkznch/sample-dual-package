import { say as sayFromEsm } from 'package-esm';
import { say as sayFromCjs } from 'package-cjs';
import { say as sayFromDual } from 'package-dual';

console.log('This is app-esm!');
sayFromEsm();
sayFromCjs();
sayFromDual();
