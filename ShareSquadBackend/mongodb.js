require('dotenv').config();
const { MongoClient } = require('mongodb');

let cachedClient = null;
const url = process.env.MONGODB_URI;
const database = 'sharesquad';

async function dbConnect() {
    if (cachedClient) {
        return cachedClient;
    }
    const client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    await client.connect();
    cachedClient = client.db(database).collection("ashramList");
    return cachedClient;
}

module.exports = dbConnect;