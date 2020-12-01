import React from 'react';
import InformationByHabbit from '../InformationByHabbit/InformationByHabbit';
import { connect } from 'react-redux';
import habbitOperation from '../../redux/operations/habbitOperation';

class ContainerForAllHabbits extends React.Component {
  componentDidMount() {
    this.props.getAllHabbitsByUser();
  }
  render() {
    console.log('allHabbits ', this.props.allHabbits);
    const { allHabbits } = this.props;
    return (
      allHabbits.length > 0 &&
      allHabbits.map((el) => <InformationByHabbit key={el._id} id={el._id} />)
    );
  }
}

const mapStateToProps = (state) => ({
  allHabbits: state.habbits,
});

const mapDispatchToProps = {
  getAllHabbitsByUser: habbitOperation.getAllHabbitsByUser,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerForAllHabbits);
