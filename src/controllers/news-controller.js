(function(exports){

  exports.NewsController = {
    allSummary: [],
    divideByEachNews: function(apiJSON, list){
                        var json = apiJSON.response.results
                        for( var i=0; i<json.length; i++){
                          var news = new News();
                          news.headline = json[i].webTitle
                          news.sourceURL = json[i].webUrl
                          news.imageURL = "http://files.sharenator.com/cute_animal_pictures_4-s600x400-395717.jpg"
                          news.summary = "default"
                          news.id = i
                          list.addNews( news );
                        }
                      },
    getJSONData: function(url,callback) {
                        var element = document.getElementById("status")
                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', url, true);
                        xhr.timeout = 30000;
                        xhr.ontimeout = function () {
                          element.innerHTML = 'time out'
                        }
                        xhr.onerror = function () {
                          element.innerHTML = 'error'
                        }
                        xhr.onreadystatechange = function () {
                          if (this.readyState !== 4) {
                            return;
                          }
                          if (this.status === 200) {
                            if (typeof callback === 'function') {
                              try {
                                var result = JSON.parse(this.responseText);
                                callback(result);
                              } catch (e) {
                                console.log(e);
                              }
                              return;
                            }
                          }
                        };
                        xhr.send();
    },
    getJSONdataForSummary: function(){
                              var urlToSummary = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=";
                              var allNewsToday = NewsListController.list.getAllNews();
                              for( var i=0; i < allNewsToday.length; i++ ){
                                var summaryURL = NewsListController.list.getAllNews()[i].sourceURL;
                                var url = urlToSummary + summaryURL;
                                NewsController.getJSONData(url, function(json){ NewsController.allSummary.push(json) });
                              };
                              var element = document.getElementById("status")
                              element.innerHTML = "all summary data was transferred"

    },
    passEachSummary: function(){
                          var allNewsToday = NewsListController.list.getAllNews();
                          for( var i=0; i < allNewsToday.length; i++ ){
                            allNewsToday[i].summary = this.allSummary[i]
                          };
    }
  }

})(this);
