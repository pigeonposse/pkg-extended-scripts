/**
 * Child_process.
 *
 * @description For execute command.
 *
 */
import { spawn } from 'child_process'

export const childProcess = async ( key, value ) => {

	await spawn( value, {
		shell : true,
		stdio : 'inherit',
	} )

}

