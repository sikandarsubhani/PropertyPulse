// // // config/database.js
// // import mongoose from "mongoose";

// // const connectDB = async () => {
// //   mongoose.connect(process.env.MONGODB_URI).
// //     then(() => console.log("connected")).
// //     catch(error => console.log("Error connecting DB" + error))
// // }

// // export default connectDB;


// import mongoose from "mongoose";

// async function connect() {
//   const MONGODB_URI = process.env.MONGODB_URI
//   const connected = false

//   try {
//     if (!MONGODB_URI) {
//       throw new Error('Please define the MONGODB_URI environment variable in .env.local');
//     }
//     mongoose.connect(MONGODB_URI)

//     const connection = mongoose.connection
//     connection.on('connected', () => {
//       console.log('connected with Atlas DB');

//       connection.on('error', (err) => {
//         console.log("MongoDB connection error, make sure MongoDB is runnign ", err);
//       })

//     })
//   } catch (error) {
//     console.log('error occured in db ', error);
//     process.exit()
//   }

// }

// export default connect;



// config/database.js
import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  // If the database is already connected, don't connect again
  if (connected) {
    console.log('MongoDB is already connected...');
    return;
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log('MongoDB connected...');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
