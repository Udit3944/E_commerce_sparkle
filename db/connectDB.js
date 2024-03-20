import mongoose from "mongoose";

const connectDB = async (DATABASEURL) => {
  const DB_OPTIONS = {
    dbName: "portfolio",
  };
  const data = await mongoose.connect(DATABASEURL, DB_OPTIONS);
  if (data) {
    console.log("Your Database connection is done! Congrats");
  }
};

export default connectDB;
