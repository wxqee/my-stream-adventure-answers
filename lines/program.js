var split = require('split'),
    through = require('through'),
    flagOdd = true;

process.stdin
  .pipe(split())
  .pipe(through(function(line) {
    this.queue(((flagOdd = !flagOdd) ? line.toUpperCase() : line) + '\n');
  }))
  .pipe(process.stdout);
