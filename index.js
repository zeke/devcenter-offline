var agent = require("superagent");
var fs = require('fs');

// var articleIndexUrl = "http://devcenter.heroku.com/articles.json"
var articleIndexUrl = "http://localhost:5000/articles.json"

agent.get(articleIndexUrl, function(res){
  var articles = res.body.devcenter

  for (var i in articles) {
    var article = articles[i];
    var articleUrl = article.full_url.replace(/$/, '.md')
    console.log(articleUrl)
  }


  // var file = fs.createWriteStream("file.png");
  // var request = http.get("http://im.glogster.com/media/2/5/24/10/5241033.png", function(response) {
  //   response.pipe(file);
  // });
})