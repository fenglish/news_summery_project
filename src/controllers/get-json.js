function getJSONData(url,callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.timeout = 30000;
  xhr.ontimeout = function () {
    var element = document.getElementById("news")
    element.innerHTML = 'time out'
  }
  xhr.onerror = function () {
    var element = document.getElementById("news")
    element.innerHTML = 'error'
  }
  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) {
      var element = document.getElementById("news")
      element.innerHTML = 'loading...'
      return;
    }
    if (this.status === 200) {
          var result = JSON.parse(this.responseText);
          callback(result);
    }
  };
  xhr.send();
}
