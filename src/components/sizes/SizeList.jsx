import React from 'react';
import SizeItem from './SizeItem';
import PropTypes from 'prop-types';

const SizeList = props => {
  return props.sizes.map((size, i) => <SizeItem size={size} key={i} />);
};

SizeList.propTypes = {
  sizes: PropTypes.array.isRequired,
};

export default SizeList;
