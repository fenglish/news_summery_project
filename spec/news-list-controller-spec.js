test.constructorName = "NewsList Controller";
// doubles
var news  = { headline: "This is headline 1", imageURL: "http://image1.jpg"};
var news2 = { headline: "This is headline 2", imageURL: "http://image2.jpg" };
var newslist0 = { getAllNews: function(){ return [] } };
var newslist1 = { getAllNews: function(){ return [news] } };
var newslist2 = { getAllNews: function(){ return [news, news2] } };

// tests
(function(){
  test.description = "It should create newsList";
  NewsListController.createList()
  assert.isTrue( NewsListController.list );
})();

(function(){
  test.description = "It should not show any headlines there is no news";
  NewsListController.list = newslist0
  NewsListController.createListView()
  NewsListController.displayNewsList()
  var element = document.getElementById("news")
  assert.isTrue( element.innerHTML === "" );
})();

(function(){
  test.description = "It should show a headline";
  NewsListController.list = newslist1
  NewsListController.createListView()
  NewsListController.displayNewsList()
  var element = document.getElementById("news")
  assert.isTrue( element.innerHTML.includes("This is headline 1") );
})();

(function(){
  test.description = "It should show a image";
  NewsListController.list = newslist1
  NewsListController.createListView()
  NewsListController.displayNewsList()
  var element = document.getElementById("news")
  assert.isTrue( element.innerHTML.includes("http://image1.jpg") );
})();

(function(){
  test.description = "It should show two headlines";
  NewsListController.list = newslist2
  NewsListController.createListView()
  NewsListController.displayNewsList()
  var element = document.getElementById("news")
  assert.isTrue( element.innerHTML.includes("This is headline 1") );
  assert.isTrue( element.innerHTML.includes("This is headline 2") );
})();

(function(){
  test.description = "It should show two images";
  NewsListController.list = newslist2
  NewsListController.createListView()
  NewsListController.displayNewsList()
  var element = document.getElementById("news")
  assert.isTrue( element.innerHTML.includes("http://image1.jpg") )
  assert.isTrue( element.innerHTML.includes("http://image2.jpg") );
})();
