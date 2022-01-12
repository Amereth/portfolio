export type ToDoItem = {
	_id: string
	title: string
	description: string
	isCompleted: boolean
	created: string
	expirationDate?: string
}

export type FormDataType = {
	title: string
	description: string
	isCompleted: boolean
	expirationDate: string | null
}
