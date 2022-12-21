/**
 * Run cmd.
 *
 * @description For execute cli.
 *
 */

import { childProcess } from './utils/childProcess.js'
import { isObject }     from './utils/object.js'
import { isInteger }    from './utils/number.js'
import { not }          from './utils/notifications.js'

const validatechildProcess = ( args ) => {

	args.res = true

	if ( args && !isObject( args ) ) {

		args.res = false
		not.error( 'Function argument must be an object' )
	
	}

	if ( !args.cmd ) {
		
		args.res = false 
		not.error( 'The value of the "cmd" argument must exist' )
	
	}

	if ( args.cmd && !isObject( args.cmd ) ) {

		args.res = false 
		not.error( 'The value of the "cmd" argument must be an object' )
	
	}

	if ( args.argvNum && !isInteger( args.argvNum ) ) {

		args.res = false 
		not.error( 'The value of the "cmd" argument must be a integer' )
	
	}

	if ( !args.argvNum ) args.argvNum = 2

	if ( !process.argv[args.argvNum] ){

		args.res = false
		not.warn( 'This command requires one argument' )
	
	}

	return args

}

const currentCmd = ( args, argv ) => {

	let res

	res = false

	Object.entries( args.cmd ).forEach( ( [ key, value ] ) => {

		if ( argv === key ) res = { key: key, value: value }
	
	} )

	return res

}

export const runCmd = ( args = {} ) => {

	let res, argv

	args = validatechildProcess( args )
	argv = process.argv[args.argvNum]

	if ( !args.res ) return false

	res = currentCmd( args, argv )
	
	if ( !res ) return not.error( `The argument [${argv}] does not exist in the script file` )

	not.info( `Script [${res.key}] executes [${res.value}] and returns:` )
	childProcess( res.key, res.value )

}
