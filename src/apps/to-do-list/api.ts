import { TaskModel, EditTaskModel } from '@todo/types'

class Api {
	#route: string

	constructor(route: string) {
		this.#route = `api/${route}`
	}

	getAll = () => fetch(this.#route).then((data) => data.json())

	create = ({ title, description, expirationDate, isCompleted }: TaskModel) =>
		fetch(this.#route, {
			method: 'POST',
			body: JSON.stringify({
				title,
				description,
				expirationDate,
				isCompleted,
				created: Date.now(),
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})

	delete = (id: string) =>
		fetch(`${this.#route}/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})

	edit = (task: EditTaskModel) =>
		fetch(`${this.#route}/${task._id}`, {
			method: 'PUT',
			body: JSON.stringify(task),
			headers: {
				'Content-Type': 'application/json',
			},
		})
}

const todoApi = new Api('to-do-list')

export default todoApi
