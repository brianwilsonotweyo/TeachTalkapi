import mongoose from "mongoose";

const teachtalkSchema = mongoose.Schema({
  title: String,
  teaser: String,
  description: String,
  rating: String,
  category: String,
  age: String,
  category: String,
  cover: String,
  screenshots: String,
  backgroundColor: String,
});

export default mongoose.model('teachtalkVideos', teachtalkSchema)