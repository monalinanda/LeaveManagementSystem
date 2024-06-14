import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	name:{
		type: String,
		ref: "User",
		required: true,
	},
	email:{
		type: String,
		ref: "User",
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	leavestart: {
		type: String,
		required: true,
	},
	leaveend: {
		type: String,
		required: true,
	},
	manageremail:{
		type: String,
		required: true,
	},
	status:{
		type: String,
		required: true,
	}
});

const leave = mongoose.model("Leave", leaveSchema);

export default leave;