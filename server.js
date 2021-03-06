import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
const axios = require('axios');
const cors = require('cors')
// We need to import our models and routes
import Game from './app/models/game';
import { getGames, getGame, postGame, deleteGame } from './app/routes/game';

const app = express(); // express server
const port = process.env.PORT || 8081;

// DB connection through Mongoose
const options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
}; // Just a bunch of options for the db connection
mongoose.Promise = global.Promise;
// Don't forget to substitute it with your connection string
const MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost/retrodb';
mongoose.connect(MONGO_URL, {useMongoClient: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Body parser and Morgan middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// We tell express where to find static assets
app.use(express.static(__dirname + '/client/dist'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.use(cors());

// const api = axios.create({
//   baseURL: 'https://api-2445582011268.apicast.io',
//   timeout: 1000,
//   headers: {'user-key': '1b1ecdd75c3f25365dde131f1415a69f',
//             'Accept': 'application/json'
//   }
// });

// API routes
app.route('/games')
  // create a game
  .post(postGame)
  // get all the games
  .get(getGames);
app.route('/games/:id')
  // get a single game
  .get(getGame)
  // delete a single game
  .delete(deleteGame);

// ...For all the other requests just sends back the Homepage
app.route("*").get((req, res) => {
  res.sendFile('client/dist/index.html', { root: __dirname });
});

app.listen(port);

console.log(`listening on port ${port}`);
