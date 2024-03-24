import express, { request, response } from "express";
import dotenv from "dotenv";
dotenv.config();
import {PORT, }   from "./config.js";
import mongoose from "mongoose";
import User from "./models/user.tourist.js";
import { MongoClient, ServerApiVersion } from 'mongodb';





const app = express();

app.get('/', (request, response ) => {
    console.log(request);
    return response.status(234).send('Welcome To offline world');

})
 
app.listen(PORT, () => {
    console.log('App is listening to port:', {PORT});
} );

//connecting to db

const uri ="mongodb+srv://Palmnazi:Palmnazi2024@palmnazi.k3n9wlt.mongodb.net/Palmnazi?retryWrites=true&w=majority&appName=palmnazi";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

//  mongoose
//  .connect(process.env.MONGO, {
//     useNewUrlParser: true,
//   useUnifiedTopology: true,
 
//  })
//  .then(() => {
//     console.log('App connected to database');
//     app.listen(PORT, () => {
//         console.log('App is listening to port: ${PORT}');
//     } );
//  })
// .catch((error) => {
//     console.log(error);
//     process.exit(1);
// } );

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