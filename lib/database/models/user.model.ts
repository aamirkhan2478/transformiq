import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    clarkId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      required: true,
    },
    planId: {
      type: String,
      default: 1,
    },
    creditBalance: {
      type: Number,
      default: 10,
    },
  },
  { timestamps: true }
);

const User = models?.User || model("User", UserSchema);

export default User;