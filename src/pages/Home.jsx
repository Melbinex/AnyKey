import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Keyboard from '../components/KeyboardBlock';
import Skeleton from '../components/KeyboardBlock/Skeleton';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://6321f79e82f8687273bdcab2.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All keyboard</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Keyboard key={obj.id} {...obj} />)}
      </div>
    </>
  );
};
export default Home;
