import React from 'react';
import s from './css/singleProduct.module.css';

function SingleProduct() {
  return (
    <div className={s.componentWrapper}>
      <div className={s.imgWrapper}>
        <img
          src="https://www.amara.com/static/uploads/images-2/products/huge/159092/indus-wooden-bowl-727793.jpg"
          alt="bowl_img"
        />
      </div>
      <div className={s.description}>Wooden Bowl</div>
    </div>
  );
}

export default SingleProduct;
