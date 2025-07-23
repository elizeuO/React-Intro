import { useParams, Link } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';

const Product = () => {
    const { id } = useParams();

    const url = "http://localhost:3000/products/" + id;

    const { data: product } = useFetch(url);

    if(!product) return <p>Carregando...</p>

    return (
        <>
            <p>ID do produto: {id}</p>
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R${product.price}</p>
                    {/*Nested Route*/}
                    <Link to={`/products/${id}/info`}>Mais informações </Link>
                </div>
                  ) }
        </>
    )
}

export default Product