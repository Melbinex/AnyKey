import React from 'react';
function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = [
    'All',
    'Traditionaly',
    'Russian symbols',
    'Ergonomical',
    'Spacial for MAC',
    'Custom',
  ];
  const onClickCategory = (i) => {
    setActiveIndex(i);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => {
          return (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={activeIndex === i ? 'active' : ''}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
