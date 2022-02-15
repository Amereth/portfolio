import { Box, BoxProps, IconButton, IconButtonProps } from '@mui/material'
import { styled } from '@mui/material'
import rem from '@utils/rem'

interface ContainerProps extends BoxProps {
	isCompleted: boolean
}

export const Container = styled(Box)<ContainerProps>(({ isCompleted }) => ({
	display: 'flex',
	alignItems: 'center',
	marginTop: rem(16),
	padding: rem(8),
	border: '1px solid',
	borderColor: '#141614',
	borderRadius: rem(8),
	backgroundColor: isCompleted ? '#5d5d5d' : '#f9f9f9',
	color: isCompleted ? 'white' : 'black',
	listStyleType: 'none',
}))

export const TextWrapper = styled('div')(() => ({
	flexGrow: 1,
}))

interface DeleteButtonProps extends IconButtonProps {
	isCompleted: boolean
}

export const StyleButton = styled(IconButton)<DeleteButtonProps>(
	({ isCompleted }) => ({
		width: rem(45),
		height: rem(45),
		marginLeft: rem(16),
		border: '1px solid',
		borderColor: `${isCompleted ? '#f9f9f9' : '#5d5d5d'}`,
		color: `${isCompleted ? '#f9f9f9' : '#5d5d5d'}`,
		backgroundColor: `${isCompleted ? '#5d5d5d' : '#f9f9f9'}`,
		'&:hover': {
			border: '1px solid',
			borderColor: `${isCompleted ? '#5d5d5d' : '#f9f9f9'}`,
			color: `${isCompleted ? '#5d5d5d' : '#f9f9f9'}`,
			backgroundColor: `${isCompleted ? '#f9f9f9' : '#5d5d5d'}`,
		},
	})
)
