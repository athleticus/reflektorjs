reflektorjs
===========

NodeJS module to interface with Mir:ror by Violet RFID reader by piggy-backing off the reflektor command line script.

Currently, only the show/hide events are supported.

Examples:
```
var ref = require('reflektorjs');

ref.on('show', function(id){
    console.log(id + ' came into range.');
});

ref.on('hide', function(id){
    console.log(id + ' went out of range.');
});
```
