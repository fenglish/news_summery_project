test.constructorName = "NewsListView";
// doubles
var news = { headline: "This is a headline", imageURL: "http://imageURL", id:0 };
var newslist = { getAllNews: function(){ return [news] } };

// tests
(function(){
  test.description = "It should pass newslist argument to list property when it instanciated";
  var view = new NewsListView( newslist );
  assert.isTrue( view.list === newslist );
})();

(function(){
  test.description = "It should list news with headline in html";
  var view = new NewsListView( newslist );
  assert.isTrue( view.changeToHTML() === "<img src=http://imageURL><h3><a href=\"#0\">This is a headline</a></h3><br><br>" );
})();
