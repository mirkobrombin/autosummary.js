headings = document.querySelectorAll("article h2,article h3,article h4"),
summary = document.querySelector("aside>ul"),
document.querySelector("aside>ul>li:first-child").remove(),
url = window.location.href,
i=0,
// generate summary entries
headings.forEach(t => {
    tt = 'title' + i.toString(),
    t.setAttribute('id', tt),
    li = document.createElement("li"),
    a = document.createElement("a"),
    a.classList.add(tt, t.tagName.toUpperCase()), a.setAttribute("href", url + '#' + tt), a.innerText = t.innerText
    li.appendChild(a),
    summary.appendChild(li),
    ++i
}),
// on scroll active summary entry
window.addEventListener('scroll', function(e) {
    headings.forEach(t => {
        if(window.scrollY >= (t.offsetTop - 50) & window.scrollY <= (t.offsetTop + 50)) {
            try {
                document.querySelector("aside>ul>li>a.active").classList.remove("active")
            } catch (error) {
                console.debug("No selected summary item found.")
            }
            document.querySelector('aside>ul>li>a.' + t.getAttribute("id")).classList.add("active")
        }
    })
});
