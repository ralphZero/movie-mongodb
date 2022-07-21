// import mongo library
const { uri } = require('./dbsecrets');

const { MongoClient, ServerApiVersion } = require('mongodb');

// connect to Mongo using a URL Connection Sring
// const uri = 'mongodb+srv://ralph:YthhmOjUwIlP3m6J@cluster1.2j1qhpk.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

// connect to db
const db = client.db('sample_mflix');

// get specific movie from movies collection
// search by title for Back To The Future

db.collection('movies')
  .findOne({ title: 'Back to the Future'}, (err, result) => {
    if(err) {
        console.error(err);
    }
    console.log(result);
    client.close();
  });
