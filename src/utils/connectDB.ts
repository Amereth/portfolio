// @ts-nocheck
import mongoose from 'mongoose'

const db = process.env.MONGO_URI

const connectDB = async () => {
	try {
		await mongoose.connect(`${db}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log('MongoDB connected')
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}

export default connectDB
