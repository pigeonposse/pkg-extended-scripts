/**
 * Validate cmd.
 *
 * @description Validate cli.
 *
 */

import { isObject }  from './utils/object.js'
import { isInteger } from './utils/number.js'
import { not }       from './utils/notifications.js'

const getCurrentCmd = ( args ) => {

	let res, cmdList

	res     = false
	cmdList = Object.entries( args.cmd )

	cmdList.forEach( ( [ key, value ] ) => {

		if ( args.argvArgs.includes( key ) ) res = { key: key, value: value }
	
	} )

	return res

}

export const validateCmd = ( args ) => {
	
	let listCMDs, currentCmd

	if ( args && !isObject( args ) ) {

		not.error( 'Function argument must be an object.' )

		return false
	
	}

	// IF NOT EXIST FILE
	if ( !args.cmd ) {
		
		not.info( 'Does not exist file: ' + args.fileNamesAllowed[0] + '[' + args.extensionsAllowed.join( ', ' ) + ']' )

		return false
	
	}

	if ( args.cmd && !isObject( args.cmd ) ) {

		not.error( 'The value of the "cmd" argument must be an object.' )

		return false
	
	}

	if ( args.argvNum && !isInteger( args.argvNum ) ) {

		not.error( 'The value of the "cmd" argument must be a integer.' )
		
		return false
	
	}

	listCMDs = args.cmd ? Object.keys( args.cmd ).join( '\n' ) : 'Does not exist scripts.'

	if ( args.argvArgs.length == 0 ){

		not.groupInfo( 'This command requires a argument.\nAvailable list:', listCMDs )

		return false
	
	}

	currentCmd = getCurrentCmd( args )

	if ( !currentCmd ) {

		not.groupError( 
			`The argument [${args.argvArgs[0]}] does not exist in the script file.\nAvailable list:`, listCMDs,
		)
		return false
	
	}

	return currentCmd

}

