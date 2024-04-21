
import mongoose from "mongoose";
import { NextRequest } from "next/server";

const url = process.env.MONGODB_URI;

export const connectToDatabase = async () => {
  let cachedDB = null;

  if (cachedDB) {
    return cachedDB;
  }else{
     const newDB = await mongoose.connect('mongodb+srv://ayushnegi1912:19122001an@cluster0.rsae8ht.mongodb.net/Evently');
     console.log("connected");
     cachedDB = newDB;
     return newDB;
  }
 
};
export const middleware = async (request: NextRequest) => {
    await connectToDatabase();
  };
  export const config = {};



