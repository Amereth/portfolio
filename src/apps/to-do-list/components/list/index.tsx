import { useState, useEffect } from 'react'
import { FormControlLabel, Switch } from '@mui/material'
import { observer } from 'mobx-react-lite'
import store from '@todo/store'
import { Task } from '@todo/types'
import { Item } from '../item'
import * as Styled from './styles'
import * as strings from './strings'

enum VisibleState {
	ALL = 'all',
	ACTIVE = 'active',
	COMPLETED = 'completed',
}

export const List = observer(() => {
	const { todoList, activeList, completedList } = store
	const [list, setList] = useState<Task[]>([])
	const [isVisible, setIsVisible] = useState<VisibleState>(VisibleState.ALL)

	useEffect(() => {
		setList(todoList)
	}, [todoList])

	const toggle = (change: VisibleState.ACTIVE | VisibleState.COMPLETED) => {
		if (isVisible === VisibleState.ALL) {
			change === VisibleState.ACTIVE
				? (setIsVisible(VisibleState.ACTIVE), setList(activeList))
				: (setIsVisible(VisibleState.COMPLETED), setList(completedList))
		} else if (isVisible === change) {
			setIsVisible(VisibleState.ALL)
			setList(todoList)
		} else if (isVisible !== change) {
			setIsVisible(change)
			change === VisibleState.ACTIVE
				? setList(activeList)
				: setList(completedList)
		}
	}

	return (
		<>
			<Styled.SwitchWrapper>
				<FormControlLabel
					control={
						<Switch
							checked={isVisible === VisibleState.ACTIVE}
							onChange={() => toggle(VisibleState.ACTIVE)}
						/>
					}
					label={strings.ACTIVE_LABEL}
				/>
				<FormControlLabel
					control={
						<Switch
							checked={isVisible === VisibleState.COMPLETED}
							onChange={() => toggle(VisibleState.COMPLETED)}
						/>
					}
					label={strings.COMPLETED_LABEL}
				/>
			</Styled.SwitchWrapper>
			{list.map((task) => (
				<Item key={task._id} task={task} />
			))}
		</>
	)
})
