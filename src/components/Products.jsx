import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';

function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <p>{error.message}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}></ProductCard>
            );
          })}
      </ul>
    </>
  );
}

export default Products;
