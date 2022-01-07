import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../src/utils/connectDB'
import Task from '../../../models/Task'

connectDB()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req

	switch (method) {
		case 'GET':
			try {
				const tasks = await Task.find({})
				console.log('tasks', tasks)
				res.status(200).json(tasks)
			} catch (error) {
				res.status(400).json({ error })
			}
			break

		case 'POST':
			try {
				const task = await Task.create(req.body)
				res.status(200).json({ data: task })
			} catch (error) {
				res.status(400).json({ error })
			}
			break

		default:
			res.status(400).json({ success: false })
			break
	}
}

export default handler
