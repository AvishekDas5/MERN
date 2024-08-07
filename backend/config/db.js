import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// connect to mongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MDB_CONNECT || "mongodb://127.0.0.1:27017/test" , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log(`Connected to MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
