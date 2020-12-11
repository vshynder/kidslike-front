import React, { Component } from 'react';
import InformationItem from './InformationItem';
import house from '../../assets/InformationOnChild-Images/image20.svg';
import style from './informationList.module.css';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';
import AddFamilyForm from '../AddChildForm/Form';
import childrenSelectors from '../../redux/selectors/ChildSelectors';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class InformationList extends Component {
  state = {
    modal: false,
  };

  toggleModal = () => {
    this.setState((state) => ({ modal: !state.modal }));
  };

  render() {
    const { modal } = this.state;
    const { childrens } = this.props;
    return (
      <>
        {modal && (
          <Modal onClose={this.toggleModal}>
            <AddFamilyForm onClose={this.toggleModal}></AddFamilyForm>
          </Modal>
        )}
        <div className={style.childrenSidebar_container}>
          <div className={style.childrenSidebar_header}>
            <img
              className={style.childrenSidebar_house}
              src={house}
              alt="home"
            />
            <h2 className={style.childrenSidebar_title}>Сім'я</h2>
          </div>
          <ul className={style.childrenSidebar_childrens}>
            <TransitionGroup component="ul" className={style.childrenSidebar_childrens}>
              {childrens.map((children) => (
                 <CSSTransition in={true} appear={true} timeout={300} classNames={style} key={children._id}>
                  <li className={style.childrenSidebar_item} key={children._id}>
                    <InformationItem
                      childId={children._id}
                      male={children.gender}
                      name={children.name}
                      balance={children.stars ? children.stars : 0}
                    />
                  </li>
                  </CSSTransition>
              ))}
            </TransitionGroup>
          </ul>

          <button
            onClick={this.toggleModal}
            className={style.childrenSidebar_button}
          >
            Додати дитину +
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  childrens: childrenSelectors.getChildrens(state),
});

export default connect(mapStateToProps, null)(InformationList);
