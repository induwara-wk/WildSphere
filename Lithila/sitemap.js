//sitemap
document.addEventListener("DOMContentLoaded", function() {
    const nodes = document.querySelectorAll(".node-link");

    nodes.forEach(node => {
        node.addEventListener("focus", function() {
            this.querySelector(".node").style.fill = "#0056b3";
        });
        node.addEventListener("blur", function() {
            this.querySelector(".node").style.fill = "#007bff";
        });
    });
});