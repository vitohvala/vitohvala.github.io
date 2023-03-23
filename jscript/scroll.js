var shouldScroll = true;

document.addEventListener("scroll", function() {
  shouldScroll = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight;
});

setInterval(function() {
  if (shouldScroll) {
    window.scrollBy(0, 500);
  }
}, 100);
