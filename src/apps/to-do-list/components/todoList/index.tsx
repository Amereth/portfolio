import { useEffect } from 'react'
import { Container } from '@mui/material'
import { observer } from 'mobx-react-lite'
import todoStore from '@todo/store'
import { Form } from '../form'
import { List } from '../list'
import { Wrapper, Header } from './styles'

export const TodoList = observer(() => {
	const { fetchList } = todoStore

	useEffect(() => {
		fetchList()
	}, [fetchList])

	return (
		<Wrapper>
			<Container maxWidth='md'>
				<Header component='h2' variant='h4' align='center'>
					Created with MUI, MobX and React Hook Form
				</Header>
				<Form />
				<List />
			</Container>
		</Wrapper>
	)
})
