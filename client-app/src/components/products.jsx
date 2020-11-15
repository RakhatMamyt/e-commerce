import React from 'react';
import SingleProduct from './singleProduct';

import s from './css/products.module.css';

function Products(props) {
  let amount = props.amount;
  let allProducts = [];

  for (let i = 0; i < amount; i++) {
    allProducts.push(<SingleProduct key={i} />);
  }

  return <div className={s.wrapper}>{allProducts}</div>;
}

export default Products;
