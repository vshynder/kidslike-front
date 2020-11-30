import React, { Component } from 'react';
import InformItemByPresent from './InformItemByPresent';
import present from '../../assets/informationByPresent/image 16.svg';
import style from './informListByPresent.module.css';
import { connect } from 'react-redux';
import presentSelector from '../../redux/selectors/presentSelector';

const InformationListByPresent = ({ presents }) => {
  return (
    <div className={style.presentItem_container}>
      <div className={style.presentItem_header}>
        <img
          className={style.presentItem_present}
          src={present}
          alt="present"
        />
        <h2 className={style.presentItem_title}>Подарунки</h2>
      </div>
      <ul className={style.presentItem_childrens}>
        {presents.map((present) => (
          <li className={style.presentItem_item} key={present.id}>
            <InformItemByPresent
              childId={present.childId}
              gender={present.gender}
              bal={present.bal}
              title={
                present.title.length > 13
                  ? `${present.name.slice(0, 13)}...`
                  : present.title
              }
              image={present.image}
            />
          </li>
        ))}
      </ul>
      <button className={style.presentItem_button}>Додати подарунок +</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  presents: presentSelector.getPresents(state),
});

export default connect(mapStateToProps, null)(InformationListByPresent);
