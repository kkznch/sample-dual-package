import * as esbuild from 'esbuild';

/** @type {esbuild.BuildOptions} */
await esbuild.build({
  entryPoints: ['./index.js'],
  outfile: './dist/cjs/index.js',
  platform: 'node',
  format: 'cjs',
});
