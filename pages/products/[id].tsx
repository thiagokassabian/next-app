import { useRouter } from "next/router"

const Product = () => {
	const router = useRouter()
	const { id } = router.query

	return <div>Product {id}</div>
}

export default Product