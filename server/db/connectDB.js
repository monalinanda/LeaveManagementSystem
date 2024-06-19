import mongoose from "mongoose";

export const connectDB = async () => {
	try {

 await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
		
		console.log("MongoDB Connected");
	} catch (err) {
		console.error(`Error: ${err.message}`);
		process.exit(1);
	}
};
