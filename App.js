import React from "react";
import ReactDOM from "react-dom/client";   

const root = ReactDOM.createRoot(document.getElementById('root'));

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1", {id: 'heading'}, "React Nested Heading1 !!"), React.createElement("h2", {}, "React Nested Heading2 !!")]
    )
);

root.render(parent);



// Core React vs JSX in React -


// Core React (Not Readable, not scalable and complex)
const title = React.createElement("h1", {id: 'title'}, 'Akash Gupta');
console.log(title);


// Using JSX in React 
// It gets transpiled before it reaches the JS Engine
// Transpiling is done by Babel (And babel comes from Parcel).
// Babel will convert jsxTitle =>  React.createElement.
const jsxTitle = (<h1 id="title">Akash Gupta</h1>);
console.log(jsxTitle);


// Both title and jsxTitle prints the same React Element i.e JS Object


// Render will convert React.createElement  =>  HTML Element.
root.render(jsxTitle);
