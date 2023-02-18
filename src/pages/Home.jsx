import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';

const Home = () => {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [categoryId, setCategoryId] = useState(0);
	const [sortType, setSortType] = useState({
		name: 'популярности',
		sortProperty: 'rating',
	});

	useEffect(() => {
		setIsLoading(true);

		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const sortBy = sortType.sortProperty.replace('-', '');
		const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

		fetch(
			`https://62bb03dc573ca8f83290dec6.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
		)
			.then((res) => res.json())
			.then((data) => {
				setPizzas(data);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [categoryId, sortType]);

	return (
		<div className="container">
			<div className="content__top">
				<Categories value={categoryId} onChangeCategory={(index) => setCategoryId(index)} />
				<Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoading
					? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
					: pizzas.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
			</div>
		</div>
	);
};

export default Home;
