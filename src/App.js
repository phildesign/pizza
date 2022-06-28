import { useEffect, useState } from 'react';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Sort from './components/Sort/Sort';

import './scss/app.scss';

const App = () => {
	const [pizzas, setPizzas] = useState([]);

	useEffect(() => {
		fetch('https://62bb03dc573ca8f83290dec6.mockapi.io/items')
			.then((res) => res.json())
			.then((data) => {
				setPizzas(data);
			});
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{pizzas.map((pizza) => {
							return <PizzaBlock {...pizza} key={pizza.id} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
