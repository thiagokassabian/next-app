import { GetStaticPaths, GetStaticProps } from "next"
import { IProduct } from "../../@types"
import Product from "../../components/Product"
import api from "../../services/api"

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await api.get<IProduct[]>("/products?_start=0&_end=10")
	const paths = data.map(product => ({ params: { id: product.id.toString() } }))

	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async context => {
	const { id } = context.params!
	const { data } = await api.get<IProduct>(`/products/${id}`)

	return { props: { product: data }, revalidate: 10 }
}

const ProductPage = ({ product }: { product: IProduct }) => {
	return <Product product={product} />
}

export default ProductPage
