# **HTML**

### heading, boilerplate

`!` in an empty html creates the boilerplate for you

`<title> </title>` the title displayed on the tab

### tags
[Reference Page](https://www.w3schools.com/tags/)

tells the browser what information needs to be displayed

`<p> </p>` text
`<h1> </h1>` heading 1
`<body> </body>` html body for browser to display

`<img>` self closing tag, does not have a closing tag  -> images
`<input>` self closing

`<a> </a>` link to another page

**attributes within tags**
`<img src=''>`  **src** is the attribute for <img>, we need the image link in src for the browser to display the image

`<a href=''> </>` **href** represents the link to the page


### lists
unordered list
`<ul> </ul>`

ordered list  -> comes with numbers
`<ol> </ol>`

list items
`<li> </li>`

example:
```
  <ol>
    <li> <p> first item </p> </li>
    <li> <p> second item </p> </li>
  </ol>
```


### input (forms)
forms are used when you request information from users
`<form> </form>`

label
`<label for=''>` **for** is used to identify which input it relates to

input
`<input type='' id='' name=''>` 
**type** tells you what information needed from user such as *text*, *email*, *password*...
**id** and **name** should be unique, where id corresponds to **for** atrribute in the label

submit button
`<button type='submit'> </button>` 

### semantic
***Your tags should correspond correctly to what it should be***

div container -> no meaning, only used to group elements together
`<div> </div>`

span element -> no meaning, only used to display element that doesnt fit under a tag
`<span> </span>`

table


# **CSS**
[Reference Page](https://www.w3schools.com/cssref/index.php)

### selector

**select a tag**
```css
body {
}

p {
}
```

**select a class**
```css
.class {
}
```

**select an id**
```css
#id {
}
```


### box model
https://www.w3schools.com/css/css_boxmodel.asp

**margin**: area outside of the border
**border**: line seprates inside vs outside
**padding**: area between your border and your content
**content**: whatever information you displaying

### layout
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout

example: **center a div**
```html
<div class='container'>
  <p class='item'> item <p>
</div>
```
```css
.container{
  display:flex;
  justify-content:center;
  align-items:center;
}
```

### typography
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout

text size, weight, family, style, alignment, spacing...

generally we have a global text styling that you include in your body
```css
body{
  font-family: Arial, sans-serif;  /*include multiple font family to ensure font is support, in the order from left to right */
  font-size: 20px;
}
```


### colors
https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

### responsive design
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries

ensure your webpage displays nicely for all kinds of device(desktop, tablet, phone)

to change the styling when width meets the requirement
example: to display the style when window width is less than 1250px
```css
@media (max-width: 1250px){
  /* styles */
}
```

# **JS**

### syntax

**variable declaration**
```javascript
const variable1 = "value";  //const does not allow change
let variable2 = "value";  //let allows change
```

**function declaration**
```javascript
function func1(parameter){
}
//arrow function
const func2 = (parameter) => {
}
```


**object (JSON)**
key-value pair
```javascript 
const obj = {
  //name is the key
  //"abc" is the value
  name: "abc",
  age: 5
}

obj.name  // abc
obj.age   // 5
```


**event**
only for vanilla html  



**async**
create an event and go do something else while waiting for it to finish
usually when you communicate with another server 
```javascript
//async in front of () indicates async func
const asyncfunction = async () => {
  //await is used to wait for response of the request
  const response = await fetch();
}
```

**list**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 

ordered unlike json, uses index to access information
```javascript
const arr = [0,1,2,3];
arr[0]; //access the first element: 0

//map -> return something with each element -> used a lot in react
const newMapArr = arr.map( (num) => num * 2 );
//result: newMapArr = [0, 2, 4, 6];
```

---
# **react**

create a react project 
```shell
npm create vite@latest

-> react -> javascript
```

all your code should be inside the **/src** folder

where our main entrance **main.jsx**, most of the code editing will be in **App.jsx**

All react componenet requires the file and function to be capitalized
create a function, and export it
Example: **./Container.jsx**
```javascript
const Container = () => {
  //return contains the html
  return (
    <div>
    </div>
  )
}

export default Container;
```

to use a component you created, you have to import the component in your file
```javascript
import Container from ./Container.jsx;

<Container />
```

**useState**
React's way of creating variables
```javascript
import { useState } from 'react';

const App = () => {
  //     name    , set function,          default value
  const [variable, setVariable] = useState('');
  setVariable(5);
}
```


**useEffect**
loads whenever the page is rendered, and when it exits
```javascript
import { useEffect } from 'react';
const App = () => {
  useEffect( () => {
    console.log("page rendered");
  },
  //dependency array, whenever something in this array changes, the code inside useeffect runs again
  [])
}
```


**event handler**
Example with button:
```javascript
//onSubmit is the event
<button onSubmit={
  () => console.log("button Clicked")
  }> </button>
```

