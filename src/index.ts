
import { PES_FILENAME } from './data'
import {

	joinPath,
	findAndImport,
} from './sys'

// type Options = {
// 	/**
// 	 * The input directory of pes.config.{js,cjs,mjs,cjs,ts,mts}
// 	 */
// 	input? : string
// 	/**
// 	 * Debug mode
// 	 *
// 	 * @default false
// 	 */
// 	debug? : boolean
// }

export type Config = { [key: string]: () => void | Promise<void> }

export const defineConfig = <C extends Config>( config: C ) => config

export const getConfig = async ( input?: string ): Promise<Config | undefined> => {

	input = input || './'

	const paths = await Promise.all( [
		'js',
		'cjs',
		'mjs',
		'ts',
		'cts',
		'mts',
	].map( async ext => await joinPath( input, `/${PES_FILENAME}.${ext}` ) ) )

	return await findAndImport<Config>( paths )

}

// export const run = async ( opts?: Options ) => {

// 	const data = await getConfig( opts?.input )
// 	if ( opts?.debug ) console.log( {
// 		input,
// 		paths,
// 	} )
// 	console.log( data )

// }

