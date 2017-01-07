(function(exports){

  function NewsListView(newslist){
    this.list = newslist
  }

  NewsListView.prototype.getList = function(){
      return this.list
  };

  NewsListView.prototype.listNews = function(){
      var allNews = this.list.getAllNews()
      var listInHtml = allNews.map(function(news){
        return "<li><div>" + news.headline + "</div></li>"
      });
      return "<ul>" + listInHtml.join('') + "</ul>"
  };

  exports.NewsListView = NewsListView;

})(this);
