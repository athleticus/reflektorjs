var EventEmitter = require("events").EventEmitter;
var ref = new EventEmitter();

var spawn = require('child_process').spawn;
reflektor = spawn('reflektorjs');

var _  = require('underscore');
_.str = require('underscore.string');
_.mixin(_.str.exports());
_.str.include('Underscore.string', 'string');

reflektor.stdout.on('data', function(data){
	keyword = 'HIDE '

	lines = data.toString().trim().split('\n');
	lines.forEach(function(line){
		if(_.startsWith(line, 'HIDE ')){
			ref.emit('hide', line.split('HIDE ')[1]);
		} else if(_.startsWith(line, 'SHOW ')){
			ref.emit('show', line.split('SHOW ')[1]);
		}
	});
});

module.exports = ref;