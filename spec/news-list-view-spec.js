test.constructorName = "NewsList View";
// doubles
var news = { headline: "This is a headline", imageURL: "http://imageURL"};

var newslist = {
  getAllNews: function(){ return [news] }
};

// tests
(function(){
  test.description = "It should pass newslist argument to list property when it instanciated";
  var view = new NewsListView( newslist );
  assert.isTrue( view.list === newslist );
})();

(function(){
  test.description = "It should list news with headline in html";
  var view = new NewsListView( newslist );
  assert.isTrue( view.changeToHTML() === "<img src=http://imageURL width=70% ><ul><div>This is a headline</div></ul>" );
})();
