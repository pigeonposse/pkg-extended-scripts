#!/usr/bin/env node

import { hideBin } from 'clippium'
import { argv }    from 'node:process'

import cli  from './cli'
import {
	version,
	pkgName,
} from './data'
import { updater } from './updater'

const args = hideBin( argv )

const run = async () => {

	await cli.run( args )
	await updater( {
		name    : pkgName,
		version : version,
	} )

}

run()
