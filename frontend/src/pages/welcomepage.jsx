import React from 'react';
import { useState, useEffect } from 'react';
import './welcomepage.css';

function WelcomePage() {


    return (
         <div>
            <h1>WELCOME TO MY SCRIPTING LANGUAGES LECTURE FULL STACK + MICROSERVICES PROJECT</h1>
            <p>My project is an online store built with React, a popular JavaScript library for building user interfaces. It utilizes Spring, a Java-based framework, for its backend services, which are designed using microservices architecture and managed with Eureka, a service registry. The frontend of the store is styled with Semantic UI, a modern CSS framework that provides a clean and intuitive design. With these powerful technologies, your e-commerce platform is able to handle a large volume of traffic and offer a seamless shopping experience to customers.</p>
             <img src="https://www.ffwd.org/wp-content/uploads/Hello-World-logo.png" alt="Welcome" />
             <p>You can search other pages.</p>
             <p>Ayben GÜLNAR - 191180041 🌙🌙</p>
         </div>
    );
}

export default WelcomePage;
