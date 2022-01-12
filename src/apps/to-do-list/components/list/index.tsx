import { Box } from '@mui/material'
import { ToDoItem } from '../../types'
import Item from '../item'

type ListProps = {
	taskList?: ToDoItem[]
}

const List: React.FC<ListProps> = ({ taskList = [] }) => {
	return (
		<Box component='ul'>
			{taskList?.map((task) => (
				<Item key={task._id} task={task} />
			))}
		</Box>
	)
}

export default List
