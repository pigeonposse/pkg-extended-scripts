/**
 * Child_process.
 *
 * @description For execute command.
 *
 */
import { spawnSync } from 'child_process'

export const childProcess = ( value ) => {

	spawnSync( 
		value, 
		{
			shell : true,
			stdio : 'inherit',
		},
	)

}
