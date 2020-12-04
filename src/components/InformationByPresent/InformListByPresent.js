import React, { Component, useEffect } from 'react';
import InformItemByPresent from './InformItemByPresent';
import present from '../../assets/informationByPresent/image 16.svg';
import style from './informListByPresent.module.css';
import { connect } from 'react-redux';
import presentSelector from '../../redux/selectors/presentSelector';
import operationPresent from '../../redux/operations/presentOperation'

const InformationListByPresent = ({ presents ,getPresents}) => {

  useEffect(() => {
    getPresents();
  }, []);

  return (
    <div className={style.presentItem_container}>
      {/* <div className={style.presentItem_header}>
        <img
          className={style.presentItem_present}
          src={present}
          alt="present"
        />
        <h2 className={style.presentItem_title}>Подарунки</h2>
      </div> */}
      <ul className={style.presentItem_childrens}>
        {presents && presents.map((present) => (
         
          <li className={style.presentItem_item} key={present._id}>
            <InformItemByPresent
              idPresent={present._id}
              childId={present._id}
              gender={present.gender}
              reward={present.reward}
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
      {/* <button className={style.presentItem_button}>Додати подарунок +</button> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  presents: presentSelector.getPresents(state),
});

const mapDispatchToProps = {
  getPresents:operationPresent.getAllPresents ,
};
export default connect(mapStateToProps, mapDispatchToProps)(InformationListByPresent);
