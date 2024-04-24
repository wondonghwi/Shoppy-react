import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/uploader';
import { addNewProduct } from '../api/firebase';

function NewProduct() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      price: '',
      category: '',
      description: '',
      options: '',
    },
  });
  const file = watch('file');
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  // 파일 입력을 위한 리스너 설정
  React.useEffect(() => {
    register('file', { required: true });
  }, [register]);

  const handleChangeFile = (event) => {
    const files = event.target.files;
    setValue('file', files[0]);
  };

  const onSubmit = (product) => {
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        addNewProduct(product, url) //
          .then(() => {
            setSuccess('성공적으로 제품이 등록되었습니다.');
            setTimeout(() => {
              setSuccess(null);
            }, 4000);
            reset();
          });
      }) //
      .finally(() => {
        setIsUploading(false);
      });
  };

  return (
    <section className='w-full text-center'>
      <h2 className='text-2xl font-bold my-4'>새로운 제품 등록</h2>
      {success && <p className='my-2'>✅ {success}</p>}
      {file && (
        <img
          className='w-96 mx-auto mb-2'
          src={URL.createObjectURL(file)}
          alt='file preview'
        />
      )}
      <form
        className='flex flex-col px-12'
        onSubmit={handleSubmit(onSubmit)}>
        <input
          type='file'
          accept='image/*'
          name='file'
          onChange={handleChangeFile}
        />
        {errors.file && <p>파일을 선택해주세요.</p>}
        <input
          type='text'
          {...register('title', { required: '제품명을 입력해주세요.' })}
          placeholder='제품명'
        />
        {errors.title && <p>{errors.title.message}</p>}
        <input
          type='number'
          {...register('price', { required: '가격을 입력해주세요.' })}
          placeholder='가격'
        />
        {errors.price && <p>{errors.price.message}</p>}
        <input
          type='text'
          {...register('category', { required: '카테고리를 입력해주세요.' })}
          placeholder='카테고리'
        />
        {errors.category && <p>{errors.category.message}</p>}
        <input
          type='text'
          {...register('description', {
            required: '제품 설명을 입력해주세요.',
          })}
          placeholder='제품 설명'
        />
        {errors.description && <p>{errors.description.message}</p>}
        <input
          type='text'
          {...register('options', { required: '옵션들을 입력해주세요.' })}
          placeholder='옵션들(콤마(,)로 구분)'
        />
        {errors.options && <p>{errors.options.message}</p>}
        <Button
          text={isUploading ? '업로딩 중...' : '제품 등록 하기'}
          disabled={isUploading}
          type='submit'
        />
      </form>
    </section>
  );
}

export default NewProduct;
