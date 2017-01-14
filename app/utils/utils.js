const exec = require('child_process').exec;

exports.generateApiKey = function(callback) {
	exec("uuidgen -r | tr -d '-' | sed 's/.$//'", (error, stdout, stderr) => {
	  if (error) {
	    console.error(`exec error: ${error}`);
	    return;
	  }
	  callback(stdout.slice(0, -1));
	});
};

