/*jslint browser:true */
/*jslint node: true */
/*global Post, Github, SCPost, VimeoPost, GithubPost*/
"use strict";

function GithubPost(tag) {
    Post.call(this, tag);

    /*
    this.github = new Github({
        username: "209857336803adb99b50eee9d3682f8b94152dbb",
        auth: "oauth"
    });
    */
}

GithubPost.prototype = Object.create(Post.prototype);
GithubPost.prototype.constructor = GithubPost;

GithubPost.prototype.load = function () {
    var httpRequest = new XMLHttpRequest(),
        url = "https://api.github.com/repos/vlnk/irc-simulator";

    //httpRequest.onreadystatechange = ProcessRequest;
    httpRequest.open("GET", url, true);
    httpRequest.send(null);

    console.show(httpRequest);
    console.show("bonjour");
    /*
    var container = this.loadContainer(),
        repo = this.github.getRepo('vlnk', 'irc-simulator'),
        canvas = document.createElement('canvas');
        //countries = canvas.getContext("2d");

    repo.show(function (repo) {
        console.log(repo);
    });

    canvas.width = 200;
    canvas.height = 200;

    new Chart(countries).Pie(data,options);
    */
    //container.appendChild(canvas);
};

GithubPost.prototype.hello = function () {
    console.log("GithubPost");
};
