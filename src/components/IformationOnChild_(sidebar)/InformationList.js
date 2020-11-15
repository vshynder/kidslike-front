import React, { Component } from 'react';
import InformationItem from './InformationItem';
import house from '../../assets/InformationOnChild-Images/image20.svg';
import style from './informationList.module.css';

export default class InformationList extends Component {
	state = {
		childrens: [
			{
				id: 1,
				name: 'Саша',
				gender: 'male',
				balance: 32,
				tasks: [ { name: 'Викинути смiття', cost: 4 }, { name: 'Помити посуд', cost: 5 } ]
			},
			{
				id: 2,
				name: 'Маша',
				gender: 'female',
				balance: 42,
				tasks: [ { name: 'Прибрати кiмнату', cost: 7 }, { name: '11 в щоденнику', cost: 5 } ]
			},
			{
				id: 3,
				name: 'Лена',
				gender: 'female',
				balance: 2,
				tasks: [ { name: 'Прибрати кiмнату', cost: 7 }, { name: '11 в щоденнику', cost: 5 } ]
			},
			{
				id: 4,
				name: 'Игорь',
				gender: 'male',
				balance: 24,
				tasks: [ { name: 'Прибрати кiмнату', cost: 7 }, { name: '11 в щоденнику', cost: 5 } ]
			}
		]
	};

	render() {
		const { childrens } = this.state;
		return (
			<div className={style.childrenSidebar_container}>
				<div className={style.childrenSidebar_header}>
					<img className={style.childrenSidebar_house} src={house} alt="home" />
					<h2 className={style.childrenSidebar_title}>Сiм`я</h2>
				</div>
				<ul className={style.childrenSidebar_childrens}>
					{childrens.map((children) => (
						<li className={style.childrenSidebar_item} key={children.id}>
							<InformationItem
								male={children.gender}
								name={children.name}
								balance={children.balance}
								firstTask={children.tasks[0].name}
								costFirstTask={children.tasks[0].cost}
								secondTask={children.tasks[1].name}
								costSecondTask={children.tasks[1].cost}
							/>
				        </li>
					))}
				</ul>
				<button className={style.childrenSidebar_button}>Додати дитину +</button>
			</div>
		);
	}
}
