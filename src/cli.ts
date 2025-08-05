import { Clippium } from 'clippium'

import {
	config,
	data,
} from './data'
import { getConfig } from './index'

const cli = new Clippium( data, config )

cli.fn = async data => {

	const d = cli.validate( data )
	if ( d.flags.help ) {

		console.log( data.utils.getHelp() )
		return

	}
	else if ( d.flags.version ) {

		console.log( data.utils.getVersion() )
		return

	}

	const config = await getConfig( d.flags.input )
	const key    = d.positionals.key || d.commands ? Object.keys( d.commands )[0] : undefined
	if ( !config ) throw new Error( 'pes.config.{js,cjs,mjs,cjs,ts,mts} file not found' )

	if ( !key ) throw new Error( 'Script key not found' )
	if ( key in config ) await config[key]()
	else throw new Error( `Script "${data.positionals.key}" not found` )

}

export default cli
