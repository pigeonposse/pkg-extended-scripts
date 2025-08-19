import { defineConfig } from 'binarium'

import pkg from './package.json' with { type: 'json' }

export default defineConfig( {
	input       : './src/binarium.ts',
	name        : pkg.extra.id,
	nodeOptions : { esbuild : {
		noDefaultPlugins : true,
		treeShaking      : false,
	} },
	// nodeOptions : { esbuild: { plugins: false } },
} )
