const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Please add title'],
		trim: true,
		maxlength: [200, 'Title cannot be longer than 200 characters'],
	},
	description: {
		type: String,
		required: false,
		trim: true,
	},
	isCompleted: {
		type: Boolean,
		required: false,
	},
	expirationDate: {
		type: String,
		required: false,
	},
	created: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.models.Task || mongoose.model('Task', TaskSchema)
