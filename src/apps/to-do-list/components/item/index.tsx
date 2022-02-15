import { Typography } from '@mui/material'
import { DoneAll, RemoveDone, Edit, Delete } from '@mui/icons-material'
import store from '@todo/store'
import { Task } from '@todo/types'
import { Container, TextWrapper, StyleButton } from './styles'

type ItemProps = {
	task: Task
}

export const Item = ({
	task: { _id, title, description, isCompleted, expirationDate },
}: ItemProps) => {
	const { deleteTask, completeTask, undoTask } = store

	return (
		<Container component='li' key={_id} isCompleted={isCompleted}>
			<TextWrapper>
				<Typography>{title}</Typography>
				<Typography>{description}</Typography>
				<Typography>{expirationDate}</Typography>
			</TextWrapper>
			<StyleButton
				aria-label='edit'
				isCompleted={isCompleted}
				onClick={isCompleted ? () => undoTask(_id) : () => completeTask(_id)}
			>
				{isCompleted ? <RemoveDone /> : <DoneAll />}
			</StyleButton>
			<StyleButton aria-label='edit' isCompleted={isCompleted}>
				<Edit />
			</StyleButton>
			<StyleButton
				aria-label='delete'
				isCompleted={isCompleted}
				onClick={() => deleteTask(_id)}
			>
				<Delete />
			</StyleButton>
		</Container>
	)
}
