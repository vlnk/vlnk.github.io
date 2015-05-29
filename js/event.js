/*jslint browser:true */
/*jslint node: true */
/*global Post, BlogPost, SCPost, VimeoPost, GithubPost*/
"use strict";

var registry = [];

function onClickEvent(evt) {
    console.log(evt);
    var i, tag;

    for (i = 0; i < registry.length; i += 1) {
        console.log(registry[i]);
        tag = registry[i];

        if (registry) {
            obj[post].onClickRequest();
        }
    }
}
