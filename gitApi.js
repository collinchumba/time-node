var axios = require('axios');
var fs = require('fs');
var base64 = require('base-64');

let token = "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"
let file = fs.readFileSync("abc.txt").toString();
console.log(file);
var content = base64.encode(file);
console.log(content);
uploadFileApi(token, content)

function uploadFileApi(token, content) {

  var data = JSON.stringify({
    "message": "txt file",
    "content": `${content}`,
    "sha": "cd1218574bbe0b75061ea54c7d669b398a35f8cf"
  });

  var config = {
    method: 'put',
    url: 'https://api.github.com/repos/collinchumba/gitApi/contents/abcde.js',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function(response) {
      console.log(JSON.stringify(response.data));
      console.log(JSON.stringify(response.data.content.sha))
    })
    .catch(function(error) {
      console.log(error);
    });
}