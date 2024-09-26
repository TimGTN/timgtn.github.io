//Init of TOC from "https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.27.4/tocbot.min.js"
tocbot.init({
    tocSelector: ".toc",
    contentSelector: "#post-content",
    headingSelector: "h2, h3, h4",
    orderedList: true,
    scrollSmooth: true,
    headingsOffset: 80,
    scrollSmoothOffset: -80
})
// document.getElementById("sidebar-toc").classList.remove("hidden")

//Code hightlight fix when using linenos + mark_lines (lines misaligned)
document.addEventListener("DOMContentLoaded", function() {
    const preElements = document.querySelectorAll(".code pre");
    const filteredPreElements = Array.from(preElements).filter(pre => {
        return pre.querySelector(".hll") !== null;
    });

    filteredPreElements.forEach(preElement => {
        let preContent = preElement.innerHTML;
        const trailingWhitespacePattern = /[\s\r\n]+$/;
        preContent = preContent.replace(trailingWhitespacePattern, '');
        preElement.innerHTML = preContent;
    });
});