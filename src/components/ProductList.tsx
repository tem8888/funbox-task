import React from 'react';

interface Props<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

function ProductList<T>({ data, renderItem }: Props<T>) {
  return <div className="products-list">{data.map(renderItem)}</div>;
}

export default ProductList;
