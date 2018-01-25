// IMPORT
var JsonDB = require('node-json-db');
var db = new JsonDB("jsondb", true, false);
var request = require('request');

// SETTINGS
var location_id = '663679101'; // INSTAGRAM LOCATION ID HERE
var max_id = ''; // FOR DEFAULT LEAVE BLANK

// CRAWLER
var url = 'https://www.instagram.com/explore/locations/' + location_id + '/?__a=1';
var currentUrl = url + "&max_id=" + max_id;

var callback = function (error, response, body) {
  if(!error && response && response.statusCode == 200){
    try {
      var media = JSON.parse(body).location.media;
      var postData = [];
      media.nodes.forEach(function(node){
        postData.push({code: node.code, date: node.date, commentsCount: node.comments.count, likesCount: node.likes.count});
        // console.log(node.code,node.date,node.comments.count,node.likes.count);
      });
      db.push("/postData", postData, false);

      var page_info = media.page_info;
      if(page_info.has_next_page && page_info.end_cursor != ""){
        currentUrl = url + "&max_id=" + page_info.end_cursor;
        console.log("next_page: " + currentUrl);
        request(currentUrl, callback);
      }
    } catch(e) {
      console.log("Catch Error: Redo request to -> "+ currentUrl)
      request(currentUrl, callback);
    }

  }
}

request(currentUrl, callback);
