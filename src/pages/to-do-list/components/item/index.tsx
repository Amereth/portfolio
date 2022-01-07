import { Box, Typography } from '@mui/material'
import { ToDoItem } from '../../types'

type ItemProps = {
	task: ToDoItem
}

const Item: React.FC<ItemProps> = ({ task }) => {
	return (
		<Box
			component='li'
			key={task._id}
			sx={{
				listStyleType: 'none',
				margin: '.5rem',
				padding: '.5rem',
				border: '1px solid',
				borderColor: '#141614',
				borderRadius: '.5rem',
				backgroundColor: '#f9f9f9',
			}}
		>
			<Typography>{task.title}</Typography>
			<Typography>{task.description}</Typography>
			{task.expirationDate}
		</Box>
	)
}

export default Item
