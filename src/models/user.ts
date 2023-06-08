import mongoose from "mongoose";

export const UserSchema = new mongoose.schema({
    email: String,
});

export default mongoose.mongoose("User", UserSchema);
