import { AppBar, Button, Slide, Toolbar, Typography, useScrollTrigger, useTheme } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { themeMode, themeModeValue } from "../slices/ThemeSlice"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import Link from "next/link"

export default function Header() {
	const trigger = useScrollTrigger()
	const theme = useTheme()

	const isThemeDark = useSelector(themeModeValue)
	const dispatch = useDispatch()

	return (
		<>
			<Slide appear={false} direction="down" in={!trigger}>
				<AppBar color="primary">
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							<Link href={"/products"}>
								<a style={{ color: "inherit", textDecoration: "none" }}>nextjs-products</a>
							</Link>
						</Typography>
						<Button
							color="inherit"
							onClick={() => dispatch(themeMode(isThemeDark === "light" ? "dark" : "light"))}
							endIcon={theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}>
							{theme.palette.mode} mode
						</Button>
					</Toolbar>
				</AppBar>
			</Slide>
			<Toolbar />
		</>
	)
}
