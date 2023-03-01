setInterval(function() {
    var scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
    );
    var scrollTop = Math.max(
        document.documentElement.scrollTop,
        document.body.scrollTop
    );
    if (scrollTop + window.innerHeight < scrollHeight) {
        window.scrollBy(0, 500);
    }
}, 100);




