const allLinks = document.querySelectorAll("a")

allLinks.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
    })
})