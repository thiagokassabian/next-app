import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { GetStaticProps, NextPage } from "next"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { IProduct } from "../../@types"
import api from "../../services/api"
import { productsValue } from "../../slices/ProductsSlice"
import { products } from "../../slices/ProductsSlice"

interface IProductsProps {
	products: IProduct[]
}

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await api.get<IProduct[]>("/products")

	return { props: { products: data }, revalidate: 60 }
}

const Products: NextPage<IProductsProps> = ({ products: data }: IProductsProps) => {
	const dispatch = useDispatch()
	dispatch(products(data))
	// const products = useSelector(productsValue)

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
								<Link href={`/products/${product.id}`} passHref>
									<Button variant="outlined" size="small">
										Learn More
									</Button>
								</Link>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	)
}

export default Products
