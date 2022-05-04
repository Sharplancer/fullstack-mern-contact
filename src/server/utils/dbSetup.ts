import mongoose from 'mongoose';

//Connect MongoDB
const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/contacts")
    .then(() => {
      return console.info('Successfully connected to Database');
    })
    .catch((error) => {
      console.error('Error connecting to database: ', error);
      return process.exit(1);
    });
};

export { connectDB };