<h1 align="center">Kaeon United</h1>
<h2 align="center">It just works.</h2>

<p align="center">
	<img src="https://quiksite.com/wp-content/uploads/2016/09/Javascript-Square.png" width="300px" height="300px"/>
</p>

<h2 align="center">What is Kaeon United?</h2>

Kaeon United (pronounced "KAI-on") is a JavaScript framework designed to meet the following goals:

* To allow the use of CommonJS in the browser,
even when module paths are dynamic,
without any precompilation required.

* To allow an entire application to be developed without HTML or CSS,
where a single JavaScript file serves as the main file,
where JavaScript dependencies are handled by CommonJS,
and where the entire frontend of the application is managed through the DOM.

* To provide a JavaScript based [Kaeon FUSION](https://github.com/Gallery-of-Kaeon/Kaeon-FUSION/blob/master/README.md) interpreter,
to provide the option for a Kaeon FUSION to be used in place of JavaScript,
and to provide JavaScript implementations of Kaeon FUSION's most essential utilities,
including and especially the standard interface.

* To provide a JavaScript implementation of the [Philosopher's Stone](https://github.com/Gallery-of-Kaeon/Philosophers-Stone/blob/master/README.md) API.

* To establish a standard for writing CommonJS utilities that provided the same interface for modules that require different implementations between the browser and Node.js.

* To provide various other miscellaneous JavaScript utilities for convenience.

<h2 align="center">Why Kaeon United?</h2>

Atwood's Law: "Any application that can be written in JavaScript, will eventually be written in JavaScript."

It is an undeniable fact that JavaScript is rapidly becomming THE fullstack language.
However,
one doesn't have to look far to find developers unhappy about this.

JavaScript infamous for having been designed in only ten days.
It is inconsistent and heavily dependent upon other technologies.
For these reasons it is rarely taught in required college computer science classes,
usually being reserved for electives.
Many developers don't learn it at all until they do web development for the first time.
Currently,
Python is the typical choice for first time coders.

Kaeon United allows vanilla JavaScript code to be consistent between different environments,
and removes its dependency on HTML and CSS for frontend tasks,
all without any precompilation.
As an independent and consistent language,
vanilla JavaScript with Kaeon United can do everything that vanilla JavaScript already does,
while also being just as good a first language as Python,
albeit with a vastly greater range of application.

In conclusion,
vanilla JavaScript with Kaeon United could easily constitute the entire language stack for the vast majority of applications that do not require native code,
while remaining consistent on all levels of said stack.
Furthermore,
unless they wish to work on performance critical applications requiring native code,
a programmer who learns JavaScript with Kaeon United as their first language may never need to learn another.

<h2 align="center">How to Use</h2>

To begin, download the [bundle](https://github.com/Gallery-of-Kaeon/Kaeon-United/raw/master/Kaeon%20United/Bundle/Kaeon%20United.zip).
Then,
unzip said bundle into the desired directory.

For a JavaScript project,
place your JavaScript code in the source.js file.

For a Kaeon FUSION project,
place your Kaeon FUSION code in the source.op file.

To run a Kaeon United application in the browser,
open the index.html file in the browser of your choice.

To run a Kaeon United application in the command line,
run the index.js file with Node.js.

Due to CORS related restrictions on local files in most browsers,
it is recommended that testing either be done using local hosting or electron.

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

If you want to use the require function as shown above without using the Kaeon United framework,
just download [KaeonUnited.js](https://github.com/Gallery-of-Kaeon/Kaeon-United/blob/master/Kaeon%20United/Source/KaeonUnited.js),
and reference it in your HTML.

<h2 align="center">Porting</h2>

It is recommended that [electron](https://electronjs.org/) be used for porting Kaeon United apps to desktop apps and that [cordova](https://cordova.apache.org/) be used for porting Kaeon United apps to mobile apps.

To use Kaeon United with electron,
set up an electron quick start project,
then copy all of the files in the bundle except for the node_modules folder and the package-lock.json file into the electron folder,
and finally use npm to install the [node-cmd](https://www.npmjs.com/package/node-cmd),
[readline-sync](https://www.npmjs.com/package/readline-sync),
and [xmlhttprequest](https://www.npmjs.com/package/xmlhttprequest) modules into the electron project.

<h2 align="center">Previewing ONE+ Code</h2>

The Kaeon United framework comes with a utility for previewing how any file written in [ONE+](https://github.com/Gallery-of-Kaeon/Kaeon-FUSION/blob/master/Kaeon%20FUSION/Documentation/1%20-%20Foundations/2%20-%20ONE%2B/README.md),
which is the format that Kaeon FUSION uses,
translates to [ONE](https://github.com/Gallery-of-Kaeon/Kaeon-FUSION/blob/master/Kaeon%20FUSION/Documentation/1%20-%20Foundations/1%20-%20ONE/README.md),
in the file ONEPreview.js.

This command can be used in node using the following command:

    node ONEPreview.js myONEPlusCode.op

For example,
if you had a Kaeon FUSION file called "source.op" containing the following ONE+ code:

    Use: Standard

    Log Line: "Hello, world!"

And then ran the following command:

    node ONEPreview.js source.op

Then the following ONE code would print to the terminal:

    -
    	Use
    -
    	-
    		Standard
    	-
    -
    	Log Line
    -
    	-
    		"Hello, world!"
    	-

<h2 align="center">Source</h2>

To view the source files individually,
click [here](https://github.com/Gallery-of-Kaeon/Kaeon-JS/tree/master/Kaeon%20United/Source).

<h2 align="center">Specification</h2>

To view the specification,
click [here](https://github.com/Gallery-of-Kaeon/Kaeon-United/tree/master/Kaeon%20United/Specification).

<h2 align="center">Disclaimer</h2>

The Kaeon United framework comes with several additional miscellaneous utilities for convinience,
including dataMap.js,
io.js,
ioBrowser.js,
ioNode.js,
server.js,
and ui.js.

These utilities are all as of now experimental and undocumented.
These issues will be remedied in future updates.