import mongoose from 'mongoose'
import { MONGODB_URI } from './config'

export async function connection() {
  try {
    const db = await mongoose.connect(MONGODB_URI)
    console.log('>>> DB is connected: ' + db.connection.name)
  } catch(e) {
    console.log('Error in connection ' + e)
  }
}

