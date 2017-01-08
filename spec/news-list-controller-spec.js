test.constructorName = "NewsListController";
// doubles
var news  = { headline: "This is headline 1", imageURL: "http://image1.jpg", id:0, summary: "It was a long text but was summarized"};
var news2 = { headline: "This is headline 2", imageURL: "http://image2.jpg", id:1, summary: "It was a long text but was summarized"};
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
  assert.isTrue( element.innerHTML.includes("This is headline 1") && element.innerHTML.includes("This is headline 2") );
})();

(function(){
  test.description = "It should show two images";
  NewsListController.list = newslist2
  NewsListController.createListView()
  NewsListController.displayNewsList()
  var element = document.getElementById("news")
  assert.isTrue( element.innerHTML.includes("http://image1.jpg") && element.innerHTML.includes("http://image2.jpg") )
})();

(function(){
  test.description = "It should show single news page";
  NewsListController.list = newslist2
  NewsListController.createListView()
  NewsListController.displayNewsList()
  NewsListController.displaySingleNews()
  window.location.href = "#0";
  var element = document.getElementById("news")
  window.addEventListener("hashchange", function(){
    assert.isTrue( element.innerHTML === "<img src=\"http://image1.jpg\"><br><h1>This is headline 1</h1>It was a long text but was summarized" )
  });

})();
