/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');
const { resolve } = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  var pluckPromise = new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', function(err, contents){
      if(err){
        reject(err);
      } else {
        var firstLine = contents.split('\n');
        resolve(firstLine[0]);
      }
    })
  });
  return pluckPromise;
  //TODO
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  var getStatusPromise = new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        var statusCode = response.statusCode;
        resolve(statusCode);
      }
    });
  });
  return getStatusPromise;
  //TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
