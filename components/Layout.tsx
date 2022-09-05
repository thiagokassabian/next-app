import { createTheme, ThemeProvider, CssBaseline, Container } from "@mui/material"
import Head from "next/head"
import { ReactNode, useMemo } from "react"
import { useSelector } from "react-redux"
import { themeModeValue } from "../slices/ThemeSlice"
import { getDesignTokens } from "../theme/mui"
import Header from "./Header"

export default function Layout({ children }: { children: ReactNode }) {
	const themeMode = useSelector(themeModeValue)
	const theme = useMemo(() => createTheme(getDesignTokens(themeMode)), [themeMode])

	return (
		<>
			<Head>
				<title>Catalog of products</title>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<main>
					<Container maxWidth={false}>{children}</Container>
				</main>
			</ThemeProvider>
		</>
	)
}
