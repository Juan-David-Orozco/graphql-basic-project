import mongoose from 'mongoose'

export async function connection() {
  try {
    await mongoose.connect('mongodb://localhost/mongo-graphql')
    console.log('>>> DB is connected')
  } catch(e) {
    console.log('Error in connection '+e)
  }
}

