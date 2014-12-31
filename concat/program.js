var concat = require('concat-stream');

process.stdin.pipe(concat(function(buf) {
  var content = buf.toString();
  process.stdout.write(content.split('').reverse().join(''));
}));
