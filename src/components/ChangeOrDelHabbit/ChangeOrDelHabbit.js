import React from "react";
import styless from "./ChangeOrDelHabbit.module.css";
console.log(styless);

class ChangeOrDelHabbit extends React.Component {
  render() {
    return (
      <div className={styless.modal}>
        <button className={styless.btn__modal}>Редагувати</button>
        <button className={styless.btn__modal}>Видалити</button>
      </div>
    );
  }
}

export default ChangeOrDelHabbit;
