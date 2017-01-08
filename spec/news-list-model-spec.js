test.constructorName = "NewsListModel";
// doubles
var news = {};

// tests
(function(){
  test.description = "It should have allNews property";
  var list = new NewsList();
  assert.isTrue( list.allNews );
})();

(function(){
  test.description = "It should get allNews property";
  var list = new NewsList();
  assert.isTrue( list.getAllNews() === list.allNews );
})();

(function(){
  test.description = "It should add News to allNews property";
  var list = new NewsList();
  list.addNews(news);
  assert.isTrue( list.allNews[0] === news );
})();
