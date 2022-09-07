import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { SWRConfig } from "swr"
import { IProduct } from "../../@types"
import { useFetch } from "../../hooks/useFetch"
import api from "../../services/api"

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await api.get<IProduct[]>("/products")
	const paths = data.map(product => ({ params: { id: product.id.toString() } }))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data } = await api.get<IProduct>(`/products/${params!.id}`)

	return { props: { fallback: { [`/products/${params!.id}`]: data } } }
}

// interface IProductProps {
// 	product: IProduct
// }

// const Product = ({ product }: IProductProps) => {
const Product = () => {
	const router = useRouter()
	const { id } = router.query
	const { data } = useFetch<IProduct>(`/products/${id}`)
	// console.log(data)

	if (!data) return <p>Carregando...</p>

	return (
		<>
			<h2>{data.title}</h2>
			<div>{data.description}</div>
			<div>{data.price}</div>
		</>
	)
}

// export default function Page({ product, fallback }: { product: IProduct; [key: string]: any }) {
export default function Page({ fallback }: { fallback: IProduct }) {
	// SWR hooks inside the `SWRConfig` boundary will use those values.
	// console.log(fallback)
	// console.log(product)
	return (
		<SWRConfig value={{ fallback }}>
			<Product />
		</SWRConfig>
	)
}
