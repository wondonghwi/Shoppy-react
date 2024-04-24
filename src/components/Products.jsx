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
      <ul>
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
