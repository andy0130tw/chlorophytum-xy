import { defineConfig } from 'tsdown'
import { esmExternalRequirePlugin } from 'rolldown/plugins'
import path from 'node:path'

export default defineConfig({
  entry: 'index.ts',
  target: 'es2020',
  platform: 'browser',
  deps: {
    neverBundle: true,
    // neverBundle: ['util', 'crypto', 'lodash'],
    alwaysBundle: [
      'tslib',
      'typable',
      '@chlorophytum/hint-embox',
      '@chlorophytum/hint-multi-stroke',
      '@chlorophytum/hm-ideograph',
      '@chlorophytum/ideograph-hint-generator-1',
      '@chlorophytum/ideograph-shape-analyzer-1',
    ],
  },
  tsconfig: false,
  alias: {
    '@chlorophytum/hint-embox': path.resolve('packages/hint-embox/src'),
    '@chlorophytum/hint-multi-stroke': path.resolve('packages/hint-multi-stroke/src'),
    '@chlorophytum/hm-ideograph': path.resolve('packages/hm-ideograph/src'),
    '@chlorophytum/ideograph-hint-generator-1': path.resolve('packages/ideograph-hint-generator-1/src'),
    '@chlorophytum/ideograph-shape-analyzer-1': path.resolve('packages/ideograph-shape-analyzer-1/src'),
    '@chlorophytum/hint-programs-stroke-adjust': path.resolve('packages/hint-programs-stroke-adjust/src'),
    '@chlorophytum/ideograph-shape-analyzer-shared': path.resolve('packages/ideograph-shape-analyzer-shared/src'),
  },
  plugins: [
    esmExternalRequirePlugin({
      external: ['util', 'crypto', 'lodash'],
    }),
  ],
  dts: true,
})
