import color       from '@clippium/color'
import { Updater } from '@clippium/updater'

export const updater = async ( {
	name, version,
}:{
	name    : string
	version : string
} ) => {

	const _updater = new Updater( {
		version,
		name,
	} )

	const data = await _updater.get()

	if ( !data ) return

	console.log( `
        
║ 📦 ${color.bold( 'Update available' )} ${color.dim( data.currentVersion )} → ${color.green( data.latestVersion )} ${color.italic( `(${data.type})` )}
║ Run ${color.cyan( data.packageManager + ' i ' + name )} to update
		
` )

}
