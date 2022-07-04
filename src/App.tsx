import React from 'react';
import CatCard from './components/ProductCard';
import ProductList from './components/ProductList';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ProductInterface } from './interfaces';

const App: React.FC = () => {
  const [selected, setSelected] = useLocalStorage({}, 'cats');

  const handleSelected = (product: ProductInterface) => {
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
        <ProductList
          data={data}
          renderItem={(item) => (
            <CatCard key={item.id} info={item} selected={selected} handleSelected={handleSelected} />
          )}
        />
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
