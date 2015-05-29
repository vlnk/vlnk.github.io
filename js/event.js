/*jslint browser:true */
/*jslint node: true */
/*global Post, BlogPost, SCPost, VimeoPost, GithubPost*/
"use strict";

var registry = [];

function onClickEvent(evt) {
    console.log(evt);
    var elt;

    for (elt of registry) {
        console.log(elt);
        if (evt.target === elt.tag) {
            elt.post.click();
        }
    }
}
