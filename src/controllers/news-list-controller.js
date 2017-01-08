(function(exports){

  exports.NewsListController = {
    createList: function(){ this.list = new NewsList() },
    createListView:  function(){ this.listView = new NewsListView( this.list ) },
    displayNewsList: function(){
                        var element = document.getElementById("news")
                        element.innerHTML = this.listView.listNews()
                     },
  }

})(this);
