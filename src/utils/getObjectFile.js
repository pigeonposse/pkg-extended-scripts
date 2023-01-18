/**
 * Get object file.
 *
 * @description Function to return the object of a file.
 *
 */
import * as fs      from 'fs'
import { isObject } from './object.js'
import yaml         from 'js-yaml'
import { not }      from './notifications.js'

const getContentFile = ( filePath ) => {

	return fs.readFileSync( 
		filePath,
		{
			encoding : 'utf-8',
		}, 
	)

}

const setObject = ( filePath, fileContent ) => {

	if ( filePath.endsWith( '.yml' ) || filePath.endsWith( '.yaml' ) ) return yaml.load( fileContent )
	
	return JSON.parse( fileContent )

}

export const getObjectFile = ( filePath ) => {

	let res

	res = setObject(
		filePath, 
		getContentFile( filePath ),
	)

	if( isObject( res ) ) return res

	not.error( 'File "' + filePath + '" must return a object' )
	
	return false

}
