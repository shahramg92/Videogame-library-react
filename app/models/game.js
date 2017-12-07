// dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// my schema definition
const gameSchema = new Schema(
  {
    name: String,
    year: Number,
    description: String,
    picture: String,
    postDate: { type: Date, default: Date.now }
    // the last one is the time stramp
  }
);

// exporting the schema to use it anywhere else
export default mongoose.model('Game', gameSchema);
