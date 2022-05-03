const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

/* With "connect(...)", we connect to a MongoDB server - NOT to a single
   database. That happens in a second step with help of the "db(...)" method - this
   established a "connection" to a specific database on the overall database server  */

async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    database = client.db('online-shop');
}

function getDb() {
    if (!database){
        throw new Error('You must connect first!');
    }

    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb
}