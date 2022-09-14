import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Keyboard from './components/KeyboardBlock';

import './scss/app.scss';

import keyboard from './assets/keyboard.json';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All keyboard</h2>
          <div className="content__items">
            {keyboard.map((obj) => (
              <Keyboard {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
