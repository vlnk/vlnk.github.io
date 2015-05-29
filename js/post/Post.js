/*jslint browser:true */
/*jslint node: true */
/*global id, Animator*/
"use strict";

function Post(tag) {
    this.tag = tag;
}

Post.prototype.load = function () {
    throw new Error("load() function must be implemented.");
};

Post.prototype.loadContainer = function () {
    var div = document.createElement('div');
    div.id = id;
    div.className = this.tag.className;

    this.tag.parentNode.appendChild(div);
    return div;
};

Post.prototype.expend = function (bool) {
    var expendImg = this.tag.getElementsByTagName("img");

    //if (expendImg.length < 1)
    //throw new Error({'msg':"The post tag doesn't contain any img."});

    if (bool === true) {
        expendImg[0].src = '../img/expend_less.svg';
    } else {
        expendImg[0].src = '../img/expend_more.svg';
    }
};

Post.prototype.hello = function () { console.log("Post"); };

Post.prototype.destroy = function () {
    var id = this.tag.title,
        node = document.getElementById(id);

    if (node !== null) {
        this.tag.parentNode.removeChild(node);
    }
};

Post.prototype.onClickRequest = function () {
    if (!this.tag.classList.contains("load")) {
        this.tag.classList.add("load");
        this.load();
        this.expend(true);
    } else {
        this.destroy();
        this.tag.classList.remove("load");
        this.expend(false);
    }
};

Post.prototype.animatedOpen = function () {
    var id = this.tag.title,
        node = document.getElementById(id),
        animator = new Animator(node);

    if (node !== null) {
        animator.openWithFixedDuration(new Date().getTime(), 300);
    }
};
