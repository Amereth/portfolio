import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../src/utils/connectDB'
import Task from '../../../models/Task'

connectDB()

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {
		query: { id },
		method,
	} = req

	switch (method) {
		case 'GET':
			try {
				const task = await Task.findById(id)
				task
					? res.status(200).json({ success: true, data: task })
					: res.status(400).json({ success: false })
			} catch (error) {
				res.status(200).json({ success: false })
			}
			break

		case 'PUT':
			try {
				const task = await Task.findByIdAndUpdate(id, req.body, {
					new: true,
					runValidators: true,
				})
				task
					? res.status(200).json({ success: true, data: task })
					: res.status(400).json({ success: false })
			} catch (error) {
				res.status(400).json({ success: false })
			}
			break

		case 'DELETE':
			try {
				const task = await Task.deleteOne({ _id: id })
				task
					? res.status(200).json({ success: true, data: {} })
					: res.status(400).json({ success: false })
			} catch (error) {
				res.status(400).json({ success: false })
			}
			break

		default:
			res.status(400).json({ success: false })
			break
	}
}
