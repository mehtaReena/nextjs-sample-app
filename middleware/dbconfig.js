//Connect with database

import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
async function connectDB(req, res, next) {


    const client = await MongoClient.connect(
        'mongodb+srv://reenamehta:reenamehta@cluster0.n4mko.mongodb.net/sampledb?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true });
    req.db = client.db();
    next();
}

const middleware = nextConnect();
middleware.use(connectDB);
export default middleware;
