import * as esbuild from 'esbuild'
import * as path from 'node:path'

await esbuild.build({
  bundle: true,
  minify: false,
  format: 'esm',
  target: 'esnext',

  alias: {
    '@chlorophytum/hint-embox': path.resolve('packages/hint-embox/src'),
    '@chlorophytum/hint-multi-stroke': path.resolve('packages/hint-multi-stroke/src'),
    '@chlorophytum/hm-ideograph': path.resolve('packages/hm-ideograph/src'),
    '@chlorophytum/ideograph-hint-generator-1': path.resolve('packages/ideograph-hint-generator-1/src'),
    '@chlorophytum/ideograph-shape-analyzer-1': path.resolve('packages/ideograph-shape-analyzer-1/src'),
    '@chlorophytum/hint-programs-stroke-adjust': path.resolve('packages/hint-programs-stroke-adjust/src'),
    '@chlorophytum/ideograph-shape-analyzer-shared': path.resolve('packages/ideograph-shape-analyzer-shared/src'),
  },

  external: ['util', 'crypto', 'lodash', '@chlorophytum/*'],
  entryPoints: ['index.ts'],
  outdir: 'dist',
})
