export const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined'

export type Input = string | URL

const trimSlashes = ( segment: string, index: number ) => {

	if ( index === 0 ) {

		let i = segment.length
		while ( i > 0 && segment[i - 1] === '/' ) i--
		return segment.slice( 0, i )

	}
	else {

		let start = 0,
			end   = segment.length

		while ( start < end && segment[start] === '/' ) start++
		while ( end > start && segment[end - 1] === '/' ) end--

		return segment.slice( start, end )

	}

}

/**
 * Joins multiple path segments into a single path.
 *
 * - In **Node.js**, utilizes the `path.join` method for joining paths.
 * - In **browsers**, manually concatenates paths, removing redundant slashes.
 *
 * @param   {...string}       paths - The path segments to join.
 * @returns {Promise<string>}       The joined path as a string.
 * @example
 * const fullPath = await joinPath('folder', 'subfolder', 'file.txt')
 * console.log(fullPath) // 'folder/subfolder/file.txt' or 'folder\\subfolder\\file.txt' in Node.js
 */
export const joinPath = async ( ...paths: string[] ): Promise<string> => {

	if ( !isBrowser ) {

		const { join } = await import( 'path' )
		return join( ...paths )

	}
	return paths
		.filter( Boolean )
		.map( trimSlashes )
		.filter( Boolean )
		.join( '/' )

}

export const findAndImport = async <T>( paths: string[] ) => {

	const pathToFileURL = isBrowser ? ( path: string ) => new URL( path ) : await import( 'node:url' ).then( r => r.pathToFileURL )

	for ( const path of paths ) {

		try {

			const mod = await import( pathToFileURL( path ).href )
			return mod.default as T

		}
		catch {

			// no-op
		}

	}
	return undefined

}

