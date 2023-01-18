#! /usr/bin/env node

/**
 * Run application.
 *
 * @description File that runs the app.
 *
 */

import { data }   from './data.js'
import { runCmd } from './runCmd.js'

( () => runCmd( data ) )()
