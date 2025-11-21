import mongoose from "mongoose"

const connectDb = async () => {
    try {
      const conn =  await mongoose.connect(process.env.MONGO_URI)
      console.log(`Mongodb Connected: ${conn.connection.host}`)

    } catch (error) {
        console.error(`Error connecting to mongodb: ${error.message}`)
        process.exit(1)

    }
}
export default connectDb