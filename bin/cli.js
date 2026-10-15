#!/usr/bin/env node
import { capitalize, slugify, truncate } from '../src/strings.js';

function usage() {
  console.error('Usage: strutil <command> <args...>');
}

async function main() {
  const args = process.argv.slice(2);
  const cmd = args[0];
  if (!cmd) {
    usage();
    process.exit(1);
  }
  try {
    switch (cmd) {
      case 'capitalize': {
        if (args.length !== 2) { usage(); process.exit(1); }
        const out = capitalize(args[1]);
        console.log(out);
        process.exit(0);
      }
      case 'slugify': {
        if (args.length !== 2) { usage(); process.exit(1); }
        const out = slugify(args[1]);
        console.log(out);
        process.exit(0);
      }
      case 'truncate': {
        if (args.length !== 3) { usage(); process.exit(1); }
        const out = truncate(args[1], Number(args[2]));
        console.log(out);
        process.exit(0);
      }
      default: {
        usage();
        process.exit(1);
      }
    }
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

main();
