import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/uploader';

function NewProduct() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
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

  // 파일 입력을 위한 리스너 설정
  React.useEffect(() => {
    register('file', { required: true });
  }, [register]);

  const handleChangeFile = (event) => {
    const files = event.target.files;
    setValue('file', files[0]);
  };

  const onSubmit = (data) => {
    console.log(data);
    uploadImage(file).then((url) => {
      console.log(url);
    });
  };

  return (
    <section>
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt='file preview'
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
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
          text='등록'
          type='submit'
        />
      </form>
    </section>
  );
}

export default NewProduct;
