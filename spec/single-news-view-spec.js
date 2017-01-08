test.constructorName = "SingleNewsView";
// doubles
var news = { headline: "This is a headline",
             imageURL: "http://image.jpg",
             summary:  "It was a long text but was summarized"};

(function(){
  test.description = "It should pass news to news property";
  var singleNewsView = new SingleNewsView( news );
  assert.isTrue( singleNewsView.news === news );
})();

(function(){
  test.description = "It should show news with image & headline & summary in html";
  var singleNewsView = new SingleNewsView( news );
  assert.isTrue( singleNewsView.changeHTML() === "<img src=http://image.jpg ><br><h1>This is a headline</h1>It was a long text but was summarized");
})();
