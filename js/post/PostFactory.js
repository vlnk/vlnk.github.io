/*jslint browser:true */
/*jslint node: true */
/*global Post, BlogPost, SCPost, VimeoPost, GithubPost, registry*/
"use strict";

function PostFactory() {
    this.classRegistry = {
        'video': VimeoPost,
        'blog': BlogPost,
        'music': SCPost,
        'code': GithubPost
    };
}

PostFactory.prototype.create = function (tag, subjects) {
    var listOfSubjects = subjects.split(" "),
        post,
        className,
        i = 0,
        isFind = false;

    do {
        className = listOfSubjects[i];
        post = new this.classRegistry[className](tag);

        if (post !== null) {
            isFind = true;
        }

        i += 1;

    } while (i < listOfSubjects.length && isFind !== true);

    post.hello();

    //registry[tag] = post;
    //this.linkClickEvent(tag, post);

    tag.onclick = post.onClickRequest();

    return post;
};
