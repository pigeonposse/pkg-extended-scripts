/**
 * Data.
 *
 * @description Data.
 *
 */

export const data = {
	fileNamesAllowed : [ 
		'package.scripts',
	],
	extensionsAllowed : [ 
		'.yaml', 
		'.yml', 
		'.js', 
		'.json', 
	],
	argv          : process.argv,
	argvCli       : process.argv[1],
	argvArgs      : process.argv.slice( 2 ),
	argvArgsExtra : process.argv.slice( 3 ),
}
