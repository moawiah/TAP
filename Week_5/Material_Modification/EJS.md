# Template Engines 

In the Node.js ecosystem, there are several popular template engines used for generating dynamic HTML content. Here are some of the main ones:
- **JS (Embedded JavaScript):** EJS allows you to embed JavaScript code directly within your HTML templates. It's easy to learn and use, as it follows the familiar syntax of HTML.
- **Pug (formerly known as Jade):** Pug is a high-performance template engine heavily influenced by Haml (HTML abstraction markup language).
- **Handlebars:** Handlebars provides the power of logic and data binding in your templates using a simple syntax. It separates the HTML structure from the JavaScript logic.
- **Mustache:** Mustache is a logic-less template syntax. It's similar to Handlebars but with fewer features. It focuses on simplicity and is supported in many programming languages, not just JavaScript.

## EJS

Our focus will be on EJS. It is relevant to what you did at the first 3 weeks with Front End as well as its similar HTML syntax.

**What is EJS?** EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. It allows you to embed JavaScript code directly into your HTML templates, making it easy to generate dynamic content.

## Main Concepts:

- **Template Files:** These are files with the .ejs extension, containing HTML markup with embedded JavaScript.

- **Embedded JavaScript:** EJS allows you to embed JavaScript code using <% %> tags. You can execute JavaScript code, declare variables, and control flow inside these tags.

- **Interpolation:** EJS supports interpolation using <%= %> tags. This allows you to output dynamic values within your HTML markup.

- **Includes and Layouts:** EJS supports including other EJS files within a template, enabling reuse of code. It also allows for layouts, which are templates that wrap around other templates.

## How to Install EJS:

You can install EJS via npm, the Node.js package manager. Run the following command in your terminal:

```terminal
npm install ejs
```

## Usage

Here are some examples of how to use ejs in your project to create simple layouts.

### Set Up in Node.js

```javascript
const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
```

### Render EJS Templates

```javascript
app.get('/', (req, res) => {
    const data = { name: 'John', age: 30 };
    res.render('index', data);
});
```
> NOTE: Index is defined ejs file in the project

### Pass Values to Templates

Values can be passed as an object to the render method. These values can then be accessed in the EJS template.

```javascript
const data = { name: 'John', age: 30 };
res.render('index', data);
```

### Access Passed Values in EJS

```html
<h1>Hello, <%= name %>!</h1>
<p>Your age is <%= age %></p>
```

### Loop Over Objects

You can use JavaScript loops inside EJS tags to iterate over arrays or objects.


```html
<ul>
<% fruits.forEach(function(fruit) { %>
    <li><%= fruit %></li>
<% }); %>
</ul>

```

### Pros and Cons of EJS

#### Pros:

- Familiar syntax for JavaScript developers.
- Easy to integrate with Node.js applications.
- Supports layouts and partials for code reuse.
- Active community and good documentation.

#### Cons:

- Mixing logic with HTML can sometimes make templates harder to read and maintain.
- Lacks some advanced features compared to other template engines.
- Performance might degrade with complex logic in templates.


> **Where Does it Run?** EJS runs on the server-side, typically within a Node.js environment. It's used to generate dynamic HTML content that can be served to clients in web applications.

[![Watch the video](Check out this video about EJS)](https://www.youtube.com/watch?v=VM-2xSaDxJc)