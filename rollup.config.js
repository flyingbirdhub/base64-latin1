import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import workerLoader from 'rollup-plugin-web-worker-loader';

function plugins() {
  return [json(), typescript({
    sourceMap: false,
    useTsconfigDeclarationDir: true,
  }), resolve(), workerLoader({
    targetPlatform: 'browser',
  }), commonjs({
    sourceMap: false,
  })];
}

export default [{
  input: 'src/index.ts',
  output: {
    file: 'dist/index.esm.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: plugins(),
}, {
  input: './dist/types/src/index.d.ts',
  output: [{ file: 'dist/index.d.ts', format: 'esm' }],
  plugins: [dts()],
}];
