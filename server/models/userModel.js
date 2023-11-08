import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import findOrCreate from "mongoose-findorcreate";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  password: {
    type: String,
  },
  isadmin: {
    type: Boolean,
    default: false,
  },
  googleId: String,
  offers: [{ type: mongoose.Schema.Types.ObjectId, ref: "offer" }],
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model("user", userSchema);

export default User;
