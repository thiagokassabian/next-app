import { Dialog, DialogContent, Slide, AppBar, Button, IconButton, Toolbar, Typography, Box } from "@mui/material"
import { TransitionProps } from "@mui/material/transitions"
import { useRouter } from "next/router"
import { forwardRef, useState } from "react"

import CloseIcon from "@mui/icons-material/Close"
import Image from "next/image"
import { IProduct } from "../@types"
import { useFetch } from "../hooks/useFetch"

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />
})

const ProductDialog = () => {
	const router = useRouter()
	const { id } = router.query
	const { data } = useFetch<IProduct>(`/products/${id}`)

	const [open, setOpen] = useState<boolean>(true)

	return (
		<>
			<Dialog fullScreen onClose={() => setOpen(false)} open={open} TransitionComponent={Transition}>
				<AppBar sx={{ position: "relative" }}>
					<Toolbar>
						<IconButton edge="start" color="inherit" onClick={() => router.back()} aria-label="close">
							<CloseIcon />
						</IconButton>
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							title
						</Typography>
						<Button variant="outlined" color="inherit" onClick={() => {}}>
							Buy
						</Button>
					</Toolbar>
				</AppBar>
				<DialogContent>
					<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						{/* <div>
							<Image src={data.image} alt={data.title} width={200} height={200} layout="intrinsic" />
						</div>
						<div>{data.description}</div>
						<h3>$ {data.price.toFixed(2)}</h3> */}
					</Box>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default ProductDialog
