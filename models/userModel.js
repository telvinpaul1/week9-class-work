const mongoose = require ("mongoose")
const {Schema} = mongoose
// instanciating schema
const userSchema = new Schema({
firstName: String,
lastName: String,
email: String,
password: String
});


const User = mongoose.model("User", userSchema);

module.exports = User;