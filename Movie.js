const mongoose = require('mongoose');
const db = 'mongodb://user1:qwer1234@ds241133.mlab.com:41133/movies';

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('connected to database');
  })
  .catch(error => {
    console.log('Mongoose connection error: ', error);
  });

//Extract the Title, Year, Genre, Actors, Plot and Poster and save it to MongoDB database.

const schema = mongoose.Schema({
  title: { type: String },
  year: { type: String },
  genre: { type: String },
  actors: { type: String },
  plot: { type: String },
  poster: { type: String }
});

const Movie = mongoose.model('Movie', schema, 'movieCollection');

module.exports = Movie;
