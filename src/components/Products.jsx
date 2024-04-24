import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../api/firebase';
import ProductCard from './ProductCard';

function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
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
