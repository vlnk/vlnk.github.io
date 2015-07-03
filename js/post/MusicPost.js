/*jslint browser:true */
/*jslint node: true */
/*global Post, SC*/
"use strict";

function SCPost(tag) {
    Post.call(this, tag);
}

SCPost.prototype = Object.create(Post.prototype);
SCPost.prototype.constructor = SCPost;

SCPost.prototype.hello = function () {
    console.log("SCPost");
};

SCPost.prototype.load = function () {
    this.loadContainer();
    var id = this.tag.title;

    SC.get(id, function (track) {
        SC.oEmbed(track.permalink_url, {maxheight: 200}, document.getElementById(id));
    });
};
