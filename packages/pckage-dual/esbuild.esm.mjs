import * as esbuild from 'esbuild';

/** @type {esbuild.BuildOptions} */
await esbuild.build({
  entryPoints: ['./index.js'],
  outfile: './dist/esm/index.js',
  platform: 'node',
  format: 'esm',
});
