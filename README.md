# MERN Chat Application

This is a simple chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to send and receive messages in real-time.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Real-time Messaging**: Messages are sent and received instantly using WebSocket technology.
- **Responsive Design**: The application is responsive and works well on both desktop and mobile devices.

## Technologies Used

- **MongoDB**: A NoSQL database used for storing user information and chat messages.
- **Express.js**: A web application framework for building APIs and handling server-side logic.
- **React.js**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime environment for running server-side code.
- **Socket.IO**: A library that enables real-time, bidirectional communication between web clients and servers.

## Setup

**Clone the repository:**

```bash
git clone https://github.com/kmhabib71/Mern-Chat.git

cd server
npm install

cd ../client
npm install

cd server
npm start

cd client
npm start
```
Open your browser and navigate to http://localhost:3000 to view the application.
Configuration
MongoDB URI: Update the MongoDB URI in server/config/default.json with your own MongoDB connection string.
Port: By default, the server runs on port 5000 and the client on port 3000. You can change these ports in server/index.js and client/package.json respectively.
License
This project is licensed under the MIT License - see the LICENSE file for details.

**Author**
KM Habib

Contact
For any inquiries or feedback, please contact km.habibs@gmail.com


