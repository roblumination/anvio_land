document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

//# sourceMappingURL=index.c1aa54a6.js.map
