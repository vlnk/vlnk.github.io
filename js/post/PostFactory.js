/*jslint browser:true */
/*jslint node: true */
/*global Post, BlogPost, SCPost, VimeoPost, GithubPost, registry*/
"use strict";

function PostFactory() {
    this.classRegistry = ['video', 'blog', 'music', 'code'];
}

PostFactory.prototype.create = function (tag, subjects) {
    var listOfSubjects = subjects.split(" "),
        post = new Post(tag),
        i = 0,
        isFind = false;

    do {
        switch (listOfSubjects[i]) {
        case 'blog':
            post = new BlogPost(tag);
            break;
        case 'music':
            post = new SCPost(tag);
            break;
        case 'video':
            post = new VimeoPost(tag);
            break;
        case 'code':
            post = new GithubPost(tag);
            break;
        }

        if (post !== null) {
            isFind = true;
        }

        i += 1;

    } while (i < listOfSubjects.length && isFind !== true);

    registry.push({tag: tag, post: post});
    return post;
};
