#!/usr/bin/env node --no-warnings
import program from 'src/core/program'
import pjson from '../package.json'

program
  .version(pjson.version)
  .parse(process.argv)
