# autosummary.js
Automatically generate a summary for you articles

## How to use
First of all import `autosummary.js` in your project, then assuming we have a layout like this:
```html
<html>
  <body>
    <main>
      <aside>
        <h2>Index</h2>
        <ul>
          <li>Loading..</li>
        </ul>
      </aside>
      <article>
        <h1>Hello world!</h1>
        <p>This is a my demo article.</p>
        <h2>Heading 2</h2>
        <p>This is the first heading in summary.</p>
        <h3>Heading 3</h3>
        <p>This is the second heading in summary.</p>
        <h4>Heading 4</h4>
        <p>This is the third heading in summary.</p>
      </article>
    </main>
  </body>
</html>
```
`autosummary()` should be instantiated like this:
```javascript
autosummary("article", "aside>ul");
```

## How works
autosummary.js creates an index with all the headings in the article. A unique `id` is added to these titles which is used as a placeholder for the index entries.

When the content is scrolled, based on the heading closest to the top of the window, the `active` class is added to the relevant index entry.
