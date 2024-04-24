import { useNavigate } from 'react-router-dom';

function ProductCard({
  product,
  product: { id, image, category, title, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      className='rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105'
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}>
      <img
        className='w-full'
        src={image}
        alt={title}
      />
      <div className='mt-2 px-2 text-lg flex justify-between items-center'>
        <h3 className='truncate'>{title}</h3>
        <p>{`₩${price.toLocaleString('ko-KR')}`}</p>
      </div>
      <p className='mb-2 px-2 text-gray-600'>{category}</p>
    </li>
  );
}

export default ProductCard;
