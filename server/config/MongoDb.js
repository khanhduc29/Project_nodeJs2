import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDatabase;

// import mongoose from "mongoose";

// const MONGODB_URI = "mongodb+srv://admin:Pqd2002@beauty-store.gohbn7j.mongodb.net/?retryWrites=true&w=majority&appName=beauty-store";

// const connectDatabase = async () => {
//   try {
//     mongoose.set("strictQuery", false);

//     await mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Mongodb connected");
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// export default connectDatabase;