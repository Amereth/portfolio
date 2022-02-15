import { makeAutoObservable } from 'mobx'
import { Theme, Task, TaskModel, EditTaskModel } from '@todo/types'
import api from './api'

class TodoStore {
	theme = Theme.LIGHT
	loading = false
	todoList: Task[] = []

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

	changeTheme = (theme: Theme) => (this.theme = theme)

	setTodoList = (todoList: Task[]) => (this.todoList = todoList)

	setLoading = (loading: boolean) => (this.loading = loading)

	fetchList() {
		this.setLoading(true)
		api
			.getAll()
			.then(this.setTodoList)
			.then(() => this.setLoading(false))
	}

	createTask(task: TaskModel) {
		this.setLoading(true)
		api
			.create(task)
			.then(this.fetchList)
			.then(() => this.setLoading(false))
	}

	deleteTask(taskId: string) {
		this.setLoading(true)
		api
			.delete(taskId)
			.then(this.fetchList)
			.then(() => this.setLoading(false))
	}

	editTask(task: EditTaskModel) {
		this.setLoading(true)
		api
			.edit(task)
			.then(this.fetchList)
			.then(() => this.setLoading(false))
	}

	completeTask(id: string) {
		this.editTask({ _id: id, isCompleted: true })
	}

	undoTask(id: string) {
		this.editTask({ _id: id, isCompleted: false })
	}

	get activeList() {
		return this.todoList.filter((item) => item.isCompleted === false)
	}

	get completedList() {
		return this.todoList.filter((item) => item.isCompleted === true)
	}
}

const todoStore = new TodoStore()

export default todoStore
