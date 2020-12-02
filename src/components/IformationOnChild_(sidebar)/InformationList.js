import React, { Component } from 'react';
import InformationItem from './InformationItem';
import house from '../../assets/InformationOnChild-Images/image20.svg';
import style from './informationList.module.css';
import { connect } from 'react-redux';
import childrenSelectors from '../../redux/selectors/ChildSelectors';

const InformationList = ({ childrens, onClick }) => {
  return (
    <div className={style.childrenSidebar_container}>
      <div className={style.childrenSidebar_header}>
        <img className={style.childrenSidebar_house} src={house} alt="home" />
        <h2 className={style.childrenSidebar_title}>Сім'я</h2>
      </div>
      <ul className={style.childrenSidebar_childrens}>
        {childrens.map((children) => (
          <li className={style.childrenSidebar_item} key={children._id}>
            <InformationItem
              childId={children._id}
              male={children.gender}
              name={children.name}
              balance={children.stars}
              firstTask={
                children.tasks[0]
                  ? children.tasks[0].title.length > 22
                    ? `${children.tasks[0].title.slice(0, 22)}...`
                    : children.tasks[0].title
                  : ''
              }
              costFirstTask={
                children.tasks[0] ? `+ ${children.tasks[0].reward}` : ''
              }
              secondTask={
                children.tasks[1]
                  ? children.tasks[1].title.length > 22
                    ? `${children.tasks[1].title.slice(0, 22)}...`
                    : children.tasks[1].title
                  : ''
              }
              costSecondTask={
                children.tasks[1] ? `+ ${children.tasks[1].reward}` : ''
              }
            />
          </li>
        ))}
      </ul>

      <button onClick={onClick} className={style.childrenSidebar_button}>
        Додати дитину +
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  childrens: childrenSelectors.getChildrens(state),
});

export default connect(mapStateToProps, null)(InformationList);
