import React, { useState, createRef } from 'react';
import { ProductInterface } from '../interfaces';
import './ProductCard.css';

interface Props {
  info: ProductInterface;
  selected: {
    [id: string]: ProductInterface;
  };
  handleSelected: (info: ProductInterface) => void;
}

const Product: React.FC<Props> = ({ info, selected, handleSelected }) => {
  const [mouseHover, setMouseHover] = useState<boolean>(false);
  const productRef = createRef<HTMLDivElement>();

  // Функция подбора правильного склонения для названий товаров, подарков и тд в зависимости от их количества
  const decl = function (n: number, fras: string[]) {
    return fras[
      n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2
    ];
  };

  const onClickSelected = (e: React.MouseEvent<HTMLDivElement>, info: ProductInterface) => {
    if (!info.inStock) {
      return null;
    }
    handleSelected(info);
    setMouseHover(false);
  };

  // рендер описания в нижней части карточки в зависимости от ее состояния
  const renderDescription = () => {
    if (!info.inStock) {
      return <div className="product__description">Печалька, {info.topping} закончился</div>;
    } else if (!selected[info.id]) {
      return (
        <div className="product__description" data-testid="description">
          Чего сидишь? Порадуй котэ,{' '}
          <a href="#" className="product__link" onClick={() => handleSelected(info)}>
            {' '}
            купи.
          </a>
        </div>
      );
    } else
      return (
        <div className="product__description" data-testid="description">
          {info.description}
        </div>
      );
  };

  return (
    <div className="product">
      <div
        className={`product__card${
          !info.inStock ? ' product__card--disabled' : selected[info.id] ? ' product__card--selected' : ''
        }`}
        ref={productRef}
        onClick={(e) => onClickSelected(e, info)}
        onMouseEnter={() => setMouseHover(true)}
        onMouseLeave={() => setMouseHover(false)}
        role="product-card"
      >
        <div className="product__info">
          <p className={`product__header-text${mouseHover && selected[info.id] ? ' product__header-text--red' : ''}`}>
            {mouseHover && selected[info.id] ? 'Котэ не одобряет?' : 'Сказочное заморское явство'}
          </p>
          <h2 className="product__title">Нямушка</h2>
          <h3 className="product__topping" role="topping-name">
            {info.topping}
          </h3>
          <p className="product__extra">
            <b>{info.portion}</b> {decl(info.portion, ['порция', 'порции', 'порций'])}
            <br />
            <b>{info.gift}</b> {decl(info.gift, ['мышь', 'мыши', 'мышей'])} в подарок
          </p>
          <div className="product__weight weight">
            <span>{info.weight}</span>
            <span className="weight__kg">кг</span>
          </div>
        </div>
      </div>
      {renderDescription()}
    </div>
  );
};

export default Product;
