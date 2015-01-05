var spawn = require('child_process').spawn,
    duplexer = require('duplexer');

module.exports = function (cmd, args) {
  var _cmd = spawn(cmd, args);
  return duplexer(_cmd.stdin, _cmd.stdout);
};

