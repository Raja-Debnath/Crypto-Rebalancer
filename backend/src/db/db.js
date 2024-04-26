
import  mongoose  from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/Test", {
      // useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
      // useCreateIndex: true,
    });

    console.log(`MongoDB connected: `);
    // console.log(`MongoDB connected: ${conn.connection.host}`);?
    console.log(`MongoDB connected: ${conn}`);
  } catch (error) {
    console.error(error);
    //process.exit(1);
  }
};

export default connectDB;
