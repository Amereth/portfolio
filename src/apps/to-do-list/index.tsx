import useSWR from 'swr'
import { Box, Container, Typography } from '@mui/material'
import { ToDoItem } from './types'
import { Form, List } from './components'

export const ToDoList = () => {
	const { data, mutate } = useSWR<ToDoItem[]>('/api/to-do-list')

	return (
		<Box sx={{ width: '100%', backgroundColor: '#fffcf3' }}>
			<Container maxWidth='md'>
				<Typography
					component='h2'
					variant='h4'
					align='center'
					sx={{ marginBottom: '3rem' }}
				>
					Created with Day.js, MUI, React Hook Form
				</Typography>
				<Form refreshList={mutate} />
				<List taskList={data} />
			</Container>
		</Box>
	)
}
