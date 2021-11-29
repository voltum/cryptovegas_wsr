//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose"

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { MONGODB_URI } = process.env

if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable'
    )
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function connection () {
    if (cached.conn) {
      return cached.conn
    }
  
    if (!cached.promise) {
      const opts = {
        useUnifiedTopology: true,
        bufferCommands: false,
      }
  
      cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
        return mongoose
      })
    }
    cached.conn = await cached.promise
    return cached.conn
  }
  
  export default connection