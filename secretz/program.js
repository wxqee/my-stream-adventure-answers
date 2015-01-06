var crypto = require('crypto'),
    zlib = require('zlib'),
    tar = require('tar'),
    through = require('through'),
    tarParser = tar.Parse();

tarParser.on('entry', function (item) {
  if (item.type !== 'File') return;

  var h = crypto.createHash('md5', { encoding: 'hex' });
  item.pipe(h).pipe(through(null, end)).pipe(process.stdout);

  function end() {
    this.queue(' ' + item.path + '\n');
  }
});

process.stdin
  .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
  .pipe(zlib.createGunzip())
  .pipe(tarParser);
