# autosummary.js
Automatically generate a summary for you articles

## How to use
First of all import `autosummary.js` in your proget, then edit `headings` and `summary` variables to fit your content.

## How works
The concept is simple. The script checks for the presence of headings (from H1 to H4) in the `<article>` tag, to which adds an `id` which we will use as anchor. A list of `<li>` elements is generated in the `<ul>` tag in `<aside>`, each element contains a link pointing to the individual title.

When scrolling, the title closest to the top margin of the window is checked and updates the class of the element in the list.
