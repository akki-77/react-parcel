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



// ------------------------------------------ Core React -------------------------------------------

// Why not Core React ?
// (Not Readable, not scalable and complex)

const title = React.createElement("h1", {id: 'title'}, 'Akash Gupta');
console.log(title);




// ------------------------------------------ JSX in React -------------------------------------------


// When we use () brackets, react automatically understands that it's a JSX code. (For single line, () is optional, But for multiline its compulsory)
// Why JSX in React ? (Readable, Scalable and Easy to understand)
// It gets transpiled before it reaches the JS Engine
// Transpiling is done by Babel (And babel comes from Parcel)
// Babel will convert jsxTitle =>  React.createElement

const jsxTitle = (<h1 id="title">Akash Gupta</h1>);
console.log(jsxTitle);


// Both title and jsxTitle prints the same React Element i.e JS Object


// Render will convert React.createElement  =>  HTML Element.
root.render(jsxTitle);




// ------------------------------------------ React Components -------------------------------------------

// Leveraging JSX to build React components.
// 1. Functional Component
// A JS function, which returns JSX (React Element)
// SHould follow Camel Case.


const TitleComponent1 = function() {
    return <h1 id="title">Akash Gupta</h1>;
}

const TitleComponent2 = () => {
    return <h1 id="title">Akash Gupta</h1>;
};



// Upper Syntax could be written in 2 ways -
// Industry standard way
// Multiple line of code needs () brackets

const TitleComponent3 = () => (
    <h1 id="title">Akash Gupta</h1>
);

// For single line of code () brackets are optional

const TitleComponent4 = () => <h1 id="title">Akash Gupta</h1>;


// All 4 components are same.
root.render(<TitleComponent3 />);




// ------------------------------------------ Inject JS into JSX -------------------------------------------
// Use {} braces to inject JS into JSX

const TitleComponent = () => (
    <div id="container">
        
        <TitleComponent4 />   {/* Calling a React component (Component Composition) */}

        {TitleComponent4()}   {/* Calling a JS function (Same as calling a React component) */}
        
        <h1>Heading</h1>

        <h2>{ 200 + 300 }</h2>
        {title}                   {/* Calling a JS Object */}
        {jsxTitle}
        
    </div>
);

root.render(<TitleComponent />);
