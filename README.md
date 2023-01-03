# E-commerce
1.PROJECT 
The project includes a frontend built with React.js and Semantic UI, and a backend 
implemented using Java, Spring, and the MVC pattern. For the database, I chose to use both 
MongoDB and PostgreSQL. I also made use of tools such as Axios and Postman to assist in the 
development process. In total, the project consists of five microservices: Product, Order, Client, 
Discovery, and Config. I will go into detail about the specific technologies used and how they 
were applied in the project. Through this project, we are able to accomplish basic e-commerce 
functionality such as displaying products, placing orders, and managing customer information.

2.TECHNOLOGICAL USAGES
2.1 MICROSERVICE ARCHITECTURE
Microservices is an architectural style in which a large application is built as a collection of 
small, independent services. Each service is responsible for a specific function and 
communicates with other services through well-defined interfaces. This allows for flexibility 
and scalability, as individual services can be easily updated or replaced without affecting the 
rest of the system.
Microservices have several advantages over monolithic architectures, in which an entire 
application is built as a single, self-contained unit. Microservices allow for more efficient 
development and deployment, as each service can be developed and tested independently. They 
also make it easier to scale different parts of the application separately, as each service can be 
deployed on its own servers.
However, implementing microservices can be more complex than a monolithic architecture, as 
it requires more infrastructure and coordination between teams. It is important to carefully 
consider the trade-offs before deciding to use a microservices architecture.
2.2 MVC – (MODEL VİEW CONTROL)
Model-View-Controller (MVC) is a software architectural pattern that separates an application 
into three main components: the model, the view, and the controller.
The model is responsible for managing the data of the application. It performs tasks such as
retrieving data from a database, performing calculations, and triggering events.
The view is responsible for displaying the data to the user. It is typically written in HTML, 
CSS, and JavaScript and can be rendered in a web browser or mobile app.
The controller is the intermediary between the model and the view. It receives user input and 
requests from the view, retrieves data from the model, and sends the data back to the view to 
be displayed.
The MVC pattern allows for a separation of concerns, as each component is responsible for a 
specific aspect of the application. This makes it easier to develop, maintain, and test the 
application. MVC is widely used in web development, and there are many frameworks available 
that implement the MVC pattern, such as Ruby on Rails and ASP.NET.
2.3 REACT.JS
React is a JavaScript library for building user interfaces. It was 
developed by Facebook and is often used for building single-page 
applications and mobile applications.
React allows developers to create reusable UI components. It uses a virtual DOM (Document 
Object Model) to optimize updates to the actual DOM, which helps to improve the performance 
of applications.
In a React application, the developer writes code that describes the UI of the app in terms of 
components. Each component is a piece of the UI that can be easily reused throughout the app. 
When the state of the component changes, React updates the DOM to reflect these changes.
React is known for its simplicity and flexibility, and it is used by many popular companies and 
organizations.
2.4 REDUX
Redux is a state management library for JavaScript applications. It was developed as an opensource project and is often used with libraries such as React, Angular, and Vue.js.
In a Redux-based application, the entire state of the application is stored in a single, immutable 
state tree. This tree is managed by a store, which is an object that holds the current state of the 
application and provides methods for updating the state.
To update the state, the store receives actions, which are objects that describe a change to the 
state. The store passes these actions to reducers, which are functions that take the current state 
and the action as arguments and return a new state. The new state is then stored in the store, 
and the components of the application are re-rendered to reflect the changes.
Redux is useful for applications with a complex state or for applications that need to maintain 
the state of the UI across multiple components. It can help to make the state of the application 
more predictable and easier to debug.
2.5 SEMANTIC UI
Semantic UI is a front-end development framework that uses human-friendly HTML to help 
developers build responsive, modern websites and applications. It is based on the concept of 
semantic markup, which uses HTML tags to give meaning to the content on a page rather than 
just describing its appearance.
Semantic UI includes a wide range of UI elements, such as buttons, forms, tables, and menus, 
as well as a flexible grid system and styles for common interface components. It also includes 
extensive documentation and a customizable theme system.
Semantic UI is built with Less and is designed to be easy to integrate with other libraries and 
frameworks, such as React, Angular, and Vue.js. It is a popular choice for developers who want 
to build modern, user-friendly interfaces with a minimum of customization.
2.6 AXIOS
Axios is a JavaScript library that allows developers to make HTTP requests from the browser 
or from the server using Node.js. It is a promise-based library that uses modern features of 
JavaScript, such as async and await, to make working with HTTP requests more intuitive and 
easier to use.
Axios can be used to make requests to APIs, send form data, and upload files. It supports all 
major HTTP methods, including GET, POST, PUT, DELETE, and PATCH. It can also handle 
HTTP headers, cookies, and other features of HTTP requests.
Axios is popular among developers because it is lightweight and easy to use. It is also able to 
automatically transform data into the appropriate format, such as JSON, and can handle errors 
in a consistent way.
2.7 SPRING BOOT
Spring Boot is a framework for building web applications and microservices with the 
Java Spring Framework. It is designed to simplify the development process by 
providing a set of pre-configured options and tools that allow developers to get started 
quickly. Spring Boot offers a number of benefits for Java developers:
It provides a flexible and opinionated approach to building Java applications.
It includes a large number of built-in libraries and integrations, such as support for popular 
databases and messaging systems.
It uses an embedded servlet container, which means that applications can be run as standalone 
Java applications without the need to deploy to a separate web server.
It provides a number of helpful tools for testing, debugging, and deploying applications.
Spring Boot is widely used in the Java community and is known for its ease of use and ability 
to get applications up and running quickly.
2.8 EUREKA SERVER
Eureka Server is a component of the Netflix OSS (Open Source Software) suite that provides a 
service registry for distributed systems. It allows microservices to register themselves and to 
discover and communicate with other services.
Eureka Server is implemented using the Spring Cloud Netflix library, which provides a set of 
tools for building distributed systems with the Spring Framework. It uses a REST 
(Representational State Transfer) interface to manage the registry, which allows microservices 
to register and discover each other using HTTP requests.
Eureka Server is useful in microservice architectures because it allows services to find each 
other and communicate without the need to hardcode their locations. This makes it easier to 
scale and update the system, as services can be added or removed without affecting the rest of 
the system.
2.9 GİTHUB CONFIG SERVER
To use GitHub Config Server, developers can specify the location of their Git repository in their 
application's configuration. The Config Server will then retrieve the appropriate configuration 
data from the repository and provide it to the application at runtime. This can be useful in 
environments where applications are deployed across multiple servers or in the cloud, as it 
allows configuration data to be easily managed and updated in a single location.
GitHub Config Server can be used in conjunction with other tools in the Spring Cloud Config 
project, such as Spring Cloud Bus, which allows configuration updates to be propagated across 
multiple applications. This can make it easier to manage and update the configuration of a 
distributed system.
2.10 POSTGRESQL
PostgreSQL, often simply referred to as Postgres, is a powerful, open-source 
object-relational database management system (ORDBMS). It is designed to be 
feature-rich, scalable, and efficient, and it is widely used in a variety of 
applications and industries.
Postgres supports a large number of data types, including numerical, string, and temporal types. 
It also supports advanced features such as full-text search, geospatial data support, and support 
for JSON and JSONB data types. Postgres is known for its strong standards compliance, 
reliability, and robust feature set. It is often used as a high-performance alternative to other 
database management systems, such as MySQL and Microsoft SQL Server. It is also popular 
for its ability to handle large volumes of data and its support for concurrency, which allows 
multiple users to access and modify the database at the same time.
2.11 MONGODB
MongoDB is a popular, open-source NoSQL database that is designed to be scalable and 
flexible. It uses a document-oriented data model, which means that data is stored as collections 
of documents rather than as tables with rows and columns.
MongoDB is known for its ability to store large amounts of data and its support for fast read 
and write operations. It is often used in applications that require real-time processing of large 
datasets, such as social media platforms, gaming, and e-commerce.
In MongoDB, data is stored as JSON-like documents with optional schemas. 
This allows for a high level of flexibility, as the structure of the data can be 
changed over time without the need to update the schema of the entire database. 
MongoDB also supports indexing, transactions, and horizontal scaling through the use of 
sharding.
MongoDB is written in C++ and is available for a variety of platforms, including Windows, 
Linux, and MacOS. It is widely used in the development of modern web applications.
2.12 POSTMAN
Postman is a popular tool for testing and developing APIs (Application Programming 
Interfaces). It is a powerful and easy-to-use HTTP client that allows developers to send HTTP 
requests and view the responses from a server. Postman is available as a standalone application 
for Windows, Mac, and Linux, as well as a browser extension for Chrome and Firefox. It is 
widely used by developers to test and debug APIs during the development process. Some of the 
features of Postman include:
• The ability to send requests using all major HTTP methods, including GET, POST, 
PUT, DELETE, and PATCH.
• Support for custom HTTP headers and cookies.
• The ability to save and organize requests in collections.
• A built-in testing framework for validating the responses of API requests.
• Support for various authentication methods, such as basic auth, OAuth, and AWS 
Signature.
• Postman is a useful tool for developers who work with APIs and want an easy way to 
test and debug their code.
