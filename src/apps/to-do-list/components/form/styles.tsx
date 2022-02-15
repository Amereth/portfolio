import {
	TextField as MuiTextField,
	TextFieldProps,
	Button as MuiButton,
	ButtonProps,
} from '@mui/material'
import { styled } from '@mui/material'
import rem from '@utils/rem'

export const Form = styled('form')(() => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	maxWidth: rem(600),
	margin: `0 auto`,
	padding: rem(16),
	border: '1px solid black',
	borderRadius: '10px',
}))

export const TextField = styled(MuiTextField)<TextFieldProps>(() => ({
	width: '100%',
	borderRadius: rem(30),
}))

export const Expiration = styled('div')(() => ({
	marginTop: rem(16),
	marginBottom: rem(16),
}))

export const ButtonWrapper = styled('div')(() => ({
	display: 'flex',
	justifyContent: 'center',
	width: rem(400),
	margin: '0 auto',
}))

export const Button = styled(MuiButton)<ButtonProps>(() => ({
	width: '100%',
}))
