import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	details: {
		type: String,
		required: true,
	},
	createdOn: {
		type: Date,
		required: true,
	},
});

const leave = mongoose.model("Leave", leaveSchema);

export default leave;