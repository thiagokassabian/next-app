import "../styles/globals.scss"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { Provider } from "react-redux"
import store from "../store"
import Head from "next/head"

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</>
	)
}
