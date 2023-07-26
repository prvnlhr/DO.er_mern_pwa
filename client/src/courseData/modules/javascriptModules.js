import ParagraphBlock from "../../components/topicPage/formattingComponents/ParagraphBlock"
import Point from "../../components/topicPage/formattingComponents/Point"

export const javascriptModulesArray = [
    {
        module_title: 'JavaScript Introduction',
        is_bookmarked: false,
        time_required: '5 min',
        module_topics_list: [
            {
                topic_name: 'What is JavaScript',
                topic_content_array: [
                    {
                        type: 'primaryTitle',
                        text: 'What is JavaScript',
                    },
                    {
                        type: 'para1',
                        text: 'JavaScript is a programming language initially designed to interact with elements of web pages. In web browsers, JavaScript consists of three main parts',
                    },
                    {
                        type: 'points',
                        text: [
                            {
                                pointText: 'ECMAScript provides the core functionality.'
                            },
                            {
                                pointText: 'The Document Object Model (DOM) provides interfaces for interacting with elements on web pages'
                            },
                            {
                                pointText: 'The Browser Object Model (BOM) provides the browser API for interacting with the web browser.'
                            },
                        ],
                    },
                    {
                        type: 'para1',
                        text: 'JavaScript allows you to add interactivity to a web page. Typically, you use JavaScript with HTML and CSS to enhance a web page’s functionality, such as validating forms, creating interactive maps, and displaying animated charts.',
                    },
                    {
                        type: 'para1',
                        text: 'When a web page is loaded, i.e., after HTML and CSS have been downloaded, the JavaScript engine in the web browser executes the JavaScript code. The JavaScript code then modifies the HTML and CSS to update the user interface dynamically.',
                    },
                    {
                        type: 'para1',
                        text: `The JavaScript engine is a program that executes JavaScript code. In the beginning, JavaScript engines were implemented as interpreters.
                                However, modern JavaScript engines are typically implemented as just-in-time compilers that compile JavaScript code to bytecode for improved performance.`,
                    },
                    {
                        type: 'primaryTitle',
                        text: 'Client-side vs. Server-side JavaScript'
                    },
                    {
                        type: 'para1',
                        text: `When JavaScript is used on a web page, it is executed in web browsers. In this case, JavaScript works as a client-side language.
                                JavaScript can run on both web browsers and servers. A popular JavaScript server-side environment is Node.js. Unlike client-side JavaScript, server-side JavaScript executes on the server that allows you to access databases, file systems, etc.`
                    },
                    {
                        type: 'primaryTitle',
                        text: 'JavaScript History'
                    },
                    {
                        type: 'para 1',
                        text: `In 1995, JavaScript was created by a Netscape developer named Brendan Eich. First, its name was Mocha. And then, its name was changed to LiveScript.`
                    },
                    {
                        type: 'para1',
                        text: 'Netscape decided to change LiveScript to JavaScript to leverage Java’s fame, which was popular. The decision was made just before Netscape released its web browser product Netscape Navigator 2. As a result, JavaScript entered version 1.0.'
                    },
                    {
                        type: 'para1',
                        text: `Netscape released JavaScript 1.1 in Netscape Navigator 3. In the meantime, Microsoft introduced a web browser product called the Internet Explorer 3 (IE 3), which competed with Netscape. However, IE came with its own JavaScript implementation called JScript. Microsoft used the name JScript to avoid possible license issues with Netscape.`
                    }

                ]
            },
            {
                topic_name: 'JavaScript Console & Web Development Tools',
                topic_content_array: ''
            },
            {
                topic_name: 'JavaScript Hello World',
                topic_content_array: ''
            },
            {
                topic_name: 'JavaScript DOM & BOM',
                topic_content_array: ''
            },
        ]
    },
    {
        module_title: 'Fundamentals of JS',
        is_bookmarked: false,
        time_required: '25 min',
        module_topics_list: [
            {
                topic_name: 'Basics of JS Syntax',
                topic_content_array: ''
            },
            {
                topic_name: 'Variables in JS',
                topic_content_array: ''
            },
            {
                topic_name: 'Data types in JS',
                topic_content_array: ''
            },
            {
                topic_name: 'JavaScript Number',
                topic_content_array: ''
            },
            {
                topic_name: 'Boolean',
                topic_content_array: ''
            },
            {
                topic_name: 'Strings in JavaScript',
                topic_content_array: ''
            },
            {
                topic_name: 'Primitive vs Reference values',
                topic_content_array: ''
            },
            {
                topic_name: 'Arrays in JS',
                topic_content_array: ''
            },
        ]
    },
    {
        module_title: 'JS Operators',
        is_bookmarked: false,
        time_required: '20 min',
        module_topics_list: [
            {
                topic_name: 'Arithmetic operators',
                topic_content_array: ''
            },
            {
                topic_name: 'Unary operators',
                topic_content_array: ''
            },
            {
                topic_name: 'Assignment operators',
                topic_content_array: ''
            },
            {
                topic_name: 'Logical operators',
                topic_content_array: ''
            },
            {
                topic_name: 'Logical assignment & Nullish coalescing operator',
                topic_content_array: ''
            },
            {
                topic_name: 'Exponential operator',
                topic_content_array: ''
            },
        ]
    },
    {
        module_title: 'JS Control Flow',
        is_bookmarked: false,
        time_required: '20 min',
        module_topics_list: [
            {
                topic_name: 'if statement',
                topic_content_array: ''
            },
            {
                topic_name: 'if...else',
                topic_content_array: ''
            },
            {
                topic_name: 'if...else...if',
                topic_content_array: ''
            },
            {
                topic_name: 'Ternary operators',
                topic_content_array: ''
            },
            {
                topic_name: 'Switch in JS',
                topic_content_array: ''
            },
            {
                topic_name: 'Loops in JavaScript',
                topic_content_array: ''
            },
            {
                topic_name: 'Break & continue',
                topic_content_array: ''
            },
            {
                topic_name: 'Comma operator in JS',
                topic_content_array: ''
            },
        ]
    },
    {
        module_title: 'JavaScript Functions',
        is_bookmarked: false,
        time_required: '30 min',
        module_topics_list: [
            {
                topic_name: 'Introduction to JS functions',
                topic_content_array: ''
            },
            {
                topic_name: 'Functions - The first class citizen',
                topic_content_array: ''
            },
            {
                topic_name: 'Function types in JS',
                topic_content_array: ''
            },
            {
                topic_name: 'Pass-by-value',
                topic_content_array: ''
            },
            {
                topic_name: 'Default Para1meters',
                topic_content_array: ''
            },
            {
                topic_name: 'Advanced Functions',
                topic_content_array: ''
            },
        ]
    },
    {
        module_title: 'Objects & Prototypes in JS',
        is_bookmarked: false,
        time_required: '25 min',
        module_topics_list: [
            {
                topic_name: 'What is Objects in JS',
                topic_content_array: ''
            },
            {
                topic_name: 'Ways to Define Objects',
                topic_content_array: ''
            },
            {
                topic_name: 'this keyword in JS',
                topic_content_array: ''
            },
            {
                topic_name: 'Prototypal Inheritance',
                topic_content_array: ''
            },
        ]
    },
    {
        module_title: 'Asynchronus JavaScript',
        is_bookmarked: false,
        time_required: '15 min',
        module_topics_list: [
            {
                topic_name: 'Promise in JS',
                topic_content_array: ''
            },
            {
                topic_name: 'Async/Await in JS',
                topic_content_array: ''
            },

        ]
    },
    {
        module_title: 'Exception Handling in JS',
        is_bookmarked: false,
        time_required: '15 min',
        module_topics_list: [
            {
                topic_name: 'try...catch',
                topic_content_array: ''
            },
            {
                topic_name: 'try...catch...finally',
                topic_content_array: ''
            },
            {
                topic_name: 'throw',
                topic_content_array: ''
            },
        ]
    },
    {
        module_title: 'JavaScript Runtime',
        is_bookmarked: false,
        time_required: '20 min',
        module_topics_list: [
            {
                topic_name: 'Execution Context',
                topic_content_array: ''
            },
            {
                topic_name: 'Call Stack',
                topic_content_array: ''
            },
            {
                topic_name: 'Even  Loop',
                topic_content_array: ''
            },
            {
                topic_name: 'Hoisting',
                topic_content_array: ''
            },
        ]
    },
    {
        module_title: 'Important JavaScript Concepts',
        is_bookmarked: false,
        time_required: '20 min',
        module_topics_list: [
            {
                topic_name: 'let,var, const',
                topic_content_array: ''
            },
            {
                topic_name: 'Hoisting',
                topic_content_array: ''
            },
            {
                topic_name: 'Debouncing & Throttling',
                topic_content_array: ''
            },
            {
                topic_name: 'Call, Apply, Bind',
                topic_content_array: ''
            },
        ]
    },
]


export default javascriptModulesArray;
