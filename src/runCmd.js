/**
 * Run cmd.
 *
 * @description For execute cli.
 *
 */

import { childProcess } from './utils/childProcess.js'
import { not }          from './utils/notifications.js'
import { validateCmd }  from './validateCmd.js'
import { getFileData }  from './getFileData.js'

export const runCmd = ( args = {} ) => {

	let processArgs

	args.cmd    = getFileData( args.fileNamesAllowed, args.extensionsAllowed )
	processArgs = validateCmd( args )

	if ( !processArgs ) return false

	not.info( `Script [${processArgs.key}] executes [${processArgs.value}] and returns:` )
	childProcess( processArgs.value )

}

