import products from '../../../json/products.json'

export default function ProductDetail({ params }: { params: { id: string } }) {
    const product = products.find((product) => product.id === params.id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h1>Product: {params.id}</h1>
            <h2>Name: {product.name}</h2>
            {/* You can access other properties of the product here */}
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}
