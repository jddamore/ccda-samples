// just displays scores from directory to console
const fs = require('fs');

// First read all directories from folder above
var basePath = fs.readdirSync('./');

// Iterate through and find directories 
for (let i = 0; i < basePath.length; i++) {
  // only record directories from base repository
  if (!basePath[i].includes('_modules') && fs.lstatSync('./' + basePath[i]).isDirectory()) { 
    var files = fs.readdirSync('./' + basePath[i]);
    for (let j = 0; j < files.length; j++) {
      var data = fs.readFileSync('./' + basePath[i] + '/' + files[j], 'utf-8');
      try {
        var stuff = JSON.parse(data)
        console.log(basePath[i] + '/' + files[j] + ': ' + stuff.results.finalNumericalGrade);
      }
      catch (e) {
        console.log(basePath[i] + '/' + files[j] + ': ' + e);
      }
    }
  }
}
