import React from 'react';

function ProductCard({ product: { id, image, category, title, price } }) {
  return (
    <li>
      <img
        src={image}
        alt={title}
      />
      <div>
        <h3>{title}</h3>
        <p>{`₩${price.toLocaleString('ko-KR')}`}</p>
      </div>
      <p>{category}</p>
    </li>
  );
}

export default ProductCard;
