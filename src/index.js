/**
 * Run function.
 *
 * @description Set run function and export.
 *
 */

import { getFileData } from './getFile.js'
import { runCmd }  	   from './runCmd.js'

export const run = () => {

	return runCmd( {
		cmd : getFileData( 
			'package.scripts',
			[ 
				'.yaml', 
				'.yml', 
				'.js', 
				'.json', 
			],
		),
	} )

}
