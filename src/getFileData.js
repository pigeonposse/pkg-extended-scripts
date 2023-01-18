/**
 * Get file path of scripts.
 *
 * @description Get file path of scripts.
 *
 */

import { dirExists }     from './utils/dirs.js'
import { getObjectFile } from './utils/getObjectFile.js'

const getFilePath = ( fileNames, exts ) => {
	
	let res = false

	fileNames.forEach( fileName => {

		exts.forEach( ext => {

			let file = './' + fileName + ext

			if ( dirExists( file ) ) res = file
		
		} )

	} )

	if ( !res ) return false

	return res

}

export const getFileData = ( fileNames, exts ) => {

	let filePath = getFilePath( fileNames, exts )

	if ( filePath ) return getObjectFile( filePath )

	return false

}
