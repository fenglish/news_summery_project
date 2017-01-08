(function(exports){

  exports.NewsListController = {

    createList:        function(){ this.list = new NewsList() },
    createListView:    function(){ this.listView = new NewsListView( this.list ) },
    displayNewsList:   function(){
                          var element = document.getElementById("news")
                          element.innerHTML = this.listView.changeToHTML()
                       },
    displaySingleNews: function(){
                          var self = this;
                          window.addEventListener("hashchange", function(){
                          var id = window.location.href.split("#")[1]
                          var news = self.list.getAllNews()[id];
                          var singleNewsView = new SingleNewsView( news );
                          var element = document.getElementById("news")
                          element.innerHTML = singleNewsView.changeToHTML();
                        });
                      }
  }

})(this);
