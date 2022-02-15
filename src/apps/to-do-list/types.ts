export type Task = {
	_id: string
	title: string
	description: string
	isCompleted: boolean
	expirationDate?: string
	created: string
}

export type TaskModel = Omit<Task, '_id' | 'created'>

export type FormModel = {
	title: string
	description: string
	isCompleted: boolean
	expirationDate: string | null
}

export type EditTaskModel = Partial<Omit<Task, '_id'>> & { _id: string }

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}
