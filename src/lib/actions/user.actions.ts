'use server'

import { connectToDatabase } from "../database"
import User from "../database/models/user.model"
import { handleError } from "../utils"

interface createUserParams{
clerkId:String,
firstName:String,
lastName:String,
username:String,
email:String,
photo:String
}

export async function createUser(user:createUserParams){
  try {
    await connectToDatabase();
    const newUser =await User.create(user);
    console.log(newUser);
    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    handleError(error);
  }
}