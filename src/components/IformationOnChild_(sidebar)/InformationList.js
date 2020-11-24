import React, { Component } from 'react';
import InformationItem from './InformationItem';
import house from '../../assets/InformationOnChild-Images/image20.svg';
import style from './informationList.module.css';
import { connect } from 'react-redux';
import childrenSelectors from '../../redux/selectors/ChildSelectors';

const InformationList = ({ childrens }) => {
  console.log(childrens);
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
              firstTask={children.tasks[0] ? children.tasks[0].name : ''}
              costFirstTask={
                children.tasks[0] ? `+ ${children.tasks[0].cost}` : ''
              }
              secondTask={children.tasks[1] ? children.tasks[1].name : ''}
              costSecondTask={
                children.tasks[1] ? `+ ${children.tasks[1].cost}` : ''
              }
            />
          </li>
        ))}
      </ul>
      <button className={style.childrenSidebar_button}>Додати дитину +</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  childrens: childrenSelectors.getChildrens(state),
});

export default connect(mapStateToProps, null)(InformationList);
