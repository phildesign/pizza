import { useEffect, useState } from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';
import Sort from './components/Sort';

import './scss/app.scss';

const App = () => {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('https://62bb03dc573ca8f83290dec6.mockapi.io/items')
			.then((res) => res.json())
			.then((data) => {
				setPizzas(data);
				setIsLoading(false);
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
						{isLoading
							? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
							: pizzas.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
