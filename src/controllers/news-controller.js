(function(exports){

  exports.NewsController = {

    divideByEachNews: function(apiJSON, list){
      var json = apiJSON.response.results
      for( var i=0; i<json.length; i++){
        var news = new News();
        news.headline = json[i].webTitle
        news.sourceURL = json[i].webUrl
        news.imageURL = "default"
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
          element.innerHTML = 'loading...'
          return;
        }
        if (this.status === 200) {
          if (typeof callback === 'function') {
            try {
              var result = JSON.parse(this.responseText);
              callback(result);
              window.location = "#todays-news"
              element.innerHTML = 'loaded'
            } catch (e) {
              console.log(e);
            }
            return;
          }
        }
      };
      xhr.send();
    },
    passJSONDataToNewsToday: function(result){
      NewsController.newsToday = result
    },
    passJSONDataToSummary: function(result){
      this.newsSummary = result
    }
  }

})(this);
