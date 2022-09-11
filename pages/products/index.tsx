import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, Typography } from "@mui/material"
import { GetStaticProps, NextPage } from "next"
import { AppProps } from "next/app"
import Link from "next/link"
import { useRouter } from "next/router"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IProduct } from "../../@types"
import Product from "../../components/Product"
import api from "../../services/api"
import { selected, selectedProductValue } from "../../slices/ProductsSlice"
import { products } from "../../slices/ProductsSlice"

interface IProductsProps {
	products: IProduct[]
	pageProps: AppProps
}

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await api.get<IProduct[]>("/products?_start=0&_end=10")

	return { props: { products: data }, revalidate: 10 }
}

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4
}

const Products: NextPage<IProductsProps> = ({ products: data, pageProps }: IProductsProps) => {
	const router = useRouter()
	const dispatch = useDispatch()
	dispatch(products(data))
	const selectedProduct = useSelector(selectedProductValue)
	const buttonRef = useRef<HTMLButtonElement>()

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, product: IProduct) => {
		// console.log(e.target)
		// e.preventDefault()
		buttonRef.current = e.target as HTMLButtonElement
		dispatch(selected(product))
	}

	return (
		<>
			<h2>Products</h2>
			<Grid container rowGap={3}>
				{data.map(product => (
					<Grid
						xs={12}
						sm={6}
						md={4}
						lg={3}
						key={product.id}
						sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", paddingX: 1 }}>
						<Card component="div">
							<CardMedia component="img" height="140" image={product.image} alt={product.title} sx={{ objectFit: "contain" }} />
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{product.title}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{product.description}
								</Typography>
							</CardContent>
							<CardActions sx={{ justifyContent: "flex-end" }}>
								<Link href={`/products?product=${product.id}`} as={`/products/${product.id}`} passHref>
									<Button component="a" variant="outlined" size="small" onClick={e => handleClick(e, product)}>
										Learn More
									</Button>
								</Link>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>

			<Modal
				// disableScrollLock={true}
				// disableAutoFocus={true}
				// container={() => buttonRef.current!.closest(".MuiCard-root")}
				open={!!router.query.product}
				onClose={() => router.push("/products")}
				aria-labelledby={selectedProduct?.title}
				aria-describedby={selectedProduct?.description}>
				<Box sx={style}>
					<Product product={selectedProduct!} />
				</Box>
			</Modal>
		</>
	)
}

export default Products
