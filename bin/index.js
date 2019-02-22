#!/usr/bin/env node
const isitdeadyet = (thing) => {
  console.log(`No, ${thing} is not dead yet`)
}

isitdeadyet(process.argv.slice(2)[0])
