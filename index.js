// var news  = { headline: "This is headline 1", imageURL: "http://image1.jpg", id:0, summary: "It was a long text but was summarized"};
// var news2 = { headline: "This is headline 2", imageURL: "http://image2.jpg", id:1, summary: "It was a long text but was summarized"};
// var newslist = { getAllNews: function(){ return [news, news2] } };
NewsListController.createList();
window.addEventListener("hashchange", function() {
  NewsController.divideByEachNews( NewsController.newsToday, NewsListController.list )
  NewsListController.createListView();
  NewsListController.displayNewsList();
  NewsListController.displaySingleNews();
});
var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?to-date=2017-01-07"
NewsController.getJSONData(url, function(json){ NewsController.newsToday = json })
