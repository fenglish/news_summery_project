(function(exports){

  function NewsListView(newslist){
    this.list = newslist
  }

  NewsListView.prototype.changeToHTML = function(){
      var allNews = this.list.getAllNews()
      var listInHtml = allNews.map(function(news){
        var image = "<img src=" + news.imageURL + ">"
        var headline = "<h3><a href=\"#" + news.id + "\">" + news.headline + "</a></h3>"
        return  image + headline + "<br><br>"
      });
      return listInHtml.join('')
  };

  exports.NewsListView = NewsListView;

})(this);
