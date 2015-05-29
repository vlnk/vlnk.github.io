/*jslint browser:true */
/*jslint node: true */
/*global requestAnimationFrame*/
"use strict";

function square(t) {
    return t * t;
}

function Animator(node) {
    this.node = node;
}

Animator.prototype.run = function (start, end, duration) {
    var current = new Date().getTime(),
        time = (current - start) / duration,
        y = start + (end - start) * time;

    function extendHeight(y) {
        return y + "px";
    }

    if (time < 1) {
        requestAnimationFrame(this.run);
        time = square(time);
        this.node.style.height = extendHeight(y);
    } else {
        this.node.style.height = extendHeight(end);
    }
};

Animator.prototype.openWithFixedDuration = function (start, end) {
    this.run(start, end, 2000);
};
