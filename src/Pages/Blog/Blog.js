import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blog = () => {
    return (
        <div>
             <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>what ic cors?</Accordion.Header>
        <Accordion.Body>
        Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF)
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>why we are using Firebase?how to implement authentication without firebase?</Accordion.Header>
        <Accordion.Body>
        Google auth is one of the most commonly used Authentication methods in Mobile and web apps. Well, it is also a tricky one as compared to normal user email and password auth.Google sign in is using oAuth 2.0 protocol, which in turn use various ways of authentication depending on the platform.

The details themselves are interesting but not relevant for you now, all you need to know is that in mobile the method is using some secure signature of the app to allow you to make requests.

Should you want to use the same google sign in with web application or server-to-server the communications way will be different. Server-to-server for example is more reliant on secret key passing, as you are in a “safe” environment and not running on a customer client.

What that means for you, is that in order to start using Google sign in with your android application, you need to sign it. Something you’d need to do anyway if you wish to release it to the playstore, but now is a good place to start.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>how does private route work?</Accordion.Header>
        <Accordion.Body>
        Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>what is node?How does it work?</Accordion.Header>
        <Accordion.Body>
        Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.
        Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.
        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
        Node.js basically works on two concept
            Asynchronous
            Non-blocking I/O
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Blog;