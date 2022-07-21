// import mongo library
const { uri } = require('./dbsecrets'); // secret

const { MongoClient, ServerApiVersion } = require('mongodb');

// connect to Mongo using a URL Connection Sring
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
