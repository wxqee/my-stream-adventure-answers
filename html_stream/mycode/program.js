var trumpet = require('trumpet'),
    through = require('through'),
    tr = trumpet();

tr.selectAll('.loud', function(loud){
  loud.createReadStream().pipe(through(function(data){
    this.queue(data.toString().toUpperCase());
  })).pipe(loud.createWriteStream());
});

process.stdin.pipe(tr).pipe(process.stdout);

