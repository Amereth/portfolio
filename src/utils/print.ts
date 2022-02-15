export const print = (value: Array<unknown> | { [key: string]: unknown }) =>
	JSON.parse(JSON.stringify(value))

export { toJS } from 'mobx'
