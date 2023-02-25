let loader = document.getElementById("loader");
let body = document.getElementById("body");
let scrollbar = document.getElementById("scrollbar");
let totalHeight = document.body.scrollHeight - window.innerHeight
window.addEventListener("load", function() {
    loader.style.display = "none";
    body.style.overflowY = "scroll";
});

window.onscroll = function() {
    let scrollHeight = (window.pageYOffset / totalHeight) * 100;
    scrollbar.style.height = scrollHeight + "%";
}
$(function() {
    $('div.blocks div').inview({
        'viewFactor': 0.3
    });
});

// ]]>