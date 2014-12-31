var split = require('split'),
    through = require('through'),
    flagOdd = true;

process.stdin
  .pipe(split())
  .pipe(through(function(line) {
    line = line.toString();
    this.queue(((flagOdd = !flagOdd) ? line.toUpperCase() : line.toLowerCase()) + '\n');
  }))
  .pipe(process.stdout);
