const request = require('request');
const pd = require('pretty-data').pd;
const fs = require('fs');

var files = [];

console.log('starting directory read');

// First read all directories from folder above
var basePath = fs.readdirSync('../');

// Iterate through and find directories 
for (let i = 0; i < basePath.length; i++) {
  // only record directories from base repository
  if (fs.lstatSync('../' + basePath[i]).isDirectory()) { 
    // exclude certain directories
    if (basePath[i].slice(0,2) !== 'z-' && basePath[i].slice(0,1) !== '.') {
      // if no directory exists, make a directory
      if (!fs.existsSync('./' + basePath[i])) {
        fs.mkdirSync('./' + basePath[i]); 
      }
      // read all files in that directory
      var subFiles = fs.readdirSync('../' + basePath[i]);
      for (let j = 0; j < subFiles.length; j++) {
        // only setup xml files for posting
        if (subFiles[j].slice(-3).toLowerCase() === 'xml') {
          var newFile = {
            directory: basePath[i],
            filename: subFiles[j]
          };
          files.push(newFile);
        }
      }
    }
  }
}

console.log('found ' + files.length + ' files to process');

// iterate through files and serially write each to subdirectory

var index = 0;

// recursive function that send all files and writes results
sendOne = function () {
  if (index >= files.length) {
    console.log('done!');  
  }
  else {
    // setup form data
    var formData = {
      'ccdaFile': fs.createReadStream('../' + files[index].directory + '/' + files[index].filename),
    };
    // make API call
    request.post({url:'https://sitenv.org/scorecard/ccdascorecardservice2', formData: formData}, function optionalCallback(err, httpResponse, body) {
      if (err) {
        return console.error('upload failed:', err);
      }
      // pretty up that body response before writing
      body = pd.json(body);
      // write results as JSON, then recurse
      fs.writeFileSync('./' + files[index].directory + '/' + files[index].filename.slice(0, files[index].filename.length-4) + '.json', body);
      process.stdout.write('+');
      index++;
      sendOne();
    });
  }
};

sendOne();

