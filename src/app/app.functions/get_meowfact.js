var axios = require('axios');

exports.main = function (context, callback) {
  var config = {
    method: 'get',
    url: 'https://meowfacts.herokuapp.com/',
    headers: {}
  };
  axios(config)
    .then(function (response) {
      callback({
        statusCode: 200,
        body: JSON.stringify(response.data),
      });
    })
    .catch(function (error) {
      callback({
        statusCode: 400,
        body: 'Meow!',
      });
    });
};