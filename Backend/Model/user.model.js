const mongoose=require("mongoose");
const UserSchema = new mongoose.Schema(
    {
      _id: mongoose.Schema.Types.ObjectId,
      id: Number,
      name: String,
      username: String,
      email: String,
      address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
          lat: String,
          lng: String,
        },
      },
      phone: String,
      website: String,
      company: {
        name: String,
        catchPhrase: String,
        bs: String,
      },
    },
    {
      timestamps: true,
    }
  );

const user=mongoose.model("users",UserSchema);
module.exports=user;
