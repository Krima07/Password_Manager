const express = require('express')
const bodyparser= require('body-parser');
const { MongoClient } = require('mongodb');
const dotenv=require('dotenv')
const cors= require('cors')
dotenv.config()

// mongodb setup
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
// Database Name
const dbName = 'passOP';

const app = express()
const port = 3000
app.use(bodyparser.json())
app.use(cors())

// connect to mongodb
client.connect();
const db = client.db(dbName);

// get data from mongodb
// get all password
app.get('/', async(req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
  res.json(findResult)
})

// save password
app.post('/', async(req, res) => {
    const password= req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
   res.json({sucess:true , result: findResult})
  
})

// delete a password by id
app.delete('/', async(req, res) => {
    const password= req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
   res.json({sucess:true , result: findResult})
  
})



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
