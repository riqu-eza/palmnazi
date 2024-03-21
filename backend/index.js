import express, { request, response } from "express";
import {PORT, Mongodburl}   from "./config.js";
import mongoose from "mongoose";
import User from "./models/user.tourist.js";


const app = express();

app.get('/', (request, response ) => {
    console.log(request);
    return response.status(234).send('Welcome To offline world');

})
 
app.listen(PORT, () => {
    console.log('App is listening to port: ${PORT}');
} );
 mongoose
 .connect(Mongodburl)
 .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log('App is listening to port: ${PORT}');
    } );
 })
.catch((error) => {
    console.log(error);
    process.exit(1);
} );

// route for save a new user
app.post('/books', async (request,response) =>{
    try {
        if (
            !request.body.username ||
            !request.body.password ||
            !request.body.email

        ){
            return response.status(400).send({
                message: 'input all required fields',
            });
        }
        const newUser ={
            username: request.body.username,
            password: request.body.password,
            email: request.body.email,

        };

        const user = await User.create(newUser);

        return response.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        Response.status(500).send({message: error.message}); 
    }
} );