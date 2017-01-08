NewsListController.createList();
var loadingStatus = document.getElementById("status")
loadingStatus.addEventListener("change", function() {
  NewsController.divideByEachNews( NewsController.newsToday, NewsListController.list )
  NewsController.getJSONdataForSummary()
  NewsController.passEachSummary()
  NewsListController.createListView();
  NewsListController.displayNewsList();
  NewsListController.displaySingleNews();
});
var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?to-date=2017-01-07"
NewsController.getJSONData(url, function(json){
  NewsController.newsToday = json;
  loadingStatus.innerHTML = 'loaded'
})
