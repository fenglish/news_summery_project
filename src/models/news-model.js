(function(exports){

  function News(){
    this.headline = ""
    this.sourceURL = ""
    this.imageURL = ""
    this.summary = ""
  }

  News.prototype.getHeadline = function(){
    return this.headline
  };

  News.prototype.getSourceURL = function(){
    return this.sourceURL
  };

  News.prototype.getImageURL = function(){
    return this.imageURL
  };

  News.prototype.getSummary = function(){
    return this.summary
  };

  exports.News = News;

})(this);
