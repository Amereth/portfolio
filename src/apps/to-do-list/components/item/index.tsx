import { Typography } from '@mui/material'
import { DoneAll, RemoveDone, Edit, Delete } from '@mui/icons-material'
import store from '@todo/store'
import { Task } from '@todo/types'
import { Container, TextWrapper, StyledButton } from './styles'

type ItemProps = {
	task: Task
}

export const Item = ({
	task: { _id, title, description, isCompleted, expirationDate },
}: ItemProps) => {
	const { deleteTask, completeTask, undoTask } = store

	const onComplete = () => completeTask(_id)
	const onUndo = () => undoTask(_id)

	return (
		<Container component='li' key={_id} isCompleted={isCompleted}>
			<TextWrapper>
				<Typography>{title}</Typography>
				<Typography>{description}</Typography>
				<Typography>{expirationDate}</Typography>
			</TextWrapper>
			<StyledButton
				isCompleted={isCompleted}
				onClick={isCompleted ? onUndo : onComplete}
			>
				{isCompleted ? <RemoveDone /> : <DoneAll />}
			</StyledButton>
			<StyledButton isCompleted={isCompleted}>
				<Edit />
			</StyledButton>
			<StyledButton isCompleted={isCompleted} onClick={() => deleteTask(_id)}>
				<Delete />
			</StyledButton>
		</Container>
	)
}
