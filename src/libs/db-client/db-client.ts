import mongoose from "mongoose";

const DB_URI = process.env.MONGODB_URI;

export default abstract class DBClient {
    static async connect() {
        await mongoose.connect(DB_URI);

        // TODO: add a proper logger
        console.log(`DBClient::Connected to the database.`);
    }
}
