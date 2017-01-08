var news  = { headline: "This is headline 1", imageURL: "http://image1.jpg", id:0, summary: "It was a long text but was summarized"};
var news2 = { headline: "This is headline 2", imageURL: "http://image2.jpg", id:1, summary: "It was a long text but was summarized"};
var newslist = { getAllNews: function(){ return [news, news2] } };
window.onload = function(){
  NewsListController.list = newslist;
  NewsListController.createListView();
  NewsListController.displayNewsList();
  NewsListController.displaySingleNews();
}
