(function(exports){

  function SingleNewsView(news){
    this.news = news
  }

  SingleNewsView.prototype.changeHTML = function(){
    var image    = "<img src=" + this.news.imageURL + " >"
    var headline = "<h1>" + this.news.headline + "</h1>"
    var summary  = this.news.summary
    return image + "<br>" + headline + summary
  };

  exports.SingleNewsView = SingleNewsView;

})(this);
