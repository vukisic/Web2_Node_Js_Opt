# Web2_Node_Js_Opt
Optional assignment for subject Web2 
- [Vuk Isic](https://github.com/vukisic)
- [Danilo Novakovic](https://github.com/DaniloNovakovic)

# Prerequisites
- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://cli.angular.io/)
- [ASP.NET Core 3.1](https://dotnet.microsoft.com/download/dotnet-core/3.1)
- [Visual Studio / VS Code](https://visualstudio.microsoft.com/)

# Intro
 ### Node.js
 - an asynchronous event-driven JavaScript runtime
 - designed to build scalable network applications.
 - an open source server environment
 - runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
 - uses JavaScript on the server

## What node is NOT
 - Node is not a framework, it’s a server.
 - Node wrappers over JavaScript V8 Runtime, are not made in JavaScript, but made in C.
 - It’s not multi-threaded. It runs in a single thread with callback concept.
 - It’s not for JavaScript beginners as it’s very low level.
## What Node is
 - Node is a server which can execute JavaScript. Sort of a server side browser.
 - Node is a open source, cross platform to make real time network applications.
 - It provides you asynchronous, event driven I/O APIs.
 - It runs single threaded event based loop, so all executions become non-blocking.

 # How it's work
 - Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks. 
 - Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library.
   In other systems, there is always a blocking call to start the event-loop. 
  
 - HTTP is a first-class citizen in Node.js, 
   designed with streaming and low latency in mind. 
   This makes Node.js well suited for the foundation of a web library or 
   framework.

 - Node.js being designed without threads doesn't mean you can't take 
   advantage of multiple cores in your environment. 
   Child processes can be spawned by using our child_process.fork() API,
   and are designed to be easy to communicate with. 
   Built upon that same interface is the cluster module, 
   which allows you to share sockets between processes to enable load balancing 
   over your cores.
 
## Example of request handeling(PHP/ASP vs Node)
Here is how `PHP or ASP` handles a file request:
 - Sends the task to the computer's file system.
 - Waits while the file system opens and reads the file.
 - Returns the content to the client.
 - Ready to handle the next request.

Here is how `Node.js` handles a file request:
 - Sends the task to the computer's file system.
 - Ready to handle the next request.
 - When the file system has opened and read the file, 
   the server returns the content to the client.

# What Can Node.js Do?
 - Node.js can generate dynamic page content
 - Node.js can create, open, read, write, delete, and close files on the server
 - Node.js can collect form data
 - Node.js can add, delete, modify data in your database

# NPM
 - a set of publicly available, reusable components, available through easy 
   installation via an online repository, with version and dependency 
   management.

# Express
 - Express is a minimal and flexible Node.js web application framework 
   that provides a robust set of features for web and mobile applications.
 - With a myriad of HTTP utility methods and middleware at your disposal, 
   creating a robust API is quick and easy.
 - Express provides a thin layer of fundamental web application features, 
   without obscuring Node.js features that you know and love.

# Pros						
 - Asynchronous event driven IO helps concurrent request handling.	
 - Uses JavaScript, which is easy to learn.	
 - Share the same piece of code with both server and client side.
 - npm, the Node packaged modules has already become huge, and still growing.	
 - Active and vibrant community, with lots of code shared via github, etc.
 - You can stream big files.

# Cons
 - Node.js doesn’t provide scalability. One CPU is not going to be enough; 
   the platform provides no ability to scale out to take advantage of the 
   multiple cores commonly present in today’s server-class hardware.
 - Dealing with relational database is a pain if you are using Node.	
 - Every time using a callback end up with tons of nested callbacks.
 - Without diving in depth of JavaScript if someone starts Node, he may face conceptual problem.
 - Node.js is not suited for CPU-intensive tasks. It is suited for I/O stuff only (like web servers).


# Why to use Node
 - Non-blocking code
 - Fast processing
 - Concurrent request handling
 - One environment
 - Easy to learn
 - Popularity and community

# Where Node can be the best solution
 - Web Socket Server
 - Fast file upload client
 - Data streaming
 - Ad server
 - Stock exchange software

# Node vs ASP
1) <strong> Language:</strong> ASP.NET makes use of C# as the primary language for development work.
   Whereas, Node.js uses JavaScript. The advantage of C# is that it provides a 
   stringent type system along with compile-time error checks. 
   And let's not forget that C# is renowned for becoming more expressive and 
   efficacious with every new iteration. On the other hand, 
   JavaScript, which depends on Facebook’s Flow static type checker or 
   Microsoft TypeScript, seems to be currently more favored as compared to C#. 
   However, developers who choose Node.js must first master asynchronous 
   programming, which, by the way, is no easy task.

2) <strong>The simplicity of development:</strong> As compared to ASP.NET, Node.js offers 
   fewer abstractions. It, in turn, empowers developers to write code with 
   several small components instead of setting up numerous parameters. 
   As a result, Node.js is much more agile when it comes to customizing the 
   code by the solution. Another benefit of Node.js is that it provides 
   native as well as third-party libraries. However, ASP.NET gets various conventions that allow developers to ensure
   that their code is not only brief but also readable. 

3) <strong>Scalability</strong>: When it comes to the microservices architecture strategy, 
   which delivers superior stability and scalability, 
   Node.js is the ideal choice since its elements are compartmentalized. 
   Furthermore, Node.js tools help identify and monitor errors much more easily. ASP.NET too has much to offer in the 
   context of scalability -- the framework facilitates the efficient analysis 
   of an extensive amount of user data. Another advantage with ASP.NET is that its scaling-up process 
   requires fewer additional machines than one might presume. While there are admittedly several more differentiating factors between the two, it is quite easy to see that ASP.NET enterprise application development is the better choice. 

# Conclusion
Node.js came up with a new idea of event driven single threaded server 
programming which is achieved with callback concept. 
With the growing demand and popularity of JavaScript, 
a step to reach the server side or backend programming is really appreciable.
But at this moment, if we say Node is strong enough to replace .NET, PHP or JAVA it will be a 
hyperbole.

# Manual

## Run Code

### NodeDemo

#### Run

To start <filename>.js type node <filename> in cmd/terminal (ex. node console_example.js for file console_example.js)

### WebApiDemo

#### Build and Run

Open solution in VisualStudio and hit `F5`

### ClientApp

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
