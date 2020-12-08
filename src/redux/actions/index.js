// импортим все экшнс сюда
import addChildActions from '../../components/AddChildForm/AddChildActions';
import habbit from './allHabbitsAction';
import auth from './authActions';

const actions = {
  addChildActions,
  habbit,
  auth,
};

export default actions;
