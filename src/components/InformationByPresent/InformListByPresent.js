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
  children,
}) => {
  // const [child, setChild] = useState('');
  useEffect(() => {
    getPresents();
  }, []);

  const findChild = (childId) => {
    const child = children.filter((child) => child._id === childId);
    return child[0];
  };
  return (
    <div className={style.presentItem_container}>
      {presents && (
        <TransitionGroup component="ul" className={style.presentItem_childrens}>
          {presents.map((present) => {
            const child = findChild(present.childId);
            return (
              <CSSTransition
                in={true}
                // appear={true}
                classNames={trStyle}
                key={present._id}
                timeout={250}
                unmountOnExit
              >
                {
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
                      child={child ? child : ''}
                    />
                  </li>
                }
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  children: ChildSelectors.getChildrens(state),
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
