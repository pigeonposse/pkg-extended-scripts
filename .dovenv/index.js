import { defineConfig } from '@dovenv/core'
import {
	pigeonposseTheme,
	getWorkspaceConfig,
} from '@dovenv/theme-pigeonposse'

const core =  await getWorkspaceConfig( {
	metaURL  : import.meta.url,
	path     : '../',
	corePath : './',
} )

export default defineConfig(
	pigeonposseTheme( {
		core,
		repo : { commit : { scopes : [
			{ value: 'core' },
			{ value: 'env' },
			{ value: 'package' },
			{ value: 'all' },
		] } },
		lint : {
			staged  : { '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,json}': 'dovenv lint eslint' },
			publint : { pkg: { pkgDir: core.coreDir } },
		},
	} ),
)
