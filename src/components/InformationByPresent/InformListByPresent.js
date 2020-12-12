import React, { Component, useEffect, useState } from 'react';
import InformItemByPresent from './InformItemByPresent';
import present from '../../assets/informationByPresent/image 16.svg';
import style from './informListByPresent.module.css';
import trStyle from './trStyle.module.css';
import { connect } from 'react-redux';
import presentSelector from '../../redux/selectors/presentSelector';
import operationPresent from '../../redux/operations/presentOperation';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ChildSelectors from '../../redux/selectors/ChildSelectors';

const InformationListByPresent = ({
  presents,
  getPresents,
  deletePresent,
  buyPresent,
}) => {
  const [child, setChild] = useState('');

  useEffect(() => {
    getPresents();
  }, []);

  return (
    <div className={style.presentItem_container}>
      {presents && (
        <TransitionGroup component="ul" className={style.presentItem_childrens}>
          {presents.map((present) => (
            <CSSTransition
              in={true}
              // appear={true}
              classNames={trStyle}
              key={present._id}
              timeout={250}
              unmountOnExit
            >
              <li className={style.presentItem_item} key={present._id}>
                <InformItemByPresent
                  idPresent={present._id}
                  childId={present.childId}
                  reward={present.reward}
                  title={
                    present.title.length > 13
                      ? `${present.title.slice(0, 13)}...`
                      : present.title
                  }
                  image={present.image}
                  deletePresent={deletePresent}
                  buyPresent={buyPresent}
                />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  presents: presentSelector.getPresents(state),
});

const mapDispatchToProps = {
  getPresents: operationPresent.getAllPresents,
  deletePresent: operationPresent.removePresent,
  buyPresent: operationPresent.buyPresentById,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InformationListByPresent);
