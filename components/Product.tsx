import { useRouter } from "next/router"
import { IProduct } from "../@types"
import { useFetch } from "../hooks/useFetch"

const Product = ({ product }: { product: IProduct }) => {
	const router = useRouter()
	const { id } = router.query
	const { data } = useFetch<IProduct>(`/products/${id?.toString() || product.id}`)

	// if (!data) return <p>Carregando...</p>

	return (
		<>
			<h2>{product.title}</h2>
			<div>{product.description}</div>
			<div>
				<strong>$ {data?.price || product.price}</strong>
			</div>
		</>
	)
}

export default Product
