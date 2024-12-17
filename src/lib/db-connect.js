import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return console.log('Already Connected');
  }
  try {
    const db = await mongoose?.connect(
      'mongodb+srv://admin:admin@cluster0.sbp9q1p.mongodb.net/gift_finder'
    );
    connection.isConnected = db.connections[0].readyState;
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default dbConnect;
