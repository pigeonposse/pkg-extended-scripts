import color         from '@clippium/color'
import { formatter } from '@clippium/preset-colored'
import {
	type ClippiumConfig,
	defineData,
} from 'clippium'

import {
	name,
	version,
	extra,
	description,
} from '../package.json'

const desc       = color.white.dim
const errorStyle = color.redBright

export const PES_FILENAME = 'pes.config' as const
export const pkgName = name
export { version }

export const data = defineData( {
	name        : extra.id,
	version,
	desc        : description,
	positionals : { key : {
		type : 'string',
		desc : 'Script key for execute',
	} },
	flags : {
		help : {
			alias : [ 'h' ],
			type  : 'boolean',
			group : 'General:',
			desc  : 'Show help',
		},
		version : {
			alias : [ 'v' ],
			type  : 'boolean',
			group : 'General:',
			desc  : 'Show version',
		},
		input : {
			alias : [ 'i' ],
			type  : 'string',
			desc  : 'Custom Input directory for pes.config.{js,cjs,mjs,cjs,ts,mts}',
		},
		debug : {
			type  : 'boolean',
			group : 'General:',
			desc  : 'Debug mode',
		},
	},
} )

export const config: ClippiumConfig =  {
	help : { formatter : formatter( {
		title         : color.cyan.inverse.bold,
		bin           : color.cyan,
		version       : color.cyan.dim.italic,
		name          : color.bold,
		positionals   : color.green.dim,
		commands      : color.green,
		flags         : color.yellow,
		desc,
		examples      : color.cyan,
		sectionTitle  : color.white.bold.underline,
		sectionDesc   : desc,
		sectionsProps : desc.italic,
	} ) },
	error : { on: ( { error } ) => console.error( errorStyle( error.message ) ) },
}
