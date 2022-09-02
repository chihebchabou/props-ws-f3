import React from 'react';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';

const ProductList = props => {
  const { prods } = props;
  // console.log(props);

  const showPrice = price => alert(`price: ${price}`);
  return (
    <div className="row">
      {prods.map((product, i) => (
        <ProductItem
          title={product.name}
          product={product}
          key={i}
          showPrice={showPrice}
        >
          <span className="badge bg-secondary">{product.id}</span>
        </ProductItem>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  prods: PropTypes.array.isRequired,
};

export default ProductList;
