import "../styles/globals.scss"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { Provider } from "react-redux"
import store from "../store"

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}
