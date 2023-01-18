
/**
 * Bundle config.
 *
 * @description Bundle config: esbuild.config.js.
 *
 */

import esbuild from 'esbuild'
	
const buildEsm = {
	entryPoints : [ 'src/main.js' ],
	bundle      : true,
	minify      : true,
	platform    : 'node',
	outfile     : 'dist/bundle.js',
	format      : 'esm',
}

esbuild
	.build( buildEsm )
	.catch( () => process.exit( 1 ) )
