import React from 'react';

import Products from './products';
import s from './css/main.module.css';

const Main = () => {
  return (
    <div className={s.wrapper}>
      <Products amount={5} />
    </div>
  );
};

export default Main;
