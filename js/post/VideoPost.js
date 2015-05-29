/*jslint browser:true */
/*jslint node: true */
/*global Post, BlogPost, SCPost, VimeoPost, GithubPost*/
"use strict";

function VimeoPost(tag) {
    Post.call(this, tag);
}

VimeoPost.prototype.load = function () {
    this.loadContainer();

    var id = this.tag.title,
        iframe = document.createElement('iframe');

    iframe.className = 'vimeoPlayer';
    iframe.src = id;
    iframe.width = "100%";
    iframe.height = 300;

    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('webkitallowfullscreen', '');
    iframe.setAttribute('mozallowfullscreen', '');
    iframe.setAttribute('allowfullscreen', '');

    document.getElementById(id).appendChild(iframe);
};

VimeoPost.prototype.hello = function () {
    console.log("VimeoPost");
};
