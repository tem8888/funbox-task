import React, { useState } from 'react';
import Product from './components/ProductCard';
import { ProductInterface, SelectedInterface } from './interfaces';

const App: React.FC = () => {
  const [selected, setSelected] = useState<SelectedInterface>({});

  const handlePicked = (product: ProductInterface) => {
    if (!selected[product.id]) {
      setSelected({ ...selected, [product.id]: product });
    } else {
      setSelected((selected) => {
        const copy = { ...selected };
        delete copy[product.id];
        return copy;
      });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <span className="title-text">Ты сегодня покормил кота?</span>
        </div>
        <div className="products-list">
          {data.map((item) => (
            <Product key={item.id} info={item} selected={selected} handlePicked={handlePicked} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

const data: ProductInterface[] = [
  {
    id: '01',
    topping: 'с фуа-гра',
    portion: 15,
    gift: 1,
    weight: 0.2,
    descriptionOutOfStock: 'Печалька, с фуа-гра закончился.',
    description: 'ммм...фуа-гра',
    inStock: true,
  },
  {
    id: '02',
    topping: 'с рыбой',
    portion: 41,
    gift: 2,
    weight: 2,
    descriptionOutOfStock: 'Печалька, с рыбой закончился.',
    description: 'Головы щучьи с чесноком, да свежайшая сёмгушка.',
    inStock: true,
  },
  {
    id: '03',
    topping: 'с курой',
    portion: 100,
    gift: 5,
    weight: 5,
    descriptionOutOfStock: 'Печалька, с курой закончился.',
    description: 'Последняя кура специально для вас.',
    inStock: false,
  },
];
