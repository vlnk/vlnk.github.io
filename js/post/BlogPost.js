/*jslint browser:true */
/*jslint node: true */
/*global Post*/
"use strict";

function BlogPost(tag) {
    Post.call(this, tag);
}

BlogPost.prototype = Object.create(Post.prototype);
BlogPost.prototype.constructor = BlogPost;

BlogPost.prototype.load = function () {
    var container = this.loadContainer();
    container.innerHTML = this.tag.title;
};

BlogPost.prototype.hello = function () { console.log("BlogPost"); };
