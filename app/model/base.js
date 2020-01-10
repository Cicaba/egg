module.exports = app => {
  let mongoose = app.mongoose;
  let Schema = mongoose.Schema;
  let base = new Schema({
    url: { type: String }
  })
  return mongoose.model("Base", base, "base")
}