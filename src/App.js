import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

import pizzas from './assets/pizzas.json';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories tittle="Мексиканская" price="300rub" />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaBlock title={obj.title} price={obj.price} imgUrl={obj.imageUrl} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
