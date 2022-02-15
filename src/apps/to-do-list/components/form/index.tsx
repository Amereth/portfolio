import { useForm, Controller } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import dayjs from 'dayjs'
import { FormControlLabel, Switch } from '@mui/material'
import DatePicker from '@mui/lab/DatePicker'
import store from '@todo/store'
import { FormModel } from '@todo/types'
import * as Styled from './styles'
import * as strings from './strings'

const defaultValues = {
	title: '',
	description: '',
	expirationDate: null,
	isCompleted: false,
}

export const Form = observer(() => {
	const { createTask } = store
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		control,
	} = useForm<FormModel>({ defaultValues })

	const onSubmit = ({
		title,
		description,
		isCompleted,
		expirationDate,
	}: FormModel) => {
		createTask({
			title,
			description,
			isCompleted,
			expirationDate: dayjs(expirationDate).format('DD/MM/YYYY'),
		})
		reset()
	}

	return (
		<Styled.Form onSubmit={handleSubmit(onSubmit)}>
			<Styled.TextField
				label={strings.TITLE_LABEL}
				placeholder={strings.TITLE_PLACEHOLDER}
				helperText={errors.title?.message ?? ' '}
				error={!!errors.title}
				{...register('title', {
					required: strings.TITLE_REQUIRED,
					maxLength: {
						value: 200,
						message: strings.TITLE_MAXLENGTH,
					},
				})}
			/>

			<Styled.TextField
				label={strings.DESCRIPTION_LABEL}
				multiline
				placeholder={strings.DESCRIPTION_PLACEHOLDER}
				helperText={errors.description?.message ?? ' '}
				error={!!errors.description}
				{...register('description')}
			/>

			<Controller
				control={control}
				name='expirationDate'
				render={({ field }) => (
					<DatePicker
						label={strings.EXP_DATE_LABEL}
						renderInput={(params) => (
							<Styled.TextField {...params} {...register('expirationDate')} />
						)}
						{...field}
					/>
				)}
			/>

			<Styled.Expiration>
				<FormControlLabel
					label={strings.IS_COMP_LABEL}
					labelPlacement='start'
					control={<Switch {...register('isCompleted')} />}
				/>
			</Styled.Expiration>

			<Styled.ButtonWrapper>
				<Styled.Button type='submit' variant='contained' size='large'>
					{strings.CREATE_BUTTON_LABEL}
				</Styled.Button>
			</Styled.ButtonWrapper>
		</Styled.Form>
	)
})
