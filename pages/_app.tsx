import '../styles/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import CssBaseline from '@mui/material/CssBaseline'
import DateAdapter from '@mui/lab/AdapterDayjs'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Oleksandr Melnyk</title>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<SWRConfig
				value={{
					fetcher: (resource, init) =>
						fetch(resource, init).then((res) => res.json()),
				}}
			>
				<LocalizationProvider dateAdapter={DateAdapter}>
					<CssBaseline />
					<Component {...pageProps} />
				</LocalizationProvider>
			</SWRConfig>
		</>
	)
}
