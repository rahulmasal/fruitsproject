/*jshint esversion:6*/

const mongoose = require("mongoose");
const { Schema } = mongoose;

connectDB().catch(err => console.log(err));

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/fruitsDB', { family: 4 });
    } catch (error) {
        console.log(error);
    }
    // await mongoose.connect('mongodb://localhost:27017/fruitsDB', { family: 4 });
}

const fruitSchema = new Schema({
    name: { type: String, required: [true, "Please check your data entry, name not specified"] },
    rating: { type: Number, min: 1, max: 10 },
    review: String
});
const personSchema = new Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Fruit = mongoose.model('Fruit', fruitSchema);
const Person = mongoose.model('Person', personSchema);

const chikoo = new Fruit({
    name: 'chickoo',
    rating: 9,
    review: 'Very Sweet'
});

// chikoo.save();
const dragonfruit = new Fruit({
    name: 'Dragonfruit',
    rating: 9,
    review: 'Great Fruit'
});

dragonfruit.save();

const rahul = new Person({
    name: 'Rahul',
    age: 32
});
// rahul.save();

const pineapple = new Fruit({
    name: 'Pineapple',
    rating: 9,
    review: 'Great Fruit'
});
const mango = new Fruit({
    name: 'Mango',
    rating: 10,
    review: 'King'
})
// mango.save();
// pineapple.save();

const varsha = new Person({
    name: 'varsha',
    age: 26,
    favoriteFruit: pineapple
});

// varsha.save();


async function updateEntries() {
    await Person.updateOne({ name: 'Rahul' }, { favoriteFruit: mango });
}

async function deleteEntries() {
    await Person.deleteMany({ name: 'Rahul' });
}

// console.log(deleteEntries());




// import { MongoClient, ServerApiVersion } from "mongodb";
// Replace the placeholder with your Atlas connection string
// import { connect } from "mongoose";
// const mongoose = require('mongoose');

// const connectionString = 'mongodb://localhost:27017/fruitsDB';

// mongoose.connect(connectionString, { family: 4 })
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// const fruitSchema = new mongoose.Schema({
//     name: { type: String, required: [true, "Please check your data entry, name not specified"] },
//     rating: { type: Number, min: 1, max: 10 },
//     review: String
// });
// const people = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// const Person = mongoose.model("Person", people);
// const person = new Person({
//     name: "rahul",
//     age: 32
// });
// async function deleteManyTest() {
//     await Person.deleteMany({ name: 'rahul' });
// }
// deleteManyTest();
// const Fruit = mongoose.model("Fruit", fruitSchema);

// Fruit.deleteOne({ name: 'Peach' }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted the document");
//     }
// });
// Fruit.updateOne({ _id: "65407b8262b09fb25abbc095" }, { name: "Peach" }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully Updated the document!")
//     }
// });

// const fruit = new Fruit({
//     name: "Apple",
//     rating: 34,
//     review: "Pretty solid as a fruit."
// });

// const tomoto = new Fruit({
//     rating: 34,
//     review: "Pretty solid as a fruit."
// });
// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "The Best Fruit."
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 4,
//     review: "Too sour for me."
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 3,
//     review: "Weird texture"
// });

// Fruit.insertMany([kiwi, orange, banana]);
// Fruit.find({}).then((result) => console.log(result)).catch((err) => console.log(err));
// Fruit.find(function (err, fruits) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(fruits);
//     }
// });
// const doc = await Fruit.find({});
// console.log(doc);
// tomoto.save();
// person.save();
// mongoose.connection.close();
// const uri = "mongodb://localhost:27017";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }, family: 4
// }
// );
// async function run() {
//     try {
//         // Connect the client to the server (optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("fruitsDB").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         const myDB = client.db("fruitsDB");
//         const myColl = myDB.collection("fruits");

//         const docs = [
//             { name: "Apple", score: 8, review: "Great Fruit" },
//             { name: "Orange", score: 6, review: "Kinda Sour" },
//             { name: "Banana", score: 9, review: "Great Stuff" }
//         ];

//         // const insertManyresult = await myColl.insertMany(docs);
//         // console.log(insertManyresult);
//         // let ids = insertManyresult.insertedIds;

//         // console.log(`${insertManyresult.insertedCount} documents were inserted.`);

//         // for (let id of Object.values(ids)) {
//         //     console.log(`Inserted a document with id ${id}`);
//         // }

//         const findResult = await myColl.find({});
//         for await (const doc of findResult) {
//             console.log(doc);
//         }
//         await client.close();
//     }
// }
// run().catch(console.dir);
