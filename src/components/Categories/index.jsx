import React from 'react';

const Categories = ({ value, onChangeCategory }) => {
	const categoties = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	return (
		<div className="categories">
			<ul>
				{categoties.map((item, index) => {
					return (
						<li
							className={value === index ? 'active' : ''}
							onClick={() => onChangeCategory(index)}
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
