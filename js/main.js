SC.initialize({
  client_id: "eca1ddb71f34ffcedca0a81589f6e207",
  heigth: "100"
});

$(document).ready(function() {
  var postFactory = new PostFactory();
  var links = document.getElementById("post-list").getElementsByClassName("post-item");

  //console.log(links);

  for (var i = 0; i < links.length; ++i) {
    //console.log(links[i]);

    var post = postFactory.create(links[i], links[i].className);
    //post.hello();
  }
});
