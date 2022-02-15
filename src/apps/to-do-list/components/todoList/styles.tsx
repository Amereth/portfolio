import { Typography } from '@mui/material'
import { styled } from '@mui/material'

export const Wrapper = styled('div')(() => ({
	width: '100%',
	height: '100%',
	minHeight: '100vh',
	backgroundColor: '#ffeaaa',
}))

export const Header = styled(Typography)(() => ({
	marginBottom: '3rem',
})) as typeof Typography
