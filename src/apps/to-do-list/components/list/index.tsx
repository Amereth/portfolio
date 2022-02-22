import { useState } from 'react'
import { FormControlLabel, Switch } from '@mui/material'
import { observer } from 'mobx-react-lite'
import store from '@todo/store'
import { Task } from '@todo/types'
import { Item } from '../item'
import * as Styled from './styles'
import * as strings from './strings'

type VisibleState = 'all' | 'active' | 'completed'

export const List = observer(() => {
	const { todoList, activeList, completedList } = store
	const [visible, setVisible] = useState<VisibleState>('all')

	const toggleVisible = (change: 'active' | 'completed') => {
		if (visible === 'all') {
			setVisible(change)
		} else if (visible === change) {
			setVisible('all')
		} else if (visible !== change) {
			setVisible(change)
		}
	}

	const renderList = () => {
		let list: Task[] = []
		if (visible === 'active') list = activeList
		if (visible === 'completed') list = completedList
		if (visible === 'all') list = todoList
		return list.map((task) => <Item key={task._id} task={task} />)
	}

	return (
		<>
			<Styled.SwitchWrapper>
				<FormControlLabel
					control={
						<Switch
							checked={visible === 'active'}
							onChange={() => toggleVisible('active')}
						/>
					}
					label={strings.ACTIVE_LABEL}
				/>
				<FormControlLabel
					control={
						<Switch
							checked={visible === 'completed'}
							onChange={() => toggleVisible('completed')}
						/>
					}
					label={strings.COMPLETED_LABEL}
				/>
			</Styled.SwitchWrapper>
			{renderList()}
		</>
	)
})
