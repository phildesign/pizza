import React, { useState } from 'react';

const Categories = () => {
	const categoties = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
	const [activeCategory, setActiveCategory] = useState(0);

	const onClickCategory = (index) => {
		setActiveCategory(index);
	};

	return (
		<div className="categories">
			<ul>
				{categoties.map((item, index) => {
					return (
						<li
							className={activeCategory === index ? 'active' : ''}
							onClick={() => onClickCategory(index)}
							key={item + index}>
							{item}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Categories;
