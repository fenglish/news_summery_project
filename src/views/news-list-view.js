(function(exports){

  function NewsListView(newslist){
    this.list = newslist
  }

  NewsListView.prototype.changeToHTML = function(){
      var allNews = this.list.getAllNews()
      var listInHtml = allNews.map(function(news){
        return "<img src=" + news.imageURL + ">" + "<ul><div>" + news.headline + "</div></ul>"
      });
      return listInHtml.join('')
  };

  exports.NewsListView = NewsListView;

})(this);
