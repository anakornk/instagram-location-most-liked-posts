var JsonDB = require('node-json-db');
var db = new JsonDB("jsondb", true, false);
var postData = db.getData("/postData");

console.log(postData.length);

postData.sort(function(a, b) {
  return b.likesCount - a.likesCount;
});

console.log("Order by highest likes");
for(var i=0;i<20;i++){
  console.log(postData[i]);
}
