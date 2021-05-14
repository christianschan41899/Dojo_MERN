# Setup
## File Structure
- client
    - src
- server
    - models
    - controllers
    - routes
    - config
- server.js

Create client using
> npx create-react-app client 

---

## Server

Install the following dependencies using CMD:
> npm init -y

> npm install express

> npm install mongoose

> npm install cors

Put the following inside server.js:
```javascript
const express = require('express');
const cors = require('cors') 
const app = express();

require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors()) 


const MyRoutes = require('./server/routes/mymodel.routes');
MyRoutes(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
```

Inside config, create mongoose.config.js and insert the following:
```javascript
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/database_name", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
```

All models must require mongoose.

```javascript
const mongoose = require('mongoose');
```

---

## Client

Install axios
> npm install axios

Axios will need to make requests to the server using the port you specified

Install (depricated) Reach router
>npm install @reach/router --force

Use `<Router>`, `<Link>`, and navigate by importing.
```javascript
import { Router, Link, navigate } from '@reach/router';
```

All child compenents of `<Router>` must have a path attribute

---

# Syntax

## React (Client)

useState sets up variables that can be interacted with by the user through forms. Must be imported.
useEffect allows us to handle when a function occurs. By defult occurs every time something changes within the DOM. There is an optional secondary argument of an array of variables, which will trigger useEffect when changed. If empty, the call is only made when the component is loaded. Must be imported.

```javascript
import React, { useEffect, useState } from 'react';
```

Additionally React components can only return a single child element, though it can return all of its children. Wrap in a div tag or empty tag to satisfy.

Components can be passed functions and variables from their parents as props. The attribute name is what must be used within the component to access.

Good practice is to create a parent function with all the functionalities and to pass them into child components as props as needed.

---

## Axios (Client)

Axios commands we will be using are axios:.get, .post, .put, and .delete

These don't really have any use without a database for context.

---
## Mongoose Models

Mongoose keeps track of models using Schema, allowing for an object of keys with data types to be stored

```javascript
const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String
}, {timestamps: true});
module.exports.Product = mongoose.model('Product', ProductSchema);
```

You can also add things like validations to a key, which requires the key take in an object where its data type is stored as a `type` key instead.

Additionally, Schemas can contain other Schemas by taking in an array of that Schema.

None of the keys *have* to have a value assigned immediately.

## Mongoose CRUD (Server)
Requires an already definied model for this to work.

- Create
    - Model.create(req.body)
- Read
    - Model.find()
    - Model.findOne({key : value})
- Update
    - Model.findOneAndUpdate({key : value})
- Delete
    -Model.delete({key : value})
    - Model.deleteOne({key : value})

These are used by the controller (needs to import models), who exports functions using:
```javascript
module.exports.functionName = (req, res) => {
    //...
}
```

Your req is the request coming in from the user, and res is the response you are going to send back. These are usually used in the `.then()` that occurs after a CRUD command is used within to activate an arrow function that handles the response.

## Mongoose Routes

Routes start with an import of the controllers as a variable (typically ModelController), then an arrow function:

```javascript
module.exports = app =>{
    app.get('http://database_url/api/', ModelController..getFunction)
}
```

Inside we use app like axios with get, post, put, and delete commands, except in this case we are not sending the request. Instead we are:
1. Within the first argument of each app.request setting a url which will be recieving the request.
2. Setting the request type (app.get, app.post, app.put, app.delete) this route will be handling. The same url can handle different unique request types. URL variables can be set with, as an example, `.../api/:id` and refered in the controller as req.params.id.
3. In the second argument specifiying which controller function will determine what logic gets used on this request.

---

# Tips

useEffect can cause memory leaks if it contains an API request (an asynchronus event) causes state changes once recieved. This happens when navigating away from a page You can resolve this by doing:

```javascript
useEffect(() => {
        let isMounted = true;
        axios.get('http://localhost:8000/api/')
            .then(res => {
                if(isMounted){
                    // state updates here
                }
            })
            .catch(err => console.log(err));
        
        //When we navigate away this should prevent the setState.
        return () => {isMounted = false}
    },[])
```
Which will cause useEffect to turn isMounted to false when the component is navigated away from, preventing memory leakage.