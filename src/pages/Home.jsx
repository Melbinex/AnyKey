import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Keyboard from '../components/KeyboardBlock';
import Skeleton from '../components/KeyboardBlock/Skeleton';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setsorType] = React.useState({
    name: 'popularity asc',
    sortProperty: 'rating',
    order: 'asc',
  });
  console.log(categoryId, sortType);
  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6321f79e82f8687273bdcab2.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sortProperty}&order=${sortType.order}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortType]);
  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
        <Sort value={sortType} onChangeSort={(id) => setsorType(id)} />
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
