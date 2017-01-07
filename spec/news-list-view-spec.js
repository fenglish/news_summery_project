test.constructorName = "NewsList View";
// doubles
var newslist = {};

// tests
(function(){
  test.description = "It should pass newslist argument to list property when it instanciated";
  var view = new NewsListView( newslist );
  assert.isTrue( view.list === newslist );
})();
