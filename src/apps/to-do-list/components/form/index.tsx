import { useForm, Controller } from 'react-hook-form'
import dayjs from 'dayjs'
import {
	Box,
	Container,
	Stack,
	TextField,
	FormControlLabel,
	Switch,
	Button,
} from '@mui/material'
import DatePicker from '@mui/lab/DatePicker'
import { FormDataType } from '../../types'

type FormProps = {
	refreshList: () => void
}

const defaultValues = {
	title: '',
	description: '',
	expirationDate: null,
	isCompleted: false,
}

const Form: React.FC<FormProps> = ({ refreshList }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		control,
	} = useForm<FormDataType>({ defaultValues })

	const createTask = ({
		title,
		description,
		expirationDate,
		isCompleted,
	}: FormDataType) => {
		fetch('/api/to-do-list', {
			method: 'POST',
			body: JSON.stringify({
				title,
				description,
				expirationDate: dayjs(expirationDate).format('DD/MM/YYYY'),
				isCompleted: isCompleted ?? false,
				created: Date.now(),
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		refreshList()
		reset()
	}

	return (
		<Box component='form' onSubmit={handleSubmit(createTask)}>
			<Container maxWidth='sm'>
				<Stack spacing={2}>
					<TextField
						sx={{ borderRadius: '30px' }}
						label='Task Title'
						placeholder='Enter the title for your task'
						helperText={errors.title?.message || ' '}
						error={!!errors.title}
						{...register('title', {
							required: 'The title is required',
							maxLength: {
								value: 200,
								message: 'The title should not be longer than 200 symbols',
							},
						})}
					/>

					<TextField
						label='Task Description'
						multiline
						placeholder='Describe your task'
						helperText={errors.description?.message || ' '}
						error={!!errors.description}
						{...register('description')}
					/>

					<Box display='flex' justifyContent='center'>
						<Controller
							control={control}
							name='expirationDate'
							render={({ field }) => (
								<DatePicker
									label='Enter task expiration date'
									renderInput={(params) => (
										<TextField {...params} {...register('expirationDate')} />
									)}
									{...field}
								/>
							)}
						/>
					</Box>

					<Box display='flex' justifyContent='center'>
						<FormControlLabel
							label='Is task already completed?'
							labelPlacement='start'
							control={<Switch {...register('isCompleted')} />}
						/>
					</Box>

					<Box display='flex' justifyContent='center'>
						<Button type='submit' variant='contained' size='large'>
							Create task
						</Button>
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}

export default Form
