<h1 align="center">Kaeon United</h1>
<h2 align="center">It just works.</h2>

<p align="center">
	<img src="https://quiksite.com/wp-content/uploads/2016/09/Javascript-Square.png" width="300px" height="300px"/>
</p>

<h2 align="center">What is Kaeon United?</h2>

Kaeon United is JavaScript framework designed to meet the following goals:

* To allow the use of CommonJS in the browser,
even when module paths are dynamic,
without any precompilation required.

* To allow an entire application to be developed without HTML or CSS,
where a single JavaScript file serves as the main file,
where JavaScript dependencies are handled by CommonJS,
and the entire frontend of the application is managed through the DOM.

* To provide a JavaScript based [Kaeon FUSION](https://github.com/Gallery-of-Kaeon/Kaeon-FUSION/blob/master/README.md) interpreter,
to provide the option for a Kaeon FUSION to be used in place of JavaScript,
and to provide JavaScript implementations of Kaeon FUSION's most essential utilities,
including and especially the standard interface.

* To provide a JavaScript implementation of the [Philosopher's Stone](https://github.com/Gallery-of-Kaeon/Philosophers-Stone/blob/master/README.md) API.

* To establish a standard for writing CommonJS utilities that provided the same interface for modules that require different implementations between the browser and Node.js.

* To provide various other miscellaneous JavaScript utilities for convenience.

<h2 align="center">How to Use</h2>

To begin, download the [bundle](https://github.com/Gallery-of-Kaeon/Kaeon-United/raw/master/Kaeon%20United/Bundle/Kaeon%20United.zip).
Then,
unzip said bundle into the desired directory.

For a JavaScript project,
place your JavaScript code in the main.js file.

For a Kaeon FUSION project,
place your Kaeon FUSION code in the main.op file.

To run a Kaeon United application in the browser,
open the index.html file in the browser of your choice.
Firefox works best for offline testing.

To run a Kaeon United application in the command line,
run the index.js file with Node.js.

<h2 align="center">The Require Function</h2>

Of course when running the project in Node.js or electron,
the require command is available by default,
but when running [index.html](https://github.com/Gallery-of-Kaeon/Kaeon-United/blob/master/Kaeon%20United/Source/index.html) in the browser,
the site will automatically be redirected to [indexBrowser.html](https://github.com/Gallery-of-Kaeon/Kaeon-United/blob/master/Kaeon%20United/Source/indexBrowser.html),
which integrates [KaeonUnited.js](https://github.com/Gallery-of-Kaeon/Kaeon-United/blob/master/Kaeon%20United/Source/KaeonUnited.js),
which globally defines a require function that mimics the Node.js version.

The in-browser require function will take a path to a CommonJS module and return the module.exports value,
but the path must begin with a relative path and end with the proper file extension.
For example,
if in a CommonJS module called "foo.js" was placed in the project folder,
it could be accessed in the browser like this:

    require("./foo.js");

While this is the only way to make it work in the browser,
Node.js will also accept this method.

Like the Node.js require function,
the in-browser require function will globally declare the module object which includes an exports field,
will cache any module you import to make subsequent calls to it more efficient,
which will also prevent infinite recursion in the event of a circular dependency,
and will accept dynamically generated paths,
like this:

    let path = prompt("Enter a module path:");
    let myModule = require(path);

Most other CommonJS browser emulation tools will not allow for dynamic paths as shown above.

<h2 align="center">Porting</h2>

It is recommended that [electron](https://electronjs.org/) be used for porting Kaeon United apps to desktop apps and that [cordova](https://cordova.apache.org/) be used for porting Kaeon United apps to mobile apps.

<!-- <h2 align="center">Notes for Javascript Projects</h2> -->

<h2 align="center">Source</h2>

To view the source files individually,
click [here](https://github.com/Gallery-of-Kaeon/Kaeon-JS/tree/master/Kaeon%20United/Source).

<h2 align="center">Specification</h2>

To view the specification,
click [here](https://github.com/Gallery-of-Kaeon/Kaeon-United/tree/master/Kaeon%20United/Specification).