/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, nextInstructions) { //ADDED NEXT INSTRUCTIONS WITH ZACH
  //TODO
  fs.readFile(filePath, 'utf8', function(err, content) {
    if (err) {
      nextInstructions(err);
    } else {
      const firstLine = content.split('\n');
      nextInstructions(null, firstLine[0]);
    }
  }); //TODO - PASSING SOLUTION
};


// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, nextStep) {
  //TODO
  request(url, function (error, response, body) {
    if (error) {
      nextStep(error);
    } else {
      var statusCode = response.statusCode;
      nextStep(undefined, statusCode);
    }
  }) //TODO - completed to show 6 passing
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
