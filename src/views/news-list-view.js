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
        return "<img src=" + news.imageURL + " width=70% >" + "<ul><div>" + news.headline + "</div></ul>"
      });
      return listInHtml.join('')
  };

  exports.NewsListView = NewsListView;

})(this);
