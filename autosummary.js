function autosummary(article_element, summary_element) {
    headings = document.querySelectorAll(article_element + "h2," + article_element + " h3," + article_element + " h4"),
    article = document.querySelector(article_element),
    summary = document.querySelector(summary_element),
    url = window.location.href,
    document.querySelector(summary_element + ">li:first-child").remove(),
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
                    document.querySelector(summary_element + ">li>a.active").classList.remove("active")
                } catch (error) {
                    console.debug("No selected summary item found.")
                }
                document.querySelector(summary_element + '>li>a.' + t.getAttribute("id")).classList.add("active")
            }
        })
    });
}
