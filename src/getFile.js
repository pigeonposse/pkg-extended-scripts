/**
 * Get file path of scripts.
 *
 * @description Get file path of scripts.
 *
 */

import * as fs           from 'fs'
import { getObjectFile } from './utils/getObjectFile.js'
import { not }           from './utils/notifications.js'

const getFilePath = ( fileName, exts ) => {

	try {

		let res = false

		exts.forEach( ext => {

			let file =  new URL( '../' + fileName + ext, import.meta.url )

			if ( fs.existsSync( file ) ) res = file
		
		} )

		if ( !res ) {

			throw( not.throwError( 
				'Does not exist file: ' + fileName + '[' + exts.join( ', ' ) + ']' ) 
			)
		
		}

		return res

	} catch( err ) {

		console.error( err )

	}

}

export const getFileData = ( fileName, exts ) => {

	let filePath = getFilePath( fileName, exts )

	if ( filePath === undefined ) return false

	return getObjectFile( filePath )

}
